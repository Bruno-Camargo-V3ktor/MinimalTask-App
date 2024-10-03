import {ActionsContainer, DateContainer, TaskContainer, TitleContainer} from "./styles.ts";
import {TaskProps} from "../../@types/task.ts";
import {CalendarBlank, CalendarCheck, CalendarX, CheckSquare, Square, Trash} from "@phosphor-icons/react";


export function Task( props: TaskProps ) {

    // Attributes
    const { title, done, targetDate, finishedDate } = props

    //Render
    return (
        <TaskContainer className={` ${ done ? 'done' : '' } `} >

            <TitleContainer>
                <h2> {title} </h2>

                <DateContainer>

                    {
                        done
                        ? ( finishedDate.getTime() <= targetDate.getTime() ? <CalendarCheck className='btnIcon'/> : <CalendarX className='btnIcon'/>)
                        : <CalendarBlank className='btnIcon'/>
                    }


                    <p> { targetDate.toLocaleDateString() } </p>
                </DateContainer>

            </TitleContainer>

            <ActionsContainer>
                {
                    done
                    ? <CheckSquare className='btnIcon'/>
                    : <Square className='btnIcon'/>
                }

                <Trash className='btnIcon'/>
            </ActionsContainer>

        </TaskContainer>
    )

}