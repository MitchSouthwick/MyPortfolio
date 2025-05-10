import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-navy-blue py-4 px-6 text-white sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          <Link to="/resume" className="hover:text-gray-400">Resume</Link>
        </div>

        {/* Action icon buttons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="mailto:southwickmitch@gmail.com"
            className="bg-teal-600 px-3 py-1 rounded hover:bg-teal-500 text-white"
            title="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/MitchSouthwick"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 text-white"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mitchsouthwick-55m22g/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 px-3 py-1 rounded hover:bg-blue-600 text-white"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
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
          <a href="#about" onClick={toggleMenu} className="hover:text-gray-400">About</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-gray-400">Contact</a>
          <Link to="/resume" onClick={toggleMenu} className="hover:text-gray-400">Resume</Link>
          <div className="flex space-x-4 mt-2">
            <a href="mailto:your.email@example.com" className="hover:text-teal-400" title="Email"><Mail size={20} /></a>
            <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" title="GitHub"><Github size={20} /></a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" title="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
