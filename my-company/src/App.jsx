import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 120px)' }}> {/* Adjust height to account for navbar and footer */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer /> {/* Include the Footer component */}
    </Router>
  );
}

export default App;