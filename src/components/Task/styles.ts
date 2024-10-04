import styled from "styled-components";


export const TaskContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    
    width: 100%;
    height: 6.5rem;
    
    padding: 0.5rem 0.5rem;
    
    border: 3px solid ${ (props) => props.theme.primary };
    border-radius: 7px;

    color: ${ (props) => props.theme.primary };
    
    font-size: 2.25rem;
    
    h2 {
        font-size: 1.5rem;
    }
    
    p {
        font-size: 1.25rem;
    }
    
    &.done {
        color: ${ (props) => props.theme.secondary };
        background: ${ (props) => props.theme.primary };
    }
    
    &.done h2 {
        font-style: italic;
        text-decoration: line-through;
    }
    
    
    transition: all 0.25s ease-out;

    @keyframes entered {
        0% {
            opacity: 0;
            transform: translateX(-150%);
        }

        100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }

    @keyframes exited {
        0% {
            opacity: 1;
            transform: translateX(0%);
        }

        100% {
            opacity: 0;
            transform: translateX(-150%);
        }
    }

    @keyframes deleted {
        0% {
            opacity: 1;
            scale: 1;
        }

        25% {
            opacity: 1;
            scale: 1.2;
        }
        
        100% {
            opacity: 0;
            scale: 0;
        }
    }
    
    &.entered {
        transform: translateX(0%);
        animation: entered 0.75s ease-out forwards;
    }

    &.exited {
        transform: translateX(0%);
        animation: exited 0.75s ease-out forwards;
    }
    
    &.deleted {
        animation: deleted 0.5s ease-out forwards;
    }
    
`

export const TitleContainer = styled.div`
    
    display: flex;
    flex: 9;
    flex-direction: column;
    
    width: 100%;
    height: auto;
    
    align-items: flex-start;
    justify-content: space-between;
    
    h2 {
        margin-top: 0.15rem;
        margin-left: 0.5rem;
    }
    
`

export const DateContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: auto;

    align-items: center;
    gap: 0.5rem;
`;

export const ActionsContainer = styled.div`
    
    display: flex;
    flex: 1;
    flex-direction: column;
    
    width: 100%;
    height: auto;

    align-items: flex-end;
    justify-content: space-between;
    
`