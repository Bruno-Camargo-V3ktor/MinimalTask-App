import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { LoginPage } from './pages/Login';
import {RegisterPage} from "./pages/Register";
import { TasksPage } from './pages/Tasks';
import {TasksProvider} from "./contexts/TasksContext.tsx";
import {useContext, useEffect} from "react";
import {securityContext} from "./contexts/SecurityContext.tsx";


// Routers Components
function LoginRouter() {

    // Attributes
    const navigate = useNavigate();
    const { getToken } = useContext( securityContext );

    // Effects
    useEffect(() => {
        if( getToken() ) navigate("/tasks");
    }, []);

    // Render
    return (
        <>
            { !getToken() ? <LoginPage /> : null }
        </>
    )

}

function RegisterRouter() {

    // Attributes
    const navigate = useNavigate();
    const { getToken } = useContext( securityContext );

    // Effects
    useEffect(() => {
        if( getToken() ) navigate("/tasks");
    }, []);

    // Render
    return (
        <>
            { !getToken() ? <RegisterPage /> : null }
        </>
    )

}

function TaskRouter() {

    // Attributes
    const navigate = useNavigate();
    const { getToken } = useContext( securityContext );

    // Effects
    useEffect(() => {
        if( !getToken() ) navigate("/login");
    }, []);

    // Render
    return (
        <TasksProvider>
            { getToken() ? <TasksPage /> : null }
        </TasksProvider>
    )
}

// Router Main
export function Router( ) {

    // Render
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <LoginRouter /> } />
                <Route path='/login' element={ <LoginRouter /> } />

                <Route path='/register' element={ <RegisterRouter /> } />

                <Route path='/tasks' element={ <TaskRouter /> } />
            </Routes>
        </BrowserRouter>
    )

}