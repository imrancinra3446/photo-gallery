import React from 'react'
import Gallery from './Gallery'
import Navigation from './Navigation'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Login from './Login'
import About from './About'

const MainComponent = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<Gallery />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default MainComponent
