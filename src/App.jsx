import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Services from './pages/services.jsx'
import Projects from './pages/projects.jsx'
import Strengths from './pages/strengths.jsx'
import BusinessAreas from './pages/business-areas.jsx'
import LoadingScreen from './components/assets/LoadingScreen.jsx'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a loading time

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      <LoadingScreen isVisible={loading} />

      
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/strengths" element={<Strengths/>} />
            <Route path="/business-areas" element={<BusinessAreas/>} />
          </Routes>
        </BrowserRouter>
    </>
  );

}

export default App
