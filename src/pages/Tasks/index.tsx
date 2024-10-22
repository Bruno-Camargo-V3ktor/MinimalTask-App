import { PageMain, OptionsMenu, MusicMenu, TasksContainer } from "./styles";
import { MusicPlay } from "./components/MusicPlay";
import {ThemeButton} from "../../components/ThemeButton";
import {LogoutButton} from "../../components/LogoutButton";
import {TaskList} from "./components/TaskList";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {securityContext} from "../../contexts/SecurityContext.tsx";


export function TasksPage() {

    // Attributes
    const navigate = useNavigate();
    const { getToken } = useContext( securityContext );

    // Effects
    useEffect(() => {
        if( !getToken() ) navigate("/login");
    }, []);

    // Render
    return (
        <TasksContainer>

            <MusicMenu>     
               <MusicPlay />
            </MusicMenu>
            
            <PageMain>
                <TaskList />
            </PageMain>

            <OptionsMenu>
                <div>
                    <ThemeButton  size={ 70 } />
                    <LogoutButton size={ 70 } />
                </div>
            </OptionsMenu>

        </TasksContainer>
    )

}