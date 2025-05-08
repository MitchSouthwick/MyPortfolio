import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ResumePage from './pages/ResumePage'; // adjust path as needed

function App() {
  return (
    <Router>
      <Header />
      <main className="px-20 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <div id="about">
          <About />
        </div>
{/*         <div>
          <Projects />
        </div> */}
        <div id="contact">
          <Contact />
        </div>
      </main>
    </Router>
  )
}

export default App

