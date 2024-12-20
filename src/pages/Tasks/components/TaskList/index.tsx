import {useContext, useState} from "react";
import {FormContainer, ListContainer, TaskListContainer} from "./styles.ts";
import {Plus} from "@phosphor-icons/react";
import {TaskProps} from "../../../../@types/task.ts";
import {tasksContext} from "../../../../contexts/TasksContext.tsx";
import {Task} from "../../../../components/Task";

export function TaskList() {

    // States
    const [taskInput, setTaskInput] = useState( "" )

    // Attributes
    const { getTasksByFilter, createTask } = useContext( tasksContext )

    // Methods
    function onSubmit( event: any )
    {
        event.preventDefault();
        setTaskInput( '' );

        const date = new Date();
        date.setHours(23, 59, 59);


        createTask( {
            // @ts-ignore
            id: null,
            title: taskInput,
            done: false,
            targetDate: date,
            finishedDate: null,
            }
        );
    }

    function tasksComponentsProvider( tasks: TaskProps[] )
    {
        return tasks.map( (task: TaskProps) => (
            <li key={task.id}>
                <Task  { ...task } />
            </li>
        ))
    }

    // Render
    return (
        <TaskListContainer>

            <FormContainer onSubmit={ onSubmit } >
                < input
                    className='taskInput'
                    type='text'
                    placeholder='Nome da tarefa...'
                    value={ taskInput }
                    onChange={ ( e ) => { setTaskInput( e.target.value ) }}
                />

                <div className='plusBtn' >
                    <Plus weight='bold' className='icon' onClick={ onSubmit } />
                </div>

            </FormContainer>

            <ListContainer>

                <ul className='unfinished-list' >
                    { tasksComponentsProvider( getTasksByFilter( { isDone: false } ) ) }
                </ul>

                <ul className='finished-list' >
                    { tasksComponentsProvider( getTasksByFilter( { isDone: true } ) ) }
                </ul>

            </ListContainer>

        </TaskListContainer>
    )

}