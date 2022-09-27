import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Add value to obj array with value set to proper state!!!

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

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
      console.log(error);
      setShowSuccessMessage(false);
      setShowFailureMessage(true);

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
      return;
    }
    setShowSuccessMessage(true);
    setShowFailureMessage(false);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setSubject('');

    console.log(name, email, subject, message);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="textarea textarea-bordered h-24 focus:ring-2 focus:ring-green-700/100"
            id="message"
            name="message"
            htmlFor="message"
            placeholder="MESSAGE"
            minLength="10"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
              {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm mx-2 pt-5">
                Thank you! Your Message has been delivered.
              </p>
              )}
              {showFailureMessage && (
              <p className="text-red-500 font-semibold text-sm mx-2 pt-5">
                Oops! Something went wrong, please try again.
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
