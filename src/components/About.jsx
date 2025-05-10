import React from 'react';
import profileImage from '../assets/TempPhoto.jfif'; // Make sure you have this image in src/assets

const About = () => (
  <section className="my-12 text-white px-4 md:px-0">
    <h2 className="bg-navy-blue text-white text-3xl font-semibold rounded-lg px-4 py-2 inline-block mb-4 shadow-sm">
      About Me
    </h2>
    <div className="md:flex md:items-start md:space-x-10">
      {/* Left column: Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-2xl shadow-lg object-cover w-[400px] h-auto"
        />
      </div>

      {/* Right column: Text Card */}
      <div className="bg-navy-blue p-6 rounded-xl shadow-md md:w-2/3 text-lg md:text-xl">
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
