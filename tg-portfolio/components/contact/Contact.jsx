import React from 'react';
import dynamic from 'next/dynamic';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import ContactForm from './ContactForm';

const Contact = () => {
  const textToCopy = 'geislinger@pm.me';
  const CC = dynamic(() => import('../copyClipboard').then((mod) => mod.CopyClipboard), { ssr: false });
  const showAlert = () => {
    alert('Email copied to clipboard');
  };

  return (
    <div className="mt-10 w-full h-auto">
      <div className="sm:p-2">
        <div className="flex flex-row gap-11 w-full lg:flex-nowrap sm:flex-wrap sm:justify-center">
          <div className="flex flex-col md:items-start sm:items-center justify-between w-full">
            <div className="gap-5 flex flex-col">
              <h3 className="font-bold text-black z-30 test md:text-4xl sm:text-xl ">How can I help you?</h3>
              <p className="font-semibold test md:text-3xl sm:text-lg text-black/75 ">Fill in the form or drop an email</p>
            </div>
            <div className="p-2 border-2 border-neutral/30 flex flex-row items-center sm:justify-between sm:w-full md:w-fit">
              <AiOutlineMail className="text-4xl text-black cursor-pointer sm:pr-1 md:pr-3" />
              <h2 className="email text-base cursor-pointer text-black">geislinger@pm.me</h2>
              <div className="text-black rounded-lg sm:pl-1 md:pl-3">
                <button type="button" onClick={showAlert} className="">
                  <CC content={textToCopy} />
                </button>
              </div>
            </div>
            <div className="p-2 border-2 border-neutral/30 md:block sm:hidden">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/travis-geislinger-889b81188/">
                <button type="button" className="flex flex-row items-center">
                  <FaLinkedin className="text-4xl text-[#0A66C2] hover:text-black cursor-pointer sm:pr-1 md:pr-3" />
                  <p className="email text-base cursor-pointer text-black">https://www.linkedin.com/in/travis-geislinger-889b81188/</p>
                </button>
              </a>
            </div>
            <div className="p-2 border-2 border-neutral/30">
              <a target="_blank" rel="noreferrer" href="https://www.github.com/t-creates">
                <button type="button" className="flex flex-row items-center">
                  <FaGithub className="text-4xl text-black cursor-pointer sm:pr-1 md:pr-3" />
                  <p className="email text-base cursor-pointer text-black">https://www.github.com/t-creates</p>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:items-end w-full lg:ml-16">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
