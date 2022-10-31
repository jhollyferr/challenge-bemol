import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .prevButton {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #b8b8d4;
  }
`;