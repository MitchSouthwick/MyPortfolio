import { useEffect, useState } from 'react';

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
    <section className="h-screen flex flex-col justify-center items-center text-white text-center">
      <h2 className="text-5xl font-bold mb-2">Mitchell Southwick</h2>
      <p className="text-2xl">
        I am a <span className="text-teal-400">{text}</span>
        <span className="animate-blink">|</span>
      </p>
    </section>
  );
};

export default Home;
