import {useState, createContext, ReactNode, useEffect, useContext} from "react";
import {TaskProps, TaskContext, TaskFilter} from "../@types/task.ts";
import {securityContext} from "./SecurityContext.tsx";


export const tasksContext = createContext< TaskContext >( {} as TaskContext );
export function TasksProvider( { children }: { children: ReactNode } )
{

    // States
    const [tasks, setTasks] = useState< TaskProps[] >([]);
    const { } = useContext( securityContext )

    // Métodos
    function createTask( task: TaskProps )
    {
        setTasks( (value) =>  [task, ...value] );
    }

    function updateTask( task: TaskProps )
    {
        setTasks( (value) => value.map( (t) => t.id === task.id ? task : t ) );
    }

    function deleteTask( task: TaskProps )
    {
        setTasks( (value) =>  value.filter( (t) => t.id !== task.id ) );
    }

    function getTasksByFilter( filter: TaskFilter )
    {
        if( filter.isDone !== null )  return tasks.filter( ( task ) => task.done == filter.isDone )

        return tasks
    }

    // Effects
    useEffect(() => {
        //Request in API Tasks
        setTasks( [
            { id: 'task0', title:'Aprender React', done: false, targetDate: new Date(), finishedDate: new Date( '2024-10-12' ) },
            { id: 'task1', title:'Aprender AWS', done: false, targetDate: new Date(), finishedDate: new Date( '2024-09-12' ) },
            { id: 'task2', title:'Aprender Rust', done: true, targetDate: new Date(), finishedDate: new Date( '2024-10-12' ) },
            { id: 'task3', title:'Aprender Spring Boot', done: true, targetDate: new Date(), finishedDate: new Date( '2024-09-12' ) },
        ] )
    }, [])

    // Render
    return (
        <tasksContext.Provider value={ { tasks, createTask, updateTask, deleteTask, getTasksByFilter } }>
            { children }
        </tasksContext.Provider>
    )

}