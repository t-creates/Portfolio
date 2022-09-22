import React from 'react';
import Projects from '../components/Projects';
import { client } from '../utils/client';

const works = ({ projects }) => (
  <div className="mt-10 mx-24">
    <div className="p-6 rounded-lg bg-slate-700/70">
      <h1 className="navName text-4xl font-bold logoBlue pb-8 px-8 border-b-4">Projects</h1>
      {console.log(projects)}
      <div className="flex flex-wrap justify-between overflow-auto gap-16 p-11">
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

export default works;
