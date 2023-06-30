import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    :focus {
        outline: 0;
    }

    body {
        background-color: ${(props) => props.theme['darkBlue-200']};
        color: ${(props) => props.theme['blue-100']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }

`
