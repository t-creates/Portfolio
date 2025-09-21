import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Hero, About, Services /* , Experience , Projects */, Project, ProjectTypeFilter } from '../components';
import { client, urlFor } from '../utils/client';
import Contact from '../components/contact/Contact';
import Expertise from '../components/Expertise';

import { PORTFOLIO_QUERY } from '../lib/queries';

const Home = ({ hero, projects, techno, /* ex, */ expertise }) => {
  const [selectedType, setSelectedType] = useState('all');

  const filteredProjects = selectedType === 'all'
    ? projects
    : projects.filter((project) => {
      const type = project?.projectTypeGroup?.predefinedType === 'custom'
        ? project?.projectTypeGroup?.customType
        : project?.projectTypeGroup?.predefinedType;
      return type === selectedType;
    });

  return (
    <div className="transition-none transform-none animate-none">
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
      <div className="mt-10 lg:px-24 sm:p-1 sm:pt-11" id="about">
        <div
          className="w-full h-full md:p-11 sm:pt-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <About />
        </div>
      </div>
      <div className="md:px-16 lg:px-24 sm:p-1 sm:pt-11 my-10">
        <div
          className="w-full h-full md:p-6 sm:pt-5 mb-10 lg:m-12 sm:m-0"
          data-aos="fade-up"
          data-aos-duration="1000"
          id="expertise"
        >
          <Expertise expertise={expertise} />
        </div>
      </div>
      {/* <Skills /> */}

      {/* Old Projects */}
      {/*
    <div className="mt-10 md:px-6 lg:px-16 sm:p-1 sm:pt-11">
      <div className="lg:mx-24 sm:mx-0">
        <h1
          className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-5"
          data-aos="fade-up"
          data-aos-duration="800"
        >Recent Projects
        </h1>
        <div
          className="lg:grid lg:grid-cols-3 sm:grid-cols-1 md:flex sm:grid gap-5
          justify-between overflow-auto w-full h-full scrollbar-hide"
          data-aos="fade-up"
          data-aos-duration="1000"
        >

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
            data-aos="fade-up"
            data-aos-duration="800"
            href="/works"
            className="bg-green-700/100 text-white text-lg font-semibold hover:bg-black py-4 px-4 border-2
            hover:border-green-700/90 border-transparent rounded w-60 m-2 mt-9 text-center test z-10"
          >View All Projects
          </a>
        </div>
      </div>
    </div>
*/}
      {/* New Projects */}
      <div className="mt-10 md:px-6 lg:px-16 sm:p-1 sm:pt-11">
        <div className="lg:mx-24 sm:mx-0">
          <h1
            className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-5"
            data-aos="fade-up"
            data-aos-duration="800"
            id="projects"
          >Projects
          </h1>
          {/* Project Filters */}
          <div id="project-filters" className="flex w-full justify-evenly items-center">
            <ProjectTypeFilter
              projects={projects}
              selectedType={selectedType}
              onSelect={setSelectedType}
            />
          </div>
          <div
            className="lg:grid lg:grid-cols-3 sm:grid-cols-1 md:flex sm:grid gap-5
          justify-between w-full h-full scrollbar-hide flex-wrap"

          >
            {/* New Projects */}
            {filteredProjects?.map((project) => (
              <Project
                key={project._id}
                projects={project}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mt-5">
            <a
              data-aos="fade-up"
              data-aos-duration="800"
              href="/works"
              className="bg-green-700/100 text-white text-lg font-semibold hover:bg-black py-4 px-4 border-2
            hover:border-green-700/90 border-transparent rounded w-60 m-2 mt-9 text-center test z-10"
            >View All Projects
            </a>
          </div>
        </div>
      </div>

      <div
        className="mt-10 md:px-6 lg:px-24 sm:p-1 sm:pt-11 block"
        id="toolbox"
      >
        <div className="w-full h-full md:p-6 sm:pt-5 mb-10 lg:m-12 sm:m-0">
          <h1
            className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-5"
            data-aos="fade-up"
            data-aos-duration="800"
          >Toolbox
          </h1>
          <div
            className="scrollbar-hide md:grid md:grid-cols-5 md:justify-between md:gap-0 items-center
        sm:flex sm:flex-wrap sm:gap-5 sm:flex-row sm:justify-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            {techno.map((technology) => (
              <div
                className={`xl:w-32 xl:h-32 lg:w-28 lg:h-28 sm:h-24 sm:w-24 bg-none 
              ${technology.name === 'Tailwind CSS' ? '!h-48 !w-48 !sm:h-32 !sm:w-32' : ''}`}
                key={technology.name}
              >
                <img
                  src={urlFor(technology.image)}
                  alt={technology.name}
                  className="h-full w-full object-contain rounded-md bg-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*
    <div className="md:px-16 lg:px-24 sm:p-1 sm:pt-11 my-10">
      <div
        className="w-full h-full md:p-6 sm:pt-5 mb-10 lg:m-12 sm:m-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-5">Experience
        </h1>
        <Experience companies={ex} />
      </div>
    </div>
     */}
      <div className="md:px-16 lg:px-24 sm:p-1 sm:pt-11 mt-10 w-full">
        <div className="w-full h-full md:p-6 sm:pt-5 mb-10 lg:m-12 sm:m-0">
          <h1
            className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold md:pb-5 sm:p-0"
            data-aos="fade-up"
            data-aos-duration="800"
          >Contact
          </h1>
          <Contact />
        </div>
      </div>
    </div>

  );
};

// Data Fetching
export async function getServerSideProps() {
  try {
    const data = await client.fetch(PORTFOLIO_QUERY);
    return {
      props: {
        hero: data.hero || [],
        // clientsTest: data.clientsTest || [],
        projects: data.projects || [],
        techno: data.techno || [],
        ex: data.ex || [],
        expertise: data.expertise || [],
      },
    };
  } catch (err) {
    return {
      props: { hero: [], /* clientsTest: [], */ projects: [], techno: [], ex: [], expertise: [] },
    };
  }
}

export default Home;
