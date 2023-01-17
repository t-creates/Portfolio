import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import ContactForm from './ContactForm';

const Contact = () => {
  const textToCopy = 'geislinger@pm.me';
  const CC = dynamic(() => import('../copyClipboard').then((mod) => mod.CopyClipboard), { ssr: false });
  const showAlert = () => {
    alert('Email copied to clipboard');
  };

  return (
    <div className="mt-10 md:px-3 lg:px-24 sm:px-0">
      <div className="md:p-6 sm:p-2 rounded-lg bg-neutral/30">
        <div className="flex flex-row gap-11 w-full lg:flex-nowrap sm:flex-wrap sm:justify-center">
          <div className="flex flex-col items-start justify-around sm:gap-2">
            <div>
              <div className="flex place-content-end text-white rounded-lg sm:pt-5">
                <button type="button" onClick={showAlert} className="">
                  <CC content={textToCopy} />
                </button>
              </div>
              <h2 className="email md:text-3xl sm:text-lg pb-5 cursor-pointer text-white">geislinger@pm.me</h2>
            </div>
            <div>
              <a target="_blank" href="https://www.github.com/t-creates" rel="noreferrer">
                <Image src="/Github.png" alt="github" width={250} height={85} className="cursor-pointer" />
              </a>
            </div>
            <div className="mx-2">
              <a target="_blank" href="https://www.linkedin.com/in/travis-geislinger-889b81188/" rel="noreferrer">
                <Image src="/LI-Logo.svg" alt="linkedin" width={250} height={60} className="rounded-lg cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:items-start w-full lg:ml-16">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
