import { PageMain, OptionsMenu, MusicMenu, TasksContainer } from "./styles";
import {useContext} from "react";
import {tasksContext} from "../../contexts/TasksContext.tsx";
import { MusicPlay } from "./components/MusicPlay";
import {ThemeButton} from "../../components/ThemeButton";
import {LogoutButton} from "../../components/LogoutButton";


export function TasksPage() {

    // Atributos
    const { tasks } = useContext( tasksContext )

    // Render
    return (
        <TasksContainer>

            <MusicMenu>     
               <MusicPlay />
            </MusicMenu>
            
            <PageMain>
                <pre>
                    { JSON.stringify(tasks, null, 2) }
                </pre>
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