import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Auth from "routes/Auth";
import Home from "routes/Home";
import EmptyPage from "./EmptyPage";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <Route path="/"element={<Home />}/>
                ):(
                    <Route path="/"element={<Auth />}/>
                )}
                <Route path="*" element={<EmptyPage />}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;