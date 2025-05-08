import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Icon library

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navigation bar */}
      <nav className="bg-navy-blue py-4 px-6 text-white">
        <div className="flex justify-between items-center">
          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            <Link to="/resume" className="hover:text-gray-400">Resume</Link>
          </div>

          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col mt-4 space-y-3 md:hidden">
            <Link to="/" onClick={toggleMenu} className="hover:text-gray-400">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-gray-400">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-gray-400">Contact</Link>
            <Link to="/resume" onClick={toggleMenu} className="hover:text-gray-400">Resume</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
