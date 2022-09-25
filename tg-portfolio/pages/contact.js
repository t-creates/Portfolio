import React from 'react';
import Contact from '../components/Contact';

const contact = () => (
  <div className="mt-10 md:mx-24 sm:m-5">
    <div className="p-6 rounded-lg bg-none">
      <h1 className="navName text-black text-4xl font-bold border-green-700/100 pb-8 px-8 border-b-4">Contact</h1>
      <Contact />
    </div>
  </div>
);

export default contact;
