// src/components/Footer.jsx
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white py-6 mt-12">
      <div className="flex justify-center space-x-6">
        {/* Email */}
        <a
          href="mailto:southwickmitch@gmail.com"
          title="Email"
          className="hover:text-teal-400 transition-colors"
        >
          <Mail size={24} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MitchSouthwick"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="hover:text-gray-400 transition-colors"
        >
          <Github size={24} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mitchsouthwick-55m22g/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="hover:text-blue-400 transition-colors"
        >
          <Linkedin size={24} />
        </a>

        {/* Resume */}
        <Link
          to="/resume"
          title="Resume"
          className="hover:text-sky-400 transition-colors"
        >
          <FileText size={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
