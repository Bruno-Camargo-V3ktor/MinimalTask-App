import { PageMain, OptionsMenu, MusicMenu, TasksContainer } from "./styles";
import {useContext} from "react";
import {tasksContext} from "../../contexts/TasksContext.tsx";
import { MusicPlay } from "./components/MusicPlay";
import {ThemeButton} from "../../components/ThemeButton";
import {LogoutButton} from "../../components/LogoutButton";
import {TaskList} from "./components/TaskList";


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