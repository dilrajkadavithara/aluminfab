import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';
import SuccessPage from './components/SuccessPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <AboutUs />
                <Services />
              </>
            } 
          />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
