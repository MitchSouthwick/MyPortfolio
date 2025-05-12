import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import About from './components/About'
import Experiences from './components/Experiences'
// import Projects from './components/Projects'
import Contact from './components/Contact'
import ResumePage from './pages/ResumePage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <main className="px-2 md:px-20 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <div id="about">
          <About />
        </div>
        <div>
          <Experiences />
        </div>
        {/* <div>
          <Projects />
        </div> */}
        <div id="contact" className="px-4 md:px-0">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </Router>
  )
}

export default App
