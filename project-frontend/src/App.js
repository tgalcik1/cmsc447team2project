import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import './App.css';
import MapView from './components/leafletUI/MapView';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
      <Route path="/mapview" element={<MapView/>} exact />
      <Route path="/about" element={<About/>} exact />
      </Routes>
    </Router>
    /*
    <div className="App">
      <MapView/>
    </div>*/
  );
}

export default App;