import React from 'react';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      id: 'service-1',
      title: 'Full Stack Development',
      image: '/icons/fullstack.svg',
      text: 'servicesYellow',
      description: 'The process of designing, creating, testing, and maintaining software using a variety of programming languages and technologies.',
    },
    {
      id: 'service-2',
      title: 'Web Development',
      image: '/icons/code-typing-animate.svg',
      text: 'servicesRed',
      description: `Specifically dealing with the creation and maintenance of websites and web applications. 
      Such as e-commerce platforms or content management systems, as well as any interactive or dynamic features`,
    },
    {
      id: 'service-3',
      title: 'Freelance',
      image: '/icons/freelance.svg',
      text: 'servicesGreen',
      description: 'Providing services to clients on a project-by-project basis with the ability to deliver high quality work to client satisfaction.',
    },
    {
      id: 'service-4',
      title: 'Consulting',
      image: '/icons/consulting.svg',
      text: 'servicesBlue',
      description: 'Using technical expertise to advise and guide organizations or individuals on how to use technology to achieve their goals.',
    },
  ];

  return (

    <div className="md:p-6 sm:p-1 animate-in slide-in-from-bottom-48 duration-100">
      <h1 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-10">Expertise</h1>
      <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 scrollbar-hide mt-10">
        {services.map((service, index) => (
          <div className="flex flex-1 flex-wrap rounded-md hover:shadow-2xl bg-white md:min-w-[350px] sm:min-w-fit min-h-[350px] justify-start p-5" key={index}>
            <div className="flex flex-col justify-around items-start flex-wrap">
              <div className="flex justify-center items-center rounded-lg">
                <div className="relative w-48 h-48">
                  <Image src={service.image} layout="fill" className="object-center object-contain" />
                </div>
              </div>
              <h2 className="text-black/75 text-2xl md:pt-0 mt-5 font-bold test">{service.title}</h2>
            </div>
            <p className="pt-5 text-lg text-black/70 test items-end">{service.description}</p>
          </div>
        ))}
      </div>
    </div>

  );
};
export default Services;
