import React from 'react';
import ExperienceColumn from './ExperienceColumn';

const Experience = ({ companies }) => (
  <div className="w-full rounded-lg animate-in slide-in-from-bottom-48 duration-1000">
    {companies.map((company, index) => (
      <div
        key={company._id}
        className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
      >
        {/* Line connecting timeline items */}
        <div className="absolute top-4 left-1/2 h-full w-0.5 bg-gray-300" />

        {/* Experience content container */}
        <div
          className={`max-w-md p-6 border-2 border-gray-200 rounded-lg ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
          style={{ width: '66%' }} // 2/3 width for alternating blocks
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

export default Experience;
