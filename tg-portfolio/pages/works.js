import React from 'react';
import Projects from '../components/Projects';
import { client } from '../utils/client';

const Works = ({ projects }) => (
  <div className="mt-10 lg:mx-36 md:mx-20 sm:m-5">
    <div className="sm:pt-6 rounded-lg bg-none">
      <h1 className="aboutTitle text-black text-4xl font-bold border-green-700/100 pb-5 mb-5 px-8 border-b-2
      md:text-left sm:text-center tracking-in-expand "
      >Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-5 grid-cols-1">
        {projects?.map((project) => <Projects key={project._id} projects={project} />)}
      </div>
    </div>
  </div>
);

// Data Fetching
export const getServerSideProps = async () => {
  // Projects Query
  const projectsQuery = '*[_type == "projects"]';
  const projects = await client.fetch(projectsQuery);

  return {
    props: {
      projects,
    },
  };
};

export default Works;
