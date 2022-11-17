import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import ContactForm from './ContactForm';

const Contact = () => {
  const textToCopy = 'geislinger@pm.me';
  const CC = dynamic(() => import('../copyClipboard').then((mod) => mod.CopyClipboard), { ssr: false });
  // This function is not working properly!!
  const showAlert = () => {
    alert('Email copied to clipboard');
  };

  return (
    <div className="mt-10 md:mx-3 lg:mx-24 sm:mx-0">
      <div className="md:p-6 sm:p-2 rounded-lg bg-neutral/60">
        <div className="flex flex-row gap-11 w-full lg:flex-nowrap sm:flex-wrap sm:justify-center">
          <div className="flex flex-col items-center justify-around">
            <div>
              <div className="flex place-content-end">
                <button type="button" onClick={showAlert} className="">
                  <CC content={textToCopy} />
                </button>
              </div>
              <h2 className="email md:text-3xl sm:text-lg pb-5 cursor-pointer">geislinger@pm.me</h2>
            </div>
            <div>
              <Link href="https://www.github.com/t-creates">
                <Image src="/Github.png" alt="github" width={250} height={75} className="cursor-pointer" />
              </Link>
            </div>
            <div className="mx-2">
              <Link href="https://www.linkedin.com/in/travis-geislinger-889b81188/">
                <Image src="/LI-Logo.svg" alt="linkedin" width={250} height={60} className="rounded-lg cursor-pointer" />
              </Link>
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
