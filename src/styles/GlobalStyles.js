import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        display: flex;
        flex-direction: column;
        color: ${({theme}) => theme.colors.darkBlue}
    }
`

export default GlobalStyle;