import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
}
*,
*::before,
*::after {
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%; 
    position: relative;
    font-family: 'Inter', sans-serif;
    
}
`;
