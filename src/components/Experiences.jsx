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
  <section className="my-16 md:my-48 text-white px-4">
    <h2 className="bg-indigo-steel rounded px-4 py-2 mb-6 text-3xl font-semibold text-center mx-auto w-fit">
    Experience
    </h2>
    <div className="space-y-6 max-w-4xl mx-auto">
      {experiences.map((job, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:justify-between items-center bg-indigo-steel rounded shadow-lg border border-gray-700 p-6"
        >
          <div className="text-left">
            <h3 className="text-2xl font-bold">{job.title}</h3>
            <p className="text-lg text-gray-300">{job.company}</p>
          </div>
          <div className="mt-4 md:mt-0 md:text-center">
            <p className="text-xl font-semibold text-green-400">{job.years}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experiences;
