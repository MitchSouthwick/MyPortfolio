import { Link } from 'react-router-dom'

const Header = () => (
  <header className="bg-blue-600 text-white p-6 flex justify-between items-center">
    <div>    <h1 className="text-3xl font-bold">Mitchell Southwick</h1><nav className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    </div>
    <p className="text-lg">Developer | Designer | Creator</p>

    <div></div>
  </header>
)

export default Header

/* import React from 'react'

const Header = () => (
  <header className="bg-blue-600 text-white p-6">
    <h1 className="text-3xl font-bold">Mitch Southwick</h1>
    <p className="text-lg">Developer | Designer | Creator</p>
  </header>
)

export default Header */
