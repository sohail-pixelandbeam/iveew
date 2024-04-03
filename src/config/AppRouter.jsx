import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import GeoFencing from '../pages/geoFencing/GeoFencing';
import Message360 from '../pages/message360/Message360';
import SpecialityMessaging from '../pages/speacialityMessaging/SpecialityMessaging';
import GuestRecognition from '../pages/guestRecognition/GuestRecognition';
import ReputationManagement from '../pages/reputationManagement/ReputationManagement';
import BookingEngineScript from '../pages/bookingEngineScript/BookingEngineScript';
import MessageMarketSegmentation from '../pages/messageMarketSegmentaion/MessageMarketSegmentation';
import MobileMarketStrategies from '../pages/mobileMarketStrategies/MobileMarketStrategies';
import AIBot from '../pages/aiBot/AIBot';






export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/GeoFencing' element={<GeoFencing />}></Route>
                    <Route path='/Message360' element={<Message360/>}></Route>
                    <Route path='/SpecialityMessaging' element={<SpecialityMessaging/>}></Route>
                    <Route path='/GuestRecognition' element={<GuestRecognition/>}></Route>
                    <Route path='/ReputationManagement' element={<ReputationManagement/>}></Route>
                    <Route path='/BookingEngineScript' element={<BookingEngineScript/>}></Route>
                    <Route path='/MessageMarketSegmentation' element={<MessageMarketSegmentation/>}></Route>
                    <Route path='/MobileMarketStrategies' element={<MobileMarketStrategies/>}></Route>
                    <Route path='/AIBot' element={<AIBot/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}