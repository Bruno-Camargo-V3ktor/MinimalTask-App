import {useState, createContext, ReactNode, useEffect} from "react";
import {Task, TaskContext, TaskFilter} from "../@types/task.ts";


export const tasksContext = createContext< TaskContext >( {} as TaskContext );
export function TasksProvider( { children }: { children: ReactNode } )
{

    // States
    const [tasks, setTasks] = useState< Task[] >([]);

    // Métodos
    function createTask( task: Task )
    {
        setTasks( (value) =>  [...value, task] );
    }

    function updateTask( task: Task )
    {
        setTasks( (value) => value.map( (t) => t.id === task.id ? task : t ) );
    }

    function deleteTask( task: Task )
    {
        setTasks( (value) =>  value.filter( (t) => t.id !== task.id ) );
    }

    function getTasksByFilter( filter: TaskFilter )
    {
        if( filter.isDone !== null )  return tasks.filter( ( task ) => task.done == filter.isDone )
    }

    // Effects
    useEffect(() => {
        //Request in API Tasks
        setTasks( [
            { id: 'task0', title:'Apender React', done: false, targetDate: new Date() },
            { id: 'task1', title:'Apender AWS', done: false, targetDate: new Date() },
            { id: 'task2', title:'Apender Rust', done: false, targetDate: new Date() },
            { id: 'task3', title:'Apender Spring Boot', done: false, targetDate: new Date() },
        ] )
    }, [])

    // Render
    return (
        <tasksContext.Provider value={ { tasks, createTask, updateTask, deleteTask, getTasksByFilter } }>
            { children }
        </tasksContext.Provider>
    )

}