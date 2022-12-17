import React from 'react';
import Projects from '../components/Projects';
import { client } from '../utils/client';

const Works = ({ projects }) => (
  <div className="mt-10 lg:mx-36 md:mx-20 sm:m-5 sm:mt-11">
    <div className="sm:pt-6 rounded-lg bg-none">
      <h1 className="navName text-black text-4xl font-bold border-green-700/100 pb-5 px-8 border-b-4
      md:text-left sm:text-center tracking-in-expand"
      >Projects
      </h1>
      <div className="flex flex-wrap justify-between overflow-auto gap-2 p-11 sm:p-2 sm:pt-5">
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
