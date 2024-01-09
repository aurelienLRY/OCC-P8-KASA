import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/About';
import NoFoundPage from '../../pages/NoFoundPage';
import PropertyPage from '../../pages/Property-details';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about/" element={<AboutPage />} />
      <Route path="/property/:id" element={<PropertyPage />} /> 
      <Route path="/*" element={<NoFoundPage />} />
    </Routes>
  );
}
