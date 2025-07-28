import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import './index.css';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<div>Menu Page</div>} />
        <Route path="/cakes" element={<div>Cakes Page</div>} />
        <Route path="/pastries" element={<div>Pastries Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
};

