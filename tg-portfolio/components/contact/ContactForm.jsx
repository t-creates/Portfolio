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
    type: '',
    message: '',
  });

  // Handling Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      // add timeout to show message
      setShowMessage({
        type: 'failure',
        message: 'Oops! Something went wrong, please try again.',
      });
      // Reset form fields
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      return;
    }
    // add a timeout for the success message
    setShowMessage({
      type: 'success',
      message: 'Thank you! Your Message has been delivered.',
    });
    // Reset form fields
    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} method="post" className="flex flex-col">
        <div className="form-control w-full gap-5 mt-11 bg-neutral/30 p-10 rounded">
          <div>
            <input
              type="text"
              placeholder="Name..."
              htmlFor="name"
              id="name"
              name="name"
              className="input input-bordered w-full focus:ring-2 focus:ring-green-700/100 test text-white placeholder:text-white placeholder:test"
              autoComplete="on"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email..."
              htmlFor="email"
              id="email"
              name="email"
              className="input input-bordered w-full focus:ring-2 focus:ring-green-700/100 test text-white placeholder:text-white placeholder:test"
              autoComplete="on"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject..."
              htmlFor="email"
              id="email"
              name="email"
              className="input input-bordered w-full focus:ring-2 focus:ring-green-700/100 test placeholder:text-white placeholder:test"
              autoComplete="on"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </div>
          <div>
            <textarea
              className="textarea textarea-bordered h-24 focus:ring-2 focus:ring-green-700/100 w-full test text-white placeholder:text-white placeholder:test"
              placeholder="Message..."
              htmlFor="message"
              id="message"
              name="message"
              minLength="10"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <div className="flex justify-center flex-wrap">
            <button
              type="submit"
              className="btn md:btn-wide sm:w-36 bg-green-700/100 font-semibold
                    text-white hover:bg-black py-2 px-4 border-2
                       hover:border-green-700/90 rounded border-transparent
                      focus:ring-2 focus:ring-green-300/100 focus:outline-none
                      disabled:opacity-75 disabled:cursor-not-allowed test"
            >SEND
            </button>
            <div className="text-left">
              {showMessage.type === 'success' ? (
                <p className="text-green-900 font-semibold text-sm mx-2 pt-5">
                  {showMessage.message}
                </p>
              ) : (
                <p className="text-red-900 font-semibold text-sm mx-2 pt-5">
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
