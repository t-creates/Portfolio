import React from 'react';
import ExperienceColumn from './ExperienceColumn';

const Experience = ({ companies }) => (
  <div className="w-full rounded-lg animate-in slide-in-from-bottom-48 duration-1000">
    {companies.map((company, index) => (
      <>
        <div
          key={company._id}
          className={`relative flex items-center ${index % 2 === 0 ? 'justify-start border-l-2 border-gray-400' : 'justify-end border-r-2 border-gray-400'} mb-8`}
        >
          {/* Experience content container */}
          <div
            className={`p-6 border-2 border-gray-200 rounded-lg ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
            style={{ width: '75%' }}
          >
            <ExperienceColumn
              company={company.Company}
              title={company.title}
              experience={company.experience}
              id={company.Company}
            />
          </div>
        </div>
        <div className="left-1/2 h-[25px] w-0.5 bg-gray-300" />
      </>
    ))}
  </div>
);

export default Experience;
