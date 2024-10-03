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
    
    h2, p {
        font-size: 1.5rem;
    }
    
    &.done {
        color: ${ (props) => props.theme.secondary };
        background: ${ (props) => props.theme.primary };;
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