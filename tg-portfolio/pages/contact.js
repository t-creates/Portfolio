import React from 'react';
import Head from 'next/head';
import Contact from '../components/contact/Contact';

const contact = () => (
  <>
    <Head>
      <title>Contact Travis Geislinger | Software Developer</title>
      <meta
        name="description"
        content="Contact Travis Geislinger for custom software, full stack development, data integrations, dashboards, and consulting."
      />
      <link rel="canonical" href="https://travisg.tech/contact" />
    </Head>
    <div className="mt-10 lg:mx-36 md:mx-20 sm:m-5">
      <div className="p-6 rounded-lg bg-none">
        <h1 className="aboutTitle text-black text-4xl font-bold border-green-700/100 pb-5 px-8 border-b-2
        md:text-left sm:text-center tracking-in-expand"
        >Contact
        </h1>
        <Contact />
      </div>
    </div>
  </>
);

export default contact;
