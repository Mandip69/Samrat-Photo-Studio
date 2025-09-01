import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/home';
// import Portfolio from './pages/Portfolio';
// import ShopPage from './pages/shop';
// import AboutPage from './pages/about';
// import ContactPage from './pages/contact';
import Footer from './component/Footer';

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
