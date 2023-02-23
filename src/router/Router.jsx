import React from 'react'
import "../App.css"
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom'
import Home from '../screens/Home';
import Details from '../screens/Details';
function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='detail' element={<Details />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;