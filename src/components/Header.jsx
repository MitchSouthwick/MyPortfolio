import { Link } from 'react-router-dom'

const Header = () => (
  <>
    <header className="bg-blue-600 text-white p-6 flex justify-between items-center">
      {/* Header section with name and subtitle */}
      <div>
        <h1 className="text-3xl font-bold">Mitchell Southwick</h1>
        <p className="text-lg">Developer | Designer | Creator | Father       </p>
      </div>
    </header>

    {/* Navigation bar below header */}
    <nav className="bg-blue-900 py-4 flex justify-between items-center">
      <div className="container mx-7 space-x-8 text-white">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/projects" className="hover:text-gray-300">Projects</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        <Link to="/resume" className="hover:text-gray-300">Resume</Link>
      </div>
    </nav>
  </>
)

export default Header



/* import { Link } from 'react-router-dom'

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

export default Header */
