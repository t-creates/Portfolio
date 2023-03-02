import React from 'react';
import { About, Services } from '../components/index';

const about = () => (
  <div className="mt-10 md:mx-16 lg:mx-24 sm:m-5 sm:mt-11">
    <div className="p-6 rounded-lg bg-none">
      <h1 className="navName text-black text-4xl font-bold border-green-700/100 pb-5 px-8 border-b-2">About</h1>
      <div className="w-full h-full md:p-11 sm:pt-5">
        <About />
        <Services />
      </div>
    </div>
  </div>
);

export default about;
