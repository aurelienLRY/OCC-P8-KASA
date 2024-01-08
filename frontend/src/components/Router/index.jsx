import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from '../../pages/Properties';
import AboutPage from '../../pages/About';
import NoFoundPage from '../../pages/NoFoundPage';
import PropertyPage from '../../pages/Property-details';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/" element={<AboutPage />} />
      <Route path="/property/:id" element={<PropertyPage />} /> 
      <Route path="/*" element={<NoFoundPage />} />
    </Routes>
  );
}
