import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginPage } from './pages/Login';
import {RegisterPage} from "./pages/Register";
import { TasksPage } from './pages/Tasks';
import {TasksProvider} from "./contexts/TasksContext.tsx";

export function Router( ) {

    // Render
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <LoginPage /> } />
                <Route path='/login' element={ <LoginPage /> } />

                <Route path='/register' element={ <RegisterPage /> } />

                <Route path='/tasks' element={ ( () => { return <TasksProvider> <TasksPage/> </TasksProvider> } )() } />
            </Routes>
        </BrowserRouter>
    )

}