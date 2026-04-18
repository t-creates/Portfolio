import React, { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '',
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    const res = await fetch('/api/contact', {
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
    } else {
      setStatus({ type: 'success', message: 'Thanks for reaching out — I will reply shortly!' });
      setForm(initialForm);
    }
    setSubmitting(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <input
        type="text"
        id="company"
        name="company"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        value={form.company}
        onChange={handleChange}
      />
      <div className="grid gap-3 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="flex flex-col gap-1.5 text-sm font-semibold text-black/70">
            <span>Full Name</span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Jordan Smith"
              className="rounded-xl border border-black/10 bg-black/5 px-3 py-2.5 font-normal text-black focus:border-black focus:outline-none sm:px-4 sm:py-3"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="flex flex-col gap-1.5 text-sm font-semibold text-black/70">
            <span>Email</span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="rounded-xl border border-black/10 bg-black/5 px-3 py-2.5 font-normal text-black focus:border-black focus:outline-none sm:px-4 sm:py-3"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="flex flex-col gap-1.5 text-sm font-semibold text-black/70">
          <span>Project or role</span>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Website build, dashboard, consulting, or freelance support"
            className="rounded-xl border border-black/10 bg-black/5 px-3 py-2.5 font-normal text-black focus:border-black focus:outline-none sm:px-4 sm:py-3"
            required
            value={form.subject}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="flex flex-col gap-1.5 text-sm font-semibold text-black/70">
          <span>Message</span>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Share a short brief, goals, current stack, and any timing requirements."
            className="rounded-xl border border-black/10 bg-black/5 px-3 py-2.5 font-normal text-black focus:border-black focus:outline-none sm:px-4 sm:py-3"
            required
            value={form.message}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="w-full rounded-full bg-black px-6 py-2.5 text-white font-semibold transition hover:bg-green-700 disabled:opacity-60 sm:w-auto sm:px-8 sm:py-3"
          disabled={submitting}
        >
          {submitting ? 'Sending...' : 'Send message'}
        </button>
        {status.message ? (
          <p className={`text-sm font-medium ${status.type === 'success' ? 'text-green-700' : 'text-red-600'}`}>
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
