import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Update from '../pages/Update'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create-user' element={<Create />} />
                <Route path='/edit-user/:UserId' element={<Update />} />
            </Routes>
        </>
    )
}

export default AppRoutes
