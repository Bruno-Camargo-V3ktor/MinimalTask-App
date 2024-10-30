import {useState, createContext, ReactNode, useEffect, useContext} from "react";
import {TaskProps, TaskContext, TaskFilter} from "../@types/task.ts";
import {securityContext} from "./SecurityContext.tsx";
import {taskCreate, taskDelete, taskGetAll, taskUpdate} from "../http/taskAPI.ts";
import {useNavigate} from "react-router-dom";


export const tasksContext = createContext< TaskContext >( {} as TaskContext );
export function TasksProvider( { children }: { children: ReactNode } )
{

    // States
    const [tasks, setTasks] = useState< TaskProps[] >([]);
    const { getUser, setUser, getToken, logout } = useContext( securityContext )
    const navigate = useNavigate()

    // Métodos
    function createTask( task: TaskProps )
    {

        // @ts-ignore
        taskCreate( getUser(), task, getToken() ).then(
            ( response ) => {

                if ( response === null ) {
                    logout();
                    navigate( "/login" );
                    return;
                }

                else if ( response?.id === "" ) {
                    window.location.reload()
                    return;
                }

                setTasks( (value) => {
                    const list = [response, ...value]

                    setUser( { ...getUser(), tasks: list } )
                    return list;
                } );

            }
        )


    }

    function updateTask( task: TaskProps )
    {

        // @ts-ignore
        taskUpdate( getUser(), task, getToken() ).then(
            ( response ) => {

                if ( response === null ) {
                    logout();
                    navigate( "/login" );
                    return;
                }

                else if ( !response ) {
                    window.location.reload()
                    return;
                }


                setTasks( (value) => {
                        setUser( { ...getUser(), tasks: value } )
                        return value
                    }
                )
            }
        )

        setTasks( (value) => value.map( (t) => t.id === task.id ? task : t ) );
    }

    function deleteTask( task: TaskProps )
    {

        // @ts-ignore
        taskDelete( getUser(), task, getToken() ).then(
            ( response ) => {

                if ( response === null ) {
                    logout();
                    navigate( "/login" );
                    return;
                }

                else if ( !response ) {
                    window.location.reload()
                    return;
                }

                setTasks( (value) => {
                        setUser( { ...getUser(), tasks: value } )
                        return value
                    }
                )

            }
        )

        setTasks( (value) =>  value.filter( (t) => t.id !== task.id ) );
    }

    function getTasksByFilter( filter: TaskFilter )
    {
        if( filter.isDone !== null )  return tasks.filter( ( task ) => task.done == filter.isDone )

        return tasks
    }

    // Effects
    useEffect(() => {

        // @ts-ignore
        taskGetAll( getUser(), getToken() ).then(
            (response) => {
                setTasks( response ? response : [] );
                setUser( { ...getUser(), tasks: response ? response : [] } );
            }
        )

    }, [getUser, taskGetAll, getToken, setUser, setTasks])

    // Render
    return (
        <tasksContext.Provider value={ { tasks, createTask, updateTask, deleteTask, getTasksByFilter } }>
            { children }
        </tasksContext.Provider>
    )

}