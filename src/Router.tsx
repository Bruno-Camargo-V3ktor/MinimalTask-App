import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginPage } from './pages/Login/index';
import { TasksPage } from './pages/Tasks/index';
import {TasksProvider} from "./contexts/TasksContext.tsx";

export function Router( ) {

    // Render
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <LoginPage /> } />
                <Route path='/login' element={ <LoginPage /> } />

                <Route path='/tasks' element={ ( () => { return <TasksProvider> <TasksPage/> </TasksProvider> } )() } />
            </Routes>
        </BrowserRouter>
    )

}