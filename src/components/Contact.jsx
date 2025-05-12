import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3hjt94e', // Replace with your EmailJS service ID
        'template_qxk373j', // Replace with your EmailJS template ID
        form.current,
        'Nhqwur1JyX-mz74LD'   // Replace with your EmailJS public key
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section
      id="contact"
      className="my-8 text-white bg-charcoal-slate rounded px-6 py-8 shadow-md max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-4 text-center">Contact Me</h2>

      {sent && <p className="text-green-400 mb-4 text-center">Message sent! Thanks for reaching out.</p>}

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="user_name">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="w-full px-4 py-2 rounded bg-midnight-teal text-green-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </div>

        <div>
          <label className="block mb-1" htmlFor="user_email">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="w-full px-4 py-2 rounded bg-midnight-teal text-green-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </div>

        <div>
          <label className="block mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded bg-midnight-teal text-green-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-500 transition px-6 py-2 rounded text-white font-medium"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
