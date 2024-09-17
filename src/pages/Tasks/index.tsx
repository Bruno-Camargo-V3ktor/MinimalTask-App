import { TasksContainer } from "./styles";
import {useContext} from "react";
import {tasksContext} from "../../contexts/TasksContext.tsx";


export function TasksPage() {

    // Atributos
    const { tasks } = useContext( tasksContext )

    // Render
    return (
        <TasksContainer>
            <h1>Home</h1>

            <pre>
                { JSON.stringify(tasks, null, 2) }
            </pre>
        </TasksContainer>
    )

}