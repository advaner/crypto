import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: "Roboto", "sans-serif";
        height: 100%;
        width: 100%;

        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased; 
    }

    #root {
        height: 100%;
        width: 100%;

        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle