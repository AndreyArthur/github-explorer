import { FunctionComponent, useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import {
  Header, RepositoryInfo, Issues, PageStyle,
} from './styles';
import api from '../../services/api';

interface IRepositoryParams {
  repository: string;
}

interface IRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface IIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: FunctionComponent = () => {
  const [repository, setRepository] = useState(null as IRepository | null);
  const [issues, setIssues] = useState([] as IIssue[]);

  const { params } = useRouteMatch<IRepositoryParams>();

  async function getRepositoryDataAndIssues(): Promise<void> {
    const [repositoryResource, issuesResource] = await Promise.all([
      api.get(`/repos/${params.repository}`),
      api.get(`/repos/${params.repository}/issues`),
    ]);

    setRepository(repositoryResource.data);
    setIssues(issuesResource.data);
  }

  useEffect(() => {
    getRepositoryDataAndIssues();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft /> Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt="Profile" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues && issues.map((issue) => (
          <a
            href={issue.html_url}
            key={issue.id}
            target="blank"
          >

            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight />
          </a>
        ))}
      </Issues>
      <PageStyle />
    </>
  );
};

export default Repository;
