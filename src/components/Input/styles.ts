import styled from "styled-components";

export const InputContainer = styled.div`
    
    display: flex;
    flex-direction: column;

`

export const FormInput = styled.input`
    
    width: 21rem;
    height: 3rem;
    
    font-size: 1.5rem;
    font-family: ${ (props) => props.theme.fontPrimary };
    
    background: transparent;
    
    border: none;
    border-bottom: 1px solid ${ (props) => props.theme.primary };
    
    color: ${ (props) => props.theme.primary };
    
    &:focus {
        outline: none;
        border-bottom: 3px solid ${ (props) => props.theme.primary };
    }

    &::placeholder {
        font-style: italic;
    }
    
`

export const ErrorText = styled.span`
    
    display: flex;
    
    
    font-size: 1rem;
    font-family: ${ (props) => props.theme.fontPrimary };
    font-style: italic;
    
    color: ${ (props) => props.theme.errorText };
    
`