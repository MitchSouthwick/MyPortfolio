import React from 'react';
import profileImage from '../assets/ProfilePicture.jpg';

const About = () => (
  <section className="my-12 text-white px-4">
    <h2 className="bg-gunmetal-gray text-white text-3xl font-semibold rounded px-4 py-2 mb-6 shadow-sm mx-auto text-center w-fit">
      About Me
    </h2>

    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded shadow-lg w-72 h-auto mx-auto"
        />
      </div>

      {/* Text */}
      <div className="bg-gunmetal-gray p-6 rounded shadow-md w-full text-lg md:text-xl">
        <p className="mb-4">
          Hello! I'm a passionate developer who loves exploring new technologies.
          I enjoy creating software and learning about the latest trends in software development.
          In my free time, I like to work on personal projects, learn more about tech and what's new,
          and spend time with my family.
        </p>
        <p>
          I believe in continuous learning and strive to improve my skills every day.
          I'm always open to new challenges and opportunities that allow me to grow both personally and professionally.
          If you're interested in collaborating or just want to chat, feel free to reach out!
        </p>
      </div>
    </div>
  </section>
);

export default About;
