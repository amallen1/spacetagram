import { createGlobalStyle, css } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    /* background: linear-gradient(#07057a, #3f2f6c); */
    background-color: #ececec;
    font-family: "Poppins", sans-serif;
  }
`}`;
