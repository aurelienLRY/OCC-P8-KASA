import React from 'react';


// Pages
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/About';
import NoFoundPage from '../../pages/NoFoundPage';
import PropertyPage from '../../pages/Property-details';
//components tier
import { Route, Routes, useLocation } from 'react-router-dom';

export default function AppRouter() {
  const location = useLocation();
  return (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="/*" element={<NoFoundPage />} />
        </Routes>
  );
}
