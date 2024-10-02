import styled from "styled-components";

export const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100%;
    width: 100%;
    
    padding: 2rem;
    
    background: transparent;
    border: 3px solid ${ (props) => props.theme.primary };
    border-radius: 10px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    
    justify-content: flex-start;
    align-items: flex-end;
    
    width: 100%;
    height: 4rem;
    gap: 2rem;
    
    background: transparent;
    
    
    .taskInput {
        flex: 9;
        width: 100%;
        
        font-size: 1.5rem;
        font-family: ${ (props) => props.theme.fontPrimary };
        
        
        color: ${ (props) => props.theme.primary };
        background: transparent;
        
        border: none;
        border-bottom: 1px solid ${ (props) => props.theme.primary };
        transition: border-bottom 0.1s ease-out;
    }
    
    .taskInput::placeholder {
        font-style: italic;
    }
    
    .taskInput:focus {
        border: none;
        outline: none;
        border-bottom: 3px solid ${ (props) => props.theme.primary };
    }
    
    .plusBtn {
        background: ${ (props) => props.theme.primary };

        flex: 1;
        display: flex;
        
        align-items: center;
        justify-content: center;
        
        height: 100%;
        aspect-ratio: 1;
        
        border-radius: 5px;
    }
    
    .plusBtn .icon {
        color: ${ (props) => props.theme.secondary };
        font-size: 2.75rem;
    }
    
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100%;
    width: 100%;
    
    background: transparent;
    
`;