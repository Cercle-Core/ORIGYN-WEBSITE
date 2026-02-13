/**
 * Contact Form
 * Name, email, type (recruit/investor/partner), message.
 * Used on Contact page.
 */
'use client';

import { useState } from 'react';

export default function ContactForm({ className = '' }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={`
          rounded-lg p-8
          bg-neutral-900/50 border border-neutral-800
          text-center
          ${className}
        `}
      >
        <p className="text-body text-neutral-100 mb-2">
          Thank you for reaching out.
        </p>
        <p className="text-body text-neutral-400">
          We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        rounded-lg p-6
        bg-neutral-900/50 border border-neutral-800
        space-y-4
        ${className}
      `}
    >
      <div>
        <label htmlFor="name" className="block text-caption text-neutral-400 mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-2 rounded-md bg-primary-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-caption text-neutral-400 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-2 rounded-md bg-primary-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="type" className="block text-caption text-neutral-400 mb-2">
          I am a...
        </label>
        <select
          id="type"
          name="type"
          className="w-full px-4 py-2 rounded-md bg-primary-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          <option value="recruit">Recruit / Job seeker</option>
          <option value="investor">Investor</option>
          <option value="partner">Partner</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-caption text-neutral-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 rounded-md bg-primary-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200"
      >
        Send message
      </button>
    </form>
  );
}
