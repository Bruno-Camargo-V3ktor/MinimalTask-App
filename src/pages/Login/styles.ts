import styled from "styled-components"

export const LoginContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    
    flex: 1;
    flex-direction: column;
    
    height: 100svh;
    
`;

export const LoginForm = styled.div`
    
    display: flex;
    flex: 1;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        margin-top: 90px;
        
        gap: 2rem;
    }
    
    button {
        width: 26rem;
        height: 5rem;
        margin-top: 4rem;
        
        background: ${ (props) => props.theme.primary };
        border: none;
        border-radius: 10px;

        color: ${ (props) => props.theme.secondary };
        
    }
    
`

export const ButtonContainer = styled.div`

    display: flex;
    flex: 1;
    
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    
    gap: 1.5rem;
    padding: 1rem;
    
    p {
        font-size: 2rem;
        text-transform: uppercase;
    }
    
`;

export const OptionsContainer = styled.div`
    display: flex;
    
    justify-self: flex-end;
    align-self: flex-end;
    
    margin: 2.5rem 2.5rem;
    gap: 2rem;
`