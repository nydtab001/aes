import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
