import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 10rem;
  }
  @media(max-width: 800px) {
    body {
      padding-top: 15rem;
    }
  }
`;