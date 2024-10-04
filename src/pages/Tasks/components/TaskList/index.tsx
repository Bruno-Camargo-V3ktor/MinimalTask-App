import {useContext, useState} from "react";
import {FormContainer, ListContainer, TaskListContainer} from "./styles.ts";
import {Plus} from "@phosphor-icons/react";
import {TaskProps} from "../../../../@types/task.ts";
import {tasksContext} from "../../../../contexts/TasksContext.tsx";
import {Task} from "../../../../components/Task";
import {add} from "date-fns";

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

        createTask( {
            id: `task${(Math.random() + Math.random())}`,
            title: taskInput,
            done: false,
            targetDate: add( new Date(), { hours: 1 } ) ,
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