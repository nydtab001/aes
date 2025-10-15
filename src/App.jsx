import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import LoadingScreen from './components/assets/LoadingScreen.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
