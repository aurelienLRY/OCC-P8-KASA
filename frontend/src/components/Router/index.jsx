import React  from 'react';
import {  Route, Routes } from 'react-router-dom'

// Pages
import Home from '../../pages/Home';
import AboutPage from '../../pages/About';
import NoFoundPage from '../../pages/NoFoundPage'


export default function AppRouter() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/" element={<AboutPage />} />
                <Route path="/*" element={<NoFoundPage />} />
            </Routes>    
    )
}



