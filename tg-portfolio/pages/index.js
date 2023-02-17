import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Hero, About, Services, Projects } from '../components';
import { client, urlFor } from '../utils/client';
import Contact from '../components/contact/Contact';

const Home = ({ hero, projects, techno }) => (
  <div className="">
    <Hero hero={hero} />
    {/* Client Testimonials */}
    {/* <div className="mt-10 md:mx-24 sm:mx-0 ">
      <div className="p-6 rounded-lg bg-none">
        <h1 className="navName text-black text-4xl font-bold border-green-700/100 pb-5 px-8 border-b-4">Testimonials</h1>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
          <div className="p-10 space-x-10 h-auto scrollbar-hide flex flex-row overflow-auto gap-2 rounded-box max-w-8xl overflow-x-auto">
            {clientsTest?.map((clientTest) => <Testimonials key={clientTest._id} clients={clientTest} />)}
          </div>
        </Carousel>
      </div>
    </div> */}
    <div className="md:px-16 lg:px-24 sm:p-1 sm:pt-11">
      <div className="w-full h-full md:p-6 sm:pt-5 mb-10 sm:p-0">
        <Services />
      </div>
    </div>
    {/* <Skills /> */}
    <div className="mt-10 md:px-6 lg:px-16 sm:p-1 sm:pt-11">
      <div className="lg:mx-24 sm:mx-0">
        <h1 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-5">Recent Projects</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 justify-between overflow-auto w-full">
          {/* New Projects */}
          {projects?.map((project) => {
            if (project.neww) {
              return (
                <Projects
                  key={project._id}
                  projects={project}
                />
              );
            }
            return null;
          })}
        </div>
        <div className="flex items-center justify-center mt-5">
          <a
            href="/works"
            className="bg-green-700/100 text-white text-lg font-semibold hover:bg-black py-4 px-4 border-2
            hover:border-green-700/90 border-transparent rounded w-60 m-2 mt-9 text-center test"
          >View All Projects
          </a>
        </div>
      </div>
    </div>
    <div className="mt-10 lg:px-24 sm:p-1 sm:pt-11">
      <div className="w-full h-full md:p-11 sm:pt-5">
        <About />
      </div>
    </div>
    <div className="mt-10 md:px-6 lg:px-24 sm:p-1 sm:pt-11 block">
      <div className="w-full h-full md:p-6 sm:pt-5 mb-10 lg:m-12 sm:m-0">
        <h1 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-5">Toolbox
        </h1>
        <div className="scrollbar-hide md:grid md:grid-cols-5 md:justify-between md:gap-0 items-center sm:flex sm:flex-wrap sm:gap-5 sm:flex-row sm:justify-center">
          {techno.map((technology) => (
            <div className="xl:w-40 xl:h-40 lg:w-32 lg:h-32 sm:h-24 sm:w-24 bg-none" key={technology.name}>
              <img src={urlFor(technology.image)} alt={technology.name} className="h-full w-full object-contain rounded-md bg-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="md:px-16 lg:px-24 sm:p-1 sm:pt-11 mt-10">
      <div className="w-fill 2xl:flex">
        <div className="mt-10 md:p-0 lg:px-24 sm:px-0 z-10 2xl:min-w-[75%]">
          <h1 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-5">Contact</h1>
          <Contact />
        </div>
        <div className="2xl:flex 2xl:justify-center 2xl:pt-8 sm:hidden text-black">
          <img src="/default-monochrome-black.svg" alt="logo" className="w-40 h-40" />
        </div>
      </div>
    </div>
  </div>

);

// Data Fetching
export const getServerSideProps = async () => {
  // Hero Query
  const heroQuery = '*[_type == "hero"]';
  const hero = await client.fetch(heroQuery);

  // Testimonials Query
  const clientsQuery = '*[_type == "testimonials"]';
  const clientsTest = await client.fetch(clientsQuery);

  // Projects Query
  const projectsQuery = '*[_type == "projects"]';
  const projects = await client.fetch(projectsQuery);

  // Technologies Query
  const techQuery = '*[_type == "technologies"]';
  const techno = await client.fetch(techQuery);

  return {
    props: {
      hero,
      clientsTest,
      projects,
      techno,
    },
  };
};

export default Home;
