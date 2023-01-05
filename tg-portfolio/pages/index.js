import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { Hero, About, Services, Projects } from '../components';
import { client } from '../utils/client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Contact from '../components/contact/Contact';

const Home = ({ hero, projects }) => (
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
    <div className="mt-10 md:px-16 lg:px-24 sm:p-1 sm:pt-11 bg-white/80">
      <div className="p-6 rounded-lg bg-none">
        <h1 className="navName text-black text-4xl font-bold pb-5 px-8">A Little About Me</h1>
        <div className="w-full h-full md:p-11 sm:pt-5 mb-10">
          <About />
          <Services />
        </div>
      </div>
    </div>
    {/* <Skills /> */}
    <div className="py-10 md:px-24 sm:pt-11">
      <div className="pt-11 rounded-lg bg-none">
        <h1 className="navName text-black text-4xl font-bold pb-5 px-8">Check Out Some Of My Recent Projects</h1>
        <div className="flex flex-wrap justify-between overflow-auto gap-1 lg:mx-40 sm:p-4 sm:pt-5">
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
            className="bg-green-700/100 text-black text-lg font-semibold hover:text-white hover:bg-black py-4 px-4 border-2
           border-none hover:border-transparent rounded w-60 m-2 mt-9 text-center"
          >View All Projects
          </a>
        </div>
      </div>
    </div>
    <div className="pt-10 md:px-24 sm:pt-11 bg-white/80 pb-5">
      <div className="p-6 rounded-lg bg-none">
        <h1 className="navName text-black text-4xl font-bold pb-5 px-8">Contact</h1>
        <div className="lg:mx-14 md:mx-0 sm:mx-0">
          <Contact />
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

  return {
    props: {
      hero,
      clientsTest,
      projects,
    },
  };
};

export default Home;
