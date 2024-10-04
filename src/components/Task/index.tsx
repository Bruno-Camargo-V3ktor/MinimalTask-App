import {ActionsContainer, DateContainer, TaskContainer, TitleContainer} from "./styles.ts";
import {TaskProps} from "../../@types/task.ts";
import {CalendarBlank, CalendarCheck, CalendarX, CheckSquare, Square, Trash} from "@phosphor-icons/react";
import {useContext, useEffect, useState} from "react";
import {tasksContext} from "../../contexts/TasksContext.tsx";


export function Task( props: TaskProps ) {

    // Attributes
    const { id, title, done, targetDate, finishedDate } = props
    const { updateTask } = useContext( tasksContext )

    // States
    const [init, setInit] = useState( true )
    const [isFinished, setIsFinished] = useState( done )
    const [classes, setClasses] = useState<string[]>( [ isFinished ? 'done' : '', 'entered' ] )

    // Methods
    const onCheckClick = () => {

        if( classes.indexOf('exited') > 0 ) return

        setIsFinished( (state) => {

            setTimeout( () => {
                setClasses( (value) => [ ...value, 'exited' ] );
            }, 250 )

            setTimeout( () => {
                updateTask( { id, title, 'done': !state, targetDate, 'finishedDate': new Date() } )
            }, 900)

            return !state
        } );

    }

    // Effects
     useEffect(() => {

         setClasses( [ isFinished ? 'done' : '', init ? 'entered' : '' ] );
         if( init ) setInterval( () => setInit( false ), 1000  )

     }, [isFinished, init])

    console.log( classes.join(' ') )
    //Render
    return (
        <TaskContainer className={ classes.join(' ') }  >

            <TitleContainer>
                <h2> {title} </h2>

                <DateContainer>

                    {
                        isFinished
                        ? ( finishedDate.getTime() <= targetDate.getTime() ? <CalendarCheck weight='fill' className='btnIcon'/> : <CalendarX  weight='fill' className='btnIcon'/>)
                        : <CalendarBlank className='btnIcon'/>
                    }


                    <p> { targetDate.toLocaleDateString() } </p>
                </DateContainer>

            </TitleContainer>

            <ActionsContainer>
                {
                    isFinished
                    ? <CheckSquare weight='fill' className='btnIcon' onClick={ onCheckClick }  />
                    : <Square className='btnIcon' onClick={ onCheckClick } />
                }

                <Trash weight={ !isFinished ? 'regular' : 'fill'} className='btnIcon'/>
            </ActionsContainer>

        </TaskContainer>
    )

}