import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;

        font-family: 'Inter', sans-serif;

        h1 {
            font-size: 1.7em;
        }

        .subheading {
            color: #808080;
            font-size: 14px;
            font-weight: 400;
        }

        .submit {
            background-color: #745ce4;
            border: 1px solid #745ce4;
            border-radius: 5px;
            color: #ffffff;
            cursor: pointer;
            display: block;
            font-family: 'Inter', sans-serif;
            height: 3em;
            margin: 0 auto;
            text-align: center;
            width: 100%;
        }
    }

`;