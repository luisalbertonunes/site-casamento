import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: 'Fabada';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/fabada.ttf') format("truetype");
    }
    body{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        a, p {
            font-family: Fabada, Arial, Helvetica, sans-serif
        }
    }
`;