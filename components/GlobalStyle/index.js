import { createGlobalStyle } from "styled-components";

import { gridStyles } from "./grid";
import { normalizedStyles } from "./normalize";

import {
  HEADER_BASE_HEIGHT_PX,
  HEADER_SCROLLED_HEIGHT_PX,
  FOOTER_HEIGHT_PX,
} from "lib/constants";

export const GlobalStyle = createGlobalStyle`

  ${normalizedStyles}

  ${(props) => {
    const { theme } = props;
    const { colors } = theme;

    return `
      :root {
        --color-primary: ${colors.primary};
        --color-text: ${colors.text};
        --color-link: ${colors.link};
        --color-accent: ${colors.accent};
        --color-secondary: ${colors.secondary};
        --font-serif: 'Alegreya', serif;
        --font-sans: 'Kanit', sans-serif;
        --header-height: ${HEADER_BASE_HEIGHT_PX}px;
        --header-height-scrolled: ${HEADER_SCROLLED_HEIGHT_PX}px;
        --footer-height: ${FOOTER_HEIGHT_PX}px;
        --font-size-big-title: 92px;
        --font-size-hero-text: 82px;
      }
    `;
  }};

  @media (max-width: 1200px) {
      :root {
        --font-size-big-title: 62px;
        --font-size-hero-text: 62px;
      }
  }

  @media (max-width: 680px) {
      :root {
        --font-size-big-title: 42px;
        --font-size-hero-text: 32px;
      }
  }


  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--font-sans);
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--font-sans);
    font-weight: 900;
    font-style: italic;
  }

  .big-title {
    font-size: var(--font-size-big-title, 92px);
    letter-spacing: 1px;
  }

  .section {
    &__title {
      font-size: var(--font-size-big-title, 92px);
      text-align: right;
    }

    &:nth-of-type(2n) {

      &__title {
        text-align: left;
      }
    }
  }

  p {
    font-family: var(--font-serif);
  }

  body {
    color: var(--color-text);
  }

  a {
    color: var(--color-link);
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

  p {
    line-height: 1.4;
    font-size: 1rem;
  }

  button,
  button,
  a.button {
    display: inline-block;
    background: var(--color-accent);
    color: #000;
    padding: 14px 16px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px 0 rgba(0,0,0,0.2);
    transition: all 300ms ease;
    border: none;

    &:hover {
      background: var(--color-accent);
      box-shadow: 0px 0px 1px rgba(0,0,0,0.1);
    }

    &:focus {
      background: var(--color-accent);
      box-shadow: 0px 0px 0px rgba(0,0,0,0);
    }
  }

  .page-body {
    a {
      text-decoration: underline;
      font-weight: bold;
      transition: all 300ms ease;

      &:hover {
        opacity: 0.8;
      }

      &:focus {
        color: var(--color-secondary);
        opacity: 1;
      }
    }
  }
`;
