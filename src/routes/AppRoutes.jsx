import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '../pages/Index'; 
import Page1 from '../pages/Page1'; 

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index/>} />
                <Route path="/page1" element={<Page1 />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;