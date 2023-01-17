import React from 'react';

const ExperienceColumn = ({ company, title, experience, id }) => (
  <div id={id} className="carousel-item w-full bg-neutral/30 z-20">
    <div className="flex flex-col gap-5 p-5">
      <h1 className=" font-bold text-black z-30 test text-4xl ">{company}</h1>
      <div>
        <h2 className="font-semibold aboutTitle text-3xl text-black/75 ">{title}</h2>
      </div>
      <div>
        <p className="text-white">{experience}</p>
      </div>
    </div>
  </div>

);

export default ExperienceColumn;
