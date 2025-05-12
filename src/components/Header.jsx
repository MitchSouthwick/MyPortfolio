import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText} from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-navy-blue py-4 px-6 text-white sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-gray-400">Home</Link>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#experiences" className="hover:text-gray-400">Experiences</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Action icon buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/resume"
            className="flex items-center space-x-2 px-3 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white"
          >
            <FileText size={20} />
            <span>Resume</span>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden">
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false); // close the menu
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:text-gray-400"
        >Home
        </Link>
          <a href="#about" onClick={toggleMenu} className="hover:text-gray-400">About</a>
          <a href="#experiences" onClick={toggleMenu} className="hover:text-gray-400">Experiences</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-gray-400">Contact</a>
          <Link to="/resume" onClick={toggleMenu} className="hover:text-gray-400">Resume</Link>
          <div className="flex space-x-4 mt-2">
            <a href="mailto:your.email@example.com" className="hover:text-teal-400" title="Email"><FaEnvelope size={20} /></a>
            <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" title="GitHub"><FaGithub size={20} /></a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" title="LinkedIn"><FaLinkedin size={20} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
