import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import About from './pages/about';
import './App.css';
import Mapview from './components/leafletUI/MapView';

function App() {
  return (
    <div className="App">
      <Mapview/>
    </div>
  );
}

export default App;