import React from 'react';
import ExperienceColumn from './ExperienceColumn';

const Experience = ({ companies }) => (
  <>
    <div className="carousel rounded-lg w-full animate-in slide-in-from-bottom-48 duration-1000">
      {companies.map((company) => (
        <ExperienceColumn
          key={company._id}
          company={company.Company}
          title={company.title}
          experience={company.experience}
          id={company.Company}
        />
      ))}
    </div>
    <div className="flex justify-center w-full py-2 gap-2">
      {companies.slice().reverse().map((company, index) => (
        <a key={company._id} className="btn btn-xs text-white/90" href={`#${company.Company}`}>{index + 1}</a>
      ))}
    </div>
  </>
);

export default Experience;
