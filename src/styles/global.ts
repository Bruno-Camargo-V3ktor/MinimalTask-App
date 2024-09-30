import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-optical-sizing: auto;
        font-weight: bold;
    }

    body {
        background: ${ (props) => props.theme.secondary };
        color: ${ (props) => props.theme.primary };

        font-size: 1.125rem; //18px
        font-family: ${ (props) => props.theme.fontPrimary };

        transition: background 0.4s;
        transition: color 0.4s;
    }

`;