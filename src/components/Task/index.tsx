import {ActionsContainer, DateContainer, TaskContainer, TitleContainer} from "./styles.ts";
import {TaskProps} from "../../@types/task.ts";
import {CalendarBlank, CalendarCheck, CalendarX, CheckSquare, Square, Trash} from "@phosphor-icons/react";
import {ChangeEvent, useContext, useEffect, useRef, useState} from "react";
import {tasksContext} from "../../contexts/TasksContext.tsx";
import {differenceInDays, format, startOfDay} from "date-fns";


export function Task( props: TaskProps ) {

    // Attributes
    const { id, title, done, targetDate, finishedDate } = props
    const { updateTask, deleteTask } = useContext( tasksContext )
    const dateRef = useRef<HTMLInputElement>(null);

    // States
    const [init, setInit] = useState( true )
    const [isFinished, setIsFinished] = useState( done )
    const [classes, setClasses] = useState<string[]>( [ isFinished ? 'done' : '', 'entered' ] )
    const [_, setDateSelected] = useState<Date | null >( null )

    // Methods
    const onCheckClick = () => {

        if( classes.indexOf('exited') > 0 ) return

        setIsFinished( (state) => {

            setTimeout( () => {
                setClasses( (value) => [ ...value, 'exited' ] );
            }, 250 )

            setTimeout( () => {
                updateTask( { id, title, 'done': !state, targetDate, 'finishedDate': !state ? new Date() : null } )
            }, 900)

            return !state
        } );

    }

    const onDateClick = () => {
        if( dateRef === null || isFinished ) return;

        // @ts-ignore
        dateRef.current.focus();
        // @ts-ignore
        dateRef.current.showPicker();
    }

    const onChangeDate = ( event: ChangeEvent<HTMLInputElement> ) => {
        setDateSelected( (_) => {
           const date = new Date( `${event.target.value}T23:59:59` );
           updateTask( { id, title, 'done': isFinished, 'targetDate': date, 'finishedDate': null } )
           return date;
        }  );
    }

    const onTrashClick = () => {
        if( classes.indexOf('deleted') > 0 ) return

        setClasses( (value) => [ ...value, 'deleted' ] );
        setTimeout( () => {
           deleteTask( props )
        }, 500)
    }

    // Effects
     useEffect(() => {

         setClasses( [ isFinished ? 'done' : '', init ? 'entered' : '' ] );
         if( init ) setInterval( () => setInit( false ), 1000  )

     }, [isFinished, init])

    //Render
    return (
        <TaskContainer className={ classes.join(' ') }  >

            <TitleContainer>
                <h2> {title} </h2>

                <DateContainer onClick={ onDateClick }>

                    {
                        isFinished && finishedDate !== null
                        ? (
                              ( differenceInDays( startOfDay( finishedDate ),  startOfDay( targetDate ) ) <= 0 )
                                ? <CalendarCheck weight='fill' className='btnIcon'/>
                                : <CalendarX  weight='fill' className='btnIcon'/>
                          )
                        : <CalendarBlank className='btnIcon'/>
                    }

                    <input
                        type='date'
                        ref={ dateRef }
                        style={ { width: 0, height: 0, opacity: 0, position: 'relative', left: '-50px' } }
                        onChange={ onChangeDate } />

                    <p> {  format( targetDate, 'dd/MM/yyyy' ) } </p>
                </DateContainer>

            </TitleContainer>

            <ActionsContainer>
                {
                    isFinished
                    ? <CheckSquare weight='fill' className='btnIcon' onClick={ onCheckClick }  />
                    : <Square className='btnIcon' onClick={ onCheckClick } />
                }

                <Trash weight={ !isFinished ? 'regular' : 'fill'} className='btnIcon' onClick={ onTrashClick } />
            </ActionsContainer>

        </TaskContainer>
    )

}