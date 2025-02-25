import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :focus {
        outline: 0;
        box-shadow: none;
    }
    
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme['base-title']};
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 1400px) {
        html {
            font-size: 90%;
        }
    }

    @media (max-width: 1200px) {
        html {
            font-size: 85%;
        }
    }

    @media (max-width: 992px) {
        html {
            font-size: 80%;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 75%;
        }
    }

    @media (max-width: 576px) {
        html {
            font-size: 70%;
        }
    }
`
