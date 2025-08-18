import React from 'react';
import ExperienceColumn from './ExperienceColumn';

const Experience = ({ companies }) => {
  const sortedCompanies = [...companies].sort((a, b) => parseInt(a.date, 10) - parseInt(b.date, 10));

  return (
    <div className="w-full rounded-lg">
      {sortedCompanies.map((company, index) => (
        <div
          key={company._id}
          className={`relative flex items-center ${index % 2 === 0
            ? 'justify-start border-r-2 border-gray-400 border-b-2 border-dashed'
            : 'justify-end border-l-2 border-b-2 border-gray-400 border-dashed'}`}
        >
          {/* Experience content container */}
          {/* USE NAPKIN.AI TO DESIGN COOL IMAGES FOR:
          RESPONSIBILITIES
          PROJECT TYPES
          APP ARCHITECTURE
          SDLC software developement life cycle
          AI Integrations
           */}
          <div
            className={`m-6 ${index % 2 === 0
              ? 'mr-auto animate-in slide-in-from-left-48 duration-1000'
              : 'ml-auto animate-in slide-in-from-right-48 duration-1000'}`}
            style={{ width: '75%' }}
            data-aos="fade-in"
            data-aos-duration="800"
          >
            <ExperienceColumn
              company={company.Company}
              title={company.title}
              experience={company.experience}
              id={company.Company}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
