import React from 'react';
import { Programming, Education, Experience } from '../components/index';
import { client } from '../utils/client';

const Skills = ({ ed, ex, techno }) => (
  <div>
    <div className="mt-10 lg:mx-36 md:mx-20 sm:m-5 sm:mt-11">
      <div className="p-6 rounded-lg bg-none">
        <h1 className="navName text-black text-4xl font-bold border-green-700/100 pb-5 md:px-8 border-b-4
        md:text-left sm:text-center tracking-in-expand"
        >Programming
        </h1>
        <div className="w-full h-full p-11 sm:p-2 sm:pt-5">
          <Programming technolos={techno} />
        </div>
      </div>
    </div>
    <div className="mt-10 lg:mx-36 md:mx-20  sm:m-2">
      <div className="p-6 rounded-lg bg-none">
        <h1 className="navName text-black text-4xl font-bold border-green-700/100 pb-5 px-8 border-b-4
        md:text-left sm:text-center tracking-in-expand"
        >Experience
        </h1>
        <div className="w-full h-full p-11 sm:p-2 sm:pt-5">
          <Experience companies={ex} />
        </div>
      </div>
    </div>
    <div className="mt-10 lg:mx-36 md:mx-20  sm:m-2">
      <div className="p-6 rounded-lg bg-none">
        <h1 className="navName text-black text-4xl font-bold border-green-700/100 pb-5 px-8 border-b-4
        md:text-left sm:text-center tracking-in-expand"
        >Education
        </h1>
        <div className="grid md:grid-cols-2 sm:grid-rows-2 overflow-auto gap-2 p-11 sm:p-2 sm:pt-5">
          {ed?.map((edu) => <Education key={edu._id} schools={edu} />)}
        </div>
      </div>
    </div>
  </div>
);

// Data Fetching
export const getServerSideProps = async () => {
  // Education Query
  const edQuery = '*[_type == "education"]';
  const ed = await client.fetch(edQuery);

  // Experience Query
  const exQuery = '*[_type == "experience"]';
  const ex = await client.fetch(exQuery);

  // Technologies Query
  const techQuery = '*[_type == "technologies"]';
  const techno = await client.fetch(techQuery);

  return {
    props: {
      ed,
      ex,
      techno,
    },
  };
};
export default Skills;
