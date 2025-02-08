import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import AboutUs from './pages/aboutUs/AboutUs';
import Portfolio from './pages/portfolio/Portfolio';
import Blog from './pages/blog/Blog';
import Services from './pages/services/Services';
import ScrollToTop from './components/ScrollToTop'; 
import ContactUs from './pages/contactus/ContactUs';
import SmoothScroll from './components/SmoothScroll';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        {/* <SmoothScroll /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceType" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;