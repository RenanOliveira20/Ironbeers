import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body{
      background-color: yellow ;
      padding-top: 7%;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  
`;
