import React from 'react';
import { Programming, Education, Experience } from '../components/index';
import { client } from '../utils/client';

const Skills = ({ed, ex}) => (
  <div>
    <Programming />
  <div className="mt-10 md:mx-24 sm:m-5">
    <div className="p-6 rounded-lg bg-none">
      <h1 className="navName text-black text-4xl font-bold border-green-700/100 pb-8 px-8 border-b-4">Experience</h1>
      <div className="w-full h-full p-11 sm:p-2 sm:pt-5">
      {console.log(ex)}<Experience companies={ex} />
      </div>
    </div>
  </div>
    <div className="mt-10 md:mx-24 sm:m-5">
    <div className="p-6 rounded-lg bg-none">
      <h1 className="navName text-black text-4xl font-bold border-green-700/100 pb-8 px-8 border-b-4">Education</h1>
      <div className="flex flex-wrap overflow-auto gap-2 p-11 sm:p-2 sm:pt-5">
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

  return {
    props: {
      ed,
      ex,
    },
  };
};
export default Skills;
