import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create-user' element={<Create />} />
            </Routes>
        </>
    )
}

export default AppRoutes
