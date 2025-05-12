import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const roles = ['Developer', 'Creator', 'Lifelong Learner', 'Father'];

const Home = () => {
  const [index, setIndex] = useState(0); // index of the current role
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length); // go to next word
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="min-h-[100svh] flex flex-col justify-start md:justify-center items-center text-white text-center">
      <h2 className="text-5xl font-bold mb-2">Mitchell Southwick</h2>
      <p className="text-2xl">
        I am a <span className="text-teal-400">{text}</span>
        <span className="animate-blink">|</span>
      </p>
      {/* Action icon buttons */}
      <div className="flex space-x-4 p-4">
        <a
          href="mailto:southwickmitch@gmail.com"
          className="bg-teal-600 px-3 py-1 rounded hover:bg-teal-500 text-white"
          title="Email"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://github.com/MitchSouthwick"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 text-white"
          title="GitHub"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/mitchsouthwick-55m22g/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 px-3 py-1 rounded hover:bg-blue-600 text-white"
          title="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </section>
  );
};

export default Home;
