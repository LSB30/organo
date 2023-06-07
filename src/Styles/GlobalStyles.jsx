import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-asx-font-smoothing: grayscale;
    
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: #fff;
  }
`;
