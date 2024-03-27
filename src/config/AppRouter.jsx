import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import GeoFencing from '../pages/geoFencing/GeoFencing';
import Message360 from '../pages/message360/Message360';






export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/GeoFencing' element={<GeoFencing />}></Route>
                    <Route path='/Message360' element={<Message360/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}