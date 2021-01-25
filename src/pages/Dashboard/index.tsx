import {
  FormEvent, FunctionComponent, useState, useEffect,
} from 'react';
import { FiChevronRight, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import {
  Title, Form, Repositories, Error, PageStyle,
} from './styles';

interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: FunctionComponent = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories) as IRepository[];
    }

    return [] as IRepository[];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(event: FormEvent): Promise<void> {
    event.preventDefault();

    setInputError('');

    if (!newRepo) {
      setTimeout(() => {
        setInputError('Digite o nome do repositório antes de fazer a busca.');
      }, 1);
      return;
    }

    try {
      const resource = await api.get(`repos/${newRepo}`);

      const repository = resource.data as IRepository;

      setRepositories([...repositories, repository]);
      setNewRepo('');
    } catch {
      setInputError('Erro ao buscar o repositório.');
    }
  }

  function deleteRepositories(): void {
    localStorage.removeItem('@GithubExplorer:repositories');
    setRepositories([] as IRepository[]);
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github.</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite aqui o nome do repositório..."
        />
        <button type="submit">Mostrar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories[0]
          && (
          <button onClick={deleteRepositories} type="button">
            Apagar Histórico
            <FiTrash2 />
          </button>
          )}
        {repositories.map((repository) => {
          if (repository.owner !== undefined) {
            return (
              <a key={repository.full_name} href="/#">

                <img
                  src={String(repository.owner.avatar_url)}
                  alt={String(repository.owner.login)}
                />

                <div>
                  <strong>{repository.full_name}</strong>
                  <p>{repository.description}</p>
                </div>

                <FiChevronRight />

              </a>
            );
          }

          return <></>;
        })}
      </Repositories>

      <PageStyle />
    </>
  );
};

export default Dashboard;
