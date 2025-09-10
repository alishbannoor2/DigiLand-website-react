import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import Footer from './assets/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
