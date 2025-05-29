import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TravelLandingPage from './components/TravelLandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TravelLandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;