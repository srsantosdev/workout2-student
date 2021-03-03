import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    height: 100vh;
    background: #2A2F36;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 400 1.6rem 'Roboto Mono', serif;
    color: #FFFFFF;
  }

  button {
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`