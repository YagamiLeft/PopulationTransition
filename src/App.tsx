import './wdyr.ts';
import React from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PopulationTransitionPage } from './pages/population-transition/population-transition.page';
import { LoadingProvider } from './contexts/Lading.context';

function App() {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/popuration-transition" />} />
        <Route path="/popuration-transition" element={<PopulationTransitionPage />} />
      </Routes>
    </LoadingProvider>
  );
}

export default App;
