import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      id: 'service-1',
      title: 'Full Stack Development',
      image: '/icons8-stack-64.png',
    },
    {
      id: 'service-2',
      title: 'Web Development',
      image: '/webDev.png',
    },
    {
      id: 'service-3',
      title: 'Freelance',
      image: '/freelance.png',
    },
    {
      id: 'service-4',
      title: 'Consulting',
      image: '/consulting1.png',
    },
  ];

  return (
    <div className="mt-10 md:mx-3 lg:mx-24 sm:mx-0">
      <div className="md:p-6 sm:p-2 rounded-lg bg-neutral/60 animate-in slide-in-from-bottom-48 duration-1000">
        <h1 className="test text-4xl text-black font-bold border-green-700/100 pb-8 px-8 border-b-4">Services</h1>
        <div className="flex flex-auto justify-between sm:gap-5 flex-row p-5 overflow-auto scrollbar-hide">
          {services.map((service) => (
            service.id !== 'service-4' ? (
              <>
                <div className="flex flex-row items-center ">
                  <Image src={service.image} width={65} height={65} />
                  <h2 className="text-white/90 font-bold">{service.title}</h2>
                </div>
                <div className="flex flex-row items-center">
                  <p className="font-extrabold hidden md:flex pl-5 text-black"> | | </p>
                </div>
              </>
            ) : (
              <div className="flex flex-row items-center ">
                <Image src={service.image} width={65} height={65} />
                <h2 className="text-white/90 font-bold">{service.title}</h2>
              </div>
            )
          ))}
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="">
            <p className="pt-5 text-white/90 font-bold">Want to grow your through an online presence with an elegant landing page or website?</p>
          </div>
          <div>
            <p className="pt-5 text-white/90 font-bold">Want an online store to take you business to the next level?</p>
          </div>
          <div>
            <p className=" pt-5 text-white/90 font-bold">Need help getting your project live?</p>
          </div>
          <div>
            <p className=" pt-5 text-white/90 font-bold">Hit that <Link href="/contact"><span className="text-green-700/100 font-bold hover:cursor-pointer hover:animate-pulse">CONTACT</span></Link> link.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
