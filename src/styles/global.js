import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body{
        background-color: #040114;
        color: #c4c4cc;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    input, textarea, button {
        cursor: pointer;
    } 

    :focus{
        outline: transparent;
        box-shadow: 0 0 0 2px #6AFCFF;
    }
    [disabled]{
        cursor:not-allowed;
        opacity: 0.7;
    }
`;