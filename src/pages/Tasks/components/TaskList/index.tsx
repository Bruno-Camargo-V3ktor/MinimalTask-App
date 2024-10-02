import {FormContainer, ListContainer, TaskListContainer} from "./styles.ts";
import {Plus} from "@phosphor-icons/react";
import {useState} from "react";

export function TaskList() {

    // States
    const [taskInput, setTaskInput] = useState( "" )

    // Attributes


    // Methods
    function onSubmit( event: any )
    {
        event.preventDefault();
        setTaskInput( '' );
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

            </ListContainer>

        </TaskListContainer>
    )

}