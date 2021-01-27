import { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/background.svg';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --background: #f0f0f5;
    --text-primary: #3a3a3a;
    --text-secondary: #ffffff;
    --text-tertiary: #a8a8b3;
    --text-quaternary: #3d3d4d;
    --text-quintenary: #737380;
    --success: #04d361;
    --danger: #c53030;
  }

  * {
    margin: 0;
    padding: 0;

    font-family: 'Roboto', sans-serif;

    box-sizing: border-box;
  }

  html, body, #root {
    font-size: 1.6rem;

    height: 100%;

    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: var(--background);
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: 70% top;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;

    margin: 0 auto;
    padding: 4rem 2rem;
  }
`;
