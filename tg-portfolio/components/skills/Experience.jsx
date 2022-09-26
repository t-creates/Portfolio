import React from 'react';
import ExperienceColumn from './ExperienceColumn';

const Experience = ({ companies }) => (
  <div>
    <div className="carousel rounded-lg w-full animate-in slide-in-from-bottom-48 duration-1000">
      {companies.map((company) => (
        <ExperienceColumn
          key={company._id}
          company={company.Company}
          title={company.title}
          experience={company.experience}
          id={company.title}
        />
      ))}
    </div>
    <div className="flex justify-center w-full py-2 gap-2">
      {companies.map((company, index) => (
        <a href={`#${company.title}`} className="btn btn-xs text-white/90" key={company._id}>{index + 1}</a>
      ))}
    </div>
  </div>
);

export default Experience;
