import styled, { createGlobalStyle } from 'styled-components';
import { cssVar, shade } from 'polished';

export const PageStyle = createGlobalStyle`
  img {
    width: 25rem;
  }

  @media (max-width: 750px) {
    :root {
      font-size: 55%!important;
    }
  }

  @media (max-width: 460px) {
    :root {
      font-size: 45%!important;
    }
  }

  @media (max-width: 360px) {
    :root {
      font-size: 35%!important;
    }
  }

  @media (max-width: 260px) {
    :root {
      font-size: 25%!important;
    }
  }

  @media (max-width: 190px) {
    :root {
      font-size: 20%!important;
    }
  }

  @media (max-width: 150px) {
    :root {
      font-size: 15%!important;
    }
  }
`;

export const Title = styled.h1`
  max-width: 45rem;
  line-height: 5.6rem;

  margin-top: 8rem;

  font-size: 4.8rem;
  color: var(--text-primary);
`;

export const Form = styled.form`
  display: flex;

  max-width: 70rem;

  margin-top: 4rem;

  input {
    flex: 1;

    height: 7rem;

    padding: 0 2.4rem;
    border: 0;
    border-radius: 0.5rem 0 0 0.5rem;

    font-size: 1.8rem;
    color: var(--text-primary);

    &::placeholder {
      color: var(--text-tertiary);
    }
  }

  button {
    width: 21rem;
    height: 7rem;

    border-radius: 0 0.5rem 0.5rem 0;
    border: 0;

    background-color: var(--success);

    font-weight: bold;
    font-size: 1.8rem;
    color: var(--text-secondary);

    transition: background-color 200ms;

    &:hover {
      background-color: ${shade(0.1, String(cssVar('--success', '#04d361')))};
    }
  }
`;

export const Repositories = styled.div`
  max-width: 70rem;

  margin-top: 8rem;

  a {
    display: flex;
    align-items: center;

    width: 100%;

    border-radius: 0.5rem;
    padding: 2.4rem;

    background-color: var(--text-secondary);

    text-decoration: none;

    transition: transform 200ms;

    & + a {
      margin-top: 1.6rem;
    }

    &:hover {
      transform: translateX(2rem);

      svg {
        color: var(--text-primary);
      }
    }

    img {
      width: 6.4rem;
      height: 6.4rem;

      border-radius: 50%;
    }

    div {
      margin-left: 1.6rem;

      strong {
        font-size: 2rem;
        color: var(--text-primary);
      }

      p {
        margin-top: 0.4rem;

        font-size: 1.8rem;
        color: var(--text-tertiary);
      }
    }

    svg {
      margin-left: auto;

      font-size: 4rem;
      color: var(--text-tertiary);

      transition: color 200ms;
    }
  }
`;
