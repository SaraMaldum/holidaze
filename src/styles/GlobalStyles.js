import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    h1 {
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }
    h2 {
        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
`;

export default GlobalStyle;