import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: #f2f2f2;
  color: #312e38;
  -webkit-font-smmothing: antialiased;
}

body, input, button {
  font-family: 'Ropoto Slab', serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}

`;
