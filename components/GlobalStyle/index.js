import { createGlobalStyle } from "styled-components";

import { gridStyles } from "./grid";
import { normalizedStyles } from "./normalize";

export const GlobalStyle = createGlobalStyle`

  ${normalizedStyles}

  ${(props) => {
    const { theme } = props;
    const { colors } = theme;

    return `
      :root {
        --color-primary: ${colors.primary};
        --color-text: ${colors.text};
        --font-serif: 'Alegreya', serif;
        --font-sans: 'Kanit', sans-serif;
        --header-height: 120px;
      }
    `;
  }};


  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--font-sans);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--font-sans);
    font-weight: 900;
    font-style: italic;
  }

  .section {
    &__title {
      font-size: 92px;
      text-align: right;
    }

    &:nth-of-type(2n) {
      text-align: left;
    }
  }

  p {
    font-family: var(--font-serif);
  }

  body {
    color: var(--color-text);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${gridStyles};

  .layout {
    padding-top: var(--header-height);
  }
`;
