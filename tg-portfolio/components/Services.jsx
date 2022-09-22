import React from 'react';
import Link from 'next/link';

const Services = () => (
  <div className="mt-10 mx-24">
    <div className="p-6 rounded-lg bg-slate-700/80">
      <h1 className="navName text-4xl font-bold logoBlue pb-8 px-8 border-b-4">Services</h1>
      <div className="flex flex-row gap-5 p-5">
        <div>
          <h2>Full Stack Development</h2>
        </div>
        <div>
          <h2>Web Development</h2>
        </div>
        <div>
          <h2>Freelance</h2>
        </div>
        <div>
          <h2>Consulting</h2>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-5 px-5">
          <p className="pt-5">Need a website for your business? I can help you build a website that will help you grow your business.</p>
          <p>Want an online store to take you business to the next level?</p>
          <p>Need help getting you project live?</p>
          <p>Hit that <Link href="/contact"><span className="text-blue-700 font-bold">CONTACT</span></Link> link.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
