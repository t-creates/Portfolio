import React from 'react';
import Contact from '../components/contact/Contact';

const contact = () => (
  <div className="mt-10 lg:mx-36 md:mx-20 sm:m-5 sm:mt-11">
    <div className="p-6 rounded-lg bg-none">
      <h1 className="navName text-black text-4xl font-bold border-green-700/100 pb-5 px-8 border-b-4
      md:text-left sm:text-center tracking-in-expand"
      >Contact
      </h1>
      <Contact />
    </div>
  </div>
);

export default contact;
