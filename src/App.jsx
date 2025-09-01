import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
// import ShopPage from './pages/shop';
// import AboutPage from './pages/about';
import Contact from './pages/contact';
import Footer from './component/Footer';

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path='/contact' element={<Contact />} />
      
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
