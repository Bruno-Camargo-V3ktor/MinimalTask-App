import styled from "styled-components"

export const TasksContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 100svw;
    height: 100svh;

    padding: 2.5rem;
`;

export const MusicMenu = styled.aside`
    display: flex;
    flex: 1;

    justify-content: flex-start;
`

export const PageMain = styled.main`
    display: flex;
    flex: 1.25;

    justify-content: center;
    align-items: center;

    pre {
        width: 455px;
        height: 615px;
        background: blue;
    }
`

export const OptionsMenu = styled.aside`
    display: flex;
    flex: 1;

    align-items: flex-end;
    justify-content: flex-end;
    //margin-right: 6.4rem;
`