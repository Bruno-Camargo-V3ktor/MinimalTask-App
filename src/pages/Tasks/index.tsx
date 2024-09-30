import { PageMain, OptionsMenu, MusicMenu, TasksContainer } from "./styles";
import {useContext} from "react";
import {tasksContext} from "../../contexts/TasksContext.tsx";
import { MusicPlay } from "./components/MusicPlay/index.tsx";


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
                <h1>Rodape</h1>
            </OptionsMenu>

        </TasksContainer>
    )

}