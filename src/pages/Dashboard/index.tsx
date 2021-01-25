import { FunctionComponent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import {
  Title, Form, Repositories, PageStyle,
} from './styles';

const Dashboard: FunctionComponent = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore Repositórios no Github.</Title>

    <Form>
      <input type="text" placeholder="Digite aqui o nome do repositório..." />
      <button type="submit">Mostrar</button>
    </Form>

    <Repositories>
      <a href="/#">

        <img
          src="https://picsum.photos/200"
          alt="Profile"
        />

        <div>
          <strong>rocketseat/repo</strong>
          <p>Repo description</p>
        </div>

        <FiChevronRight />

      </a>

      <a href="/#">

        <img
          src="https://picsum.photos/200"
          alt="Profile"
        />

        <div>
          <strong>rocketseat/repo</strong>
          <p>Repo description</p>
        </div>

        <FiChevronRight />

      </a>

      <a href="/#">

        <img
          src="https://picsum.photos/200"
          alt="Profile"
        />

        <div>
          <strong>rocketseat/repo</strong>
          <p>Repo description</p>
        </div>

        <FiChevronRight />

      </a>

      <a href="/#">

        <img
          src="https://picsum.photos/200"
          alt="Profile"
        />

        <div>
          <strong>rocketseat/repo</strong>
          <p>Repo description</p>
        </div>

        <FiChevronRight />

      </a>
    </Repositories>

    <PageStyle />
  </>
);

export default Dashboard;
