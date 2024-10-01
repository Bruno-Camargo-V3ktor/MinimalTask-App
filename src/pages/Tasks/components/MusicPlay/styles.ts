import styled from "styled-components";


export const MusicComponent = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;

    justify-content: flex-start;
    align-items: center;

    color: ${ (props) => props.theme.primary };

    .titleContainer {
        min-width: 9rem;
        width: 35%;
        height: 2rem;
        
        transform: translateX(2.5%);
        
        overflow: hidden;
        position: relative;
    }

    .titleMusic {
        width: 100%;
        font-size: 1.5rem;
        font-family: ${ (props) => props.theme.fontSecondary };

        white-space: nowrap;
        position: absolute;
        animation: loop 5s linear infinite;
    }
    

    @keyframes loop {
        0% {
            transform: translateX(110%);
        }

        100% {
            transform: translateX(-100%);
        }
    }

`