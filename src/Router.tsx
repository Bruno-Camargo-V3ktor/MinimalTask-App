import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginPage } from './pages/Login/index';
import { TasksPage } from './pages/Tasks/index';


export function Router() {
    
    // Render
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <LoginPage /> } />
                <Route path='/login' element={ <LoginPage /> } />
                <Route path='/tasks' element={ <TasksPage /> } />
            </Routes>
        </BrowserRouter>
    )

}