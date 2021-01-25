import styled, { createGlobalStyle } from 'styled-components';
import { cssVar, darken } from 'polished';

export const PageStyle = createGlobalStyle`
  img {
    width: 25rem;
  }

  @media (max-width: 750px) {
    :root {
      font-size: 55%!important;
    }
  }

  @media (max-width: 525px) {
    :root {
      font-size: 45%!important;
    }
  }

  @media (max-width: 390px) {
    :root {
      font-size: 35%!important;
    }
  }

  @media (max-width: 300px) {
    :root {
      font-size: 25%!important;
    }
  }

  @media (max-width: 200px) {
    :root {
      font-size: 20%!important;
    }
  }

  @media (max-width: 170px) {
    :root {
      font-size: 15%!important;
    }
  }

  @media (max-width: 120px) {
    :root {
      font-size: 10%!important;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: var(--text-tertiary);

    transition: color 200ms;

    &:hover {
      color: ${darken(0.3, String(cssVar('--text-tertiary', '#a8a8b3')))}
    }

    svg {
      margin-right: 0.2rem;

      font-size: 2rem;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 8rem;

  header {
    display: flex;
    align-items: center;

    img {
      width: 12rem;
      height: 12rem;

      border-radius: 50%;
    }

    div {
      margin-left: 2.4rem;

      strong {
        font-size: 3.6rem;
        color: var(--text-quaternary);
      }

      p {
        margin-top: 0.4rem;

        font-size: 1.8rem;
        color: var(--text-quintenary);
      }
    }
  }

  ul {
    display: flex;

    margin-top: 4rem;

    list-style-type: none;

    li {
      & + li {
        margin-left: 8rem;
      }

      strong {
        display: block;

        font-size: 3.6rem;

        color: var(--text-quaternary);
      }

      span {
        display: block;

        margin-top: 0.4rem;

        color: var(--text-quintenary);
      }
    }
  }
`;

export const Issues = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;

  &:last-child {
    margin-bottom: 2rem;
  }

  a {
    display: flex;
    align-items: center;

    width: 100%;

    margin-top: 1.6rem;
    border-radius: 0.5rem;
    padding: 2.4rem;

    background-color: var(--text-secondary);

    text-decoration: none;

    transition: transform 200ms;


    &:hover {
      transform: translateX(2rem);

      svg {
        color: var(--text-primary);
      }
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
