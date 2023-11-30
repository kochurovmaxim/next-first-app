import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    margin-left: calc(100vw - 100%);
    height: 100%;
  }

  body,
  html {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    min-height: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    color: #fff;
    background-color: #1E252B;
    transition: transform 0.3s linear;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;

    &.open-modal {
      overflow: hidden;
    }

    &.show-menu {
      transform: translateX(-300px);
      overflow: hidden;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    scroll-behavior: smooth;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
