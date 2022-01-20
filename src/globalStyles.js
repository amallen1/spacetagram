import { createGlobalStyle, css } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(3, 3, 110, 1) 35%,
      rgba(31, 107, 166, 1) 100%
    );
    background-repeat: no-repeat;
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
    color: black;
  }
`}`;
