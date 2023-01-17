import React from 'react';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      id: 'service-1',
      title: 'Full Stack Development',
      image: '/icons8-stack-64.png',
      text: 'servicesYellow',
      description: 'The process of designing, creating, testing, and maintaining software using a variety of programming languages and technologies.',
    },
    {
      id: 'service-2',
      title: 'Web Development',
      image: '/webDev.png',
      text: 'servicesRed',
      description: `Specifically dealing with the creation and maintenance of websites and web applications. 
      Such as e-commerce platforms or content management systems, as well as any interactive or dynamic features`,
    },
    {
      id: 'service-3',
      title: 'Freelance',
      image: '/freelance.png',
      text: 'servicesGreen',
      description: 'Providing services to clients on a project-by-project basis with the ability to deliver high quality work to client satisfaction.',
    },
    {
      id: 'service-4',
      title: 'Consulting',
      image: '/consulting1.png',
      text: 'servicesBlue',
      description: 'Using technical expertise to advise and guide organizations or individuals on how to use technology to achieve their goals.',
    },
  ];

  return (

    <div className="md:p-6 sm:p-2 animate-in slide-in-from-bottom-48 duration-1000">
      <h1 className="aboutTitle text-black text-5xl font-bold pb-10 px-8">Expertise</h1>
      <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 scrollbar-hide mt-10">
        {services.map((service, index) => (
          <div className="flex flex-1 flex-wrap rounded-md hover:shadow-2xl md:min-w-[350px] sm:min-w-fit min-h-[300px] justify-start p-5" key={index}>
            <div className="flex flex-1 items-center flex-wrap">
              <div className={`flex justify-center items-center rounded-lg bg-neutral/20 p-5 max-h-24 min-h-24 ${service.text}`}>
                <div className="relative w-20 h-20 ">
                  <Image src={service.image} layout="fill" />
                </div>
              </div>
              <h2 className="text-black/75 text-2xl pl-5 font-bold test">{service.title}</h2>
            </div>
            <p className="pt-5 text-lg text-black/70 test">{service.description}</p>
          </div>
        ))}
      </div>
    </div>

  );
};
export default Services;
