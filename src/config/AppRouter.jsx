import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import GeoFencing from '../pages/geoFencing/GeoFencing';






export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/GeoFencing' element={<GeoFencing />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}