import './wdyr.ts';
import React from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PopulationTransitionPage } from './pages/population-transition/population-transition.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/popuration-transition" />} />
      <Route path="/popuration-transition" element={<PopulationTransitionPage />} />
    </Routes>
  );
}

export default App;
