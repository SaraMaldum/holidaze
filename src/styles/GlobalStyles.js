import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Lato&display=swap');

    body {
        height: 100vh;
        display: flex;
        flex-direction: column;
        color: ${({theme}) => theme.colors.darkBlue};
        font-family: 'Lato', sans-serif;
    }
    h1, h2, h3 {
        font-family: 'Fira Sans', sans-serif;
    }
`

export default GlobalStyle;