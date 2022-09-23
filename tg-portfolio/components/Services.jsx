import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => (
  <div className="md:mt-10 md:mx-24 sm:mx-5">
    <div className="p-6 rounded-lg bg-slate-700/50 animate-in slide-in-from-bottom-48 duration-1000">
      <h1 className="test text-4xl text-black font-bold border-green-700/100 pb-8 px-8 border-b-4">Services</h1>
      <div className="flex flex-auto justify-between sm:gap-5 flex-row p-5 overflow-auto">
        <div className='flex flex-row items-center'>
        <Image src="/icons8-stack-64.png" width={65} height={65} />
          <h2 className='text-black font-bold'>Full Stack Development</h2>
        </div>
        <div className='flex flex-row items-center'>
          <p className="font-extrabold hidden md:flex pl-5 text-black"> | | </p>
        </div>
        <div className='flex flex-row items-center'>
        <Image src="/webDev.png" width={65} height={65} />
          <h2 className='text-black font-bold'>Web Development</h2>
        </div>
        <div className='flex flex-row items-center'>
          <p className="font-extrabold hidden md:flex pl-5 text-black"> | | </p>
        </div>
        <div className='flex flex-row items-center'>
        <Image src="/freelance.png" width={65} height={65} />
          <h2 className='text-black font-bold'>Freelance</h2>
        </div>
        <div className='flex flex-row items-center'>
          <p className="font-extrabold hidden md:flex pl-5 text-black"> | | </p>
        </div>
        <div className='flex flex-row items-center'>
        <Image src="/consulting1.png" width={65} height={65} />
          <h2 className='text-black font-bold'>Consulting</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="">
          <p className="pt-5 text-black font-bold">Want to grow your through an online presence with an elegant landing page or website?</p>
          </div>
          <div>
          <p className="pt-5 text-black font-bold">Want an online store to take you business to the next level?</p>
          </div>
          <div>
          <p className=" pt-5 text-black font-bold">Need help getting your project live?</p>
          </div>
          <div>
          <p className=" pt-5 text-black font-bold">Hit that <Link href="/contact"><span className="text-green-700/100 font-bold hover:cursor-pointer hover:animate-pulse">CONTACT</span></Link> link.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
