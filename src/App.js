import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import Sidebar from './Sidebar';
import Contact from './pages/Contact';
import About from './pages/About';
import Xbox from './pages/Xbox';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/xbox" element={<Xbox/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
