import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ResumePage from './pages/ResumePage'; // adjust path as needed

function App() {
  return (
    <Router>
      <Header />
      <main className="px-4 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App


/* import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main className="px-4 max-w-4xl mx-auto">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
 */