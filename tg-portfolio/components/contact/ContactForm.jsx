import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Setting success or failure messages states
  const [showMessage, setShowMessage] = useState({
    type: null,
    message: '',
  }, {
    type: 'failure',
    message: 'Oops! Something went wrong, please try again.',
  }, {
    type: 'success',
    message: 'Thank you! Your Message has been delivered.',
  });

  // Handling Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      setShowMessage('failure');

      // Reset form fields
      setForm('');
      return;
    }
    setShowMessage('success');
    // Reset form fields
    setForm('');
  };

  return (
    <div className="w-full">
      <h1 className="test text-4xl font-bold text-black border-green-700/100 pb-8 px-8 border-b-4">Message Me</h1>
      <form onSubmit={handleSubmit} method="post" className="flex flex-col">
        <div className="form-control w-full gap-5 mt-11">
          <input
            type="text"
            placeholder="NAME"
            htmlFor="name"
            id="name"
            name="name"
            className="input input-bordered w-full focus:ring-2 focus:ring-green-700/100"
            autoComplete="on"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="EMAIL"
            htmlFor="email"
            id="email"
            name="email"
            className="input input-bordered w-full focus:ring-2 focus:ring-green-700/100"
            autoComplete="on"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="SUBJECT"
            htmlFor="email"
            id="email"
            name="email"
            className="input input-bordered w-full focus:ring-2 focus:ring-green-700/100"
            autoComplete="on"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
          <textarea
            className="textarea textarea-bordered h-24 focus:ring-2 focus:ring-green-700/100"
            placeholder="MESSAGE"
            htmlFor="message"
            id="message"
            name="message"
            minLength="10"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <div className="flex justify-center flex-wrap">
            <button
              type="submit"
              className="btn btn-wide bg-green-700/100 text-black font-semibold
                    hover:text-white hover:bg-black py-2 px-4 border-2
                      border-none hover:border-transparent rounded
                      focus:ring-2 focus:ring-green-300/100 focus:outline-none
                      disabled:opacity-75 disabled:cursor-not-allowed"
            >SEND
            </button>
            <div className="text-left">
              {showMessage.type === 'success' ? (
                <p className="text-green-500 font-semibold text-sm mx-2 pt-5">
                  {showMessage.message}
                </p>
              ) : (
                <p className="text-red-500 font-semibold text-sm mx-2 pt-5">
                  {showMessage.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
