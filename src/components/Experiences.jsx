import React from 'react';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'OpenText',
    years: '2024 - 2025',
  },
  {
    title: 'Lead Software Engineer Intern',
    company: 'MicroFocus',
    years: '2022 - 2024',
  },
  {
    title: 'Software Engineer Intern',
    company: 'MicroFocus',
    years: '2020 - 2022',
  },
];

const Experiences = () => (
  <section className="my-16 text-white">
    <h2 className="bg-indigo-steel rounded-lg px-4 py-2 inline-block mb-6 text-3xl font-semibold text-center">Experience</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* Left Column: Job Cards */}
      <div className="space-y-4">
        {experiences.map((job, index) => (
          <div key={index} className="bg-indigo-steel p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">{job.title}</h3>
            <p className="text-lg text-gray-300">{job.company}</p>
          </div>
        ))}
      </div>

      {/* Right Column: Years */}
      <div className="space-y-4 md:pl-6 text-center">
        {experiences.map((job, index) => (
          <div key={index} className="p-4">
            <p className="text-2xl text-green-500">{job.years}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experiences;
