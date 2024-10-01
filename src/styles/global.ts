import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-optical-sizing: auto;
        font-weight: bold;
    }
    
    
    html {
        background: ${(props) => props.theme.secondary};
    }
    
    body {
        background: ${(props) => props.theme.secondary};
        color: ${(props) => props.theme.primary};

        font-size: 1.125rem; //18px
        font-family: ${(props) => props.theme.fontPrimary};

        transition: all 0.4s;
    }

    .btnIcon {
        cursor: pointer;
        transition: scale cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s
    }

    .btnIcon:hover {
        scale: 1.2;
    }
    
`;