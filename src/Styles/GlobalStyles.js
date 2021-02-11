import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--white);
    }
    
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        height: 100%;
        width: 100%;
    }
    *, button, input{
        border: 0;
        background: none;
        font-family: -apple--apple-system, BlinkMacSystemFont, sans-serif, system-ui
    }
    html{
        background: var(--primary)
    }
    :root{
        --primary: #000;
        --secondary: #15181C;
        --search: #202327;
        --white: #D9D9D9;
        --gray: #7A7A7A;
        --outline: #2F3336;
        --save: #00C06B;
        --exit: #E82630;
        --note: #33A1F2;
        --dark-hover: #011017;
        --light-hover: #2C8ED6;
    }
`;