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
            transform: translateX(100%);
        }

        100% {
            transform: translateX(-100%);
        }
    }

    .btnPlay {
        cursor: pointer;
        transition: scale cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s
    }

    .btnPlay:hover {
        scale: 1.2;
    }

`