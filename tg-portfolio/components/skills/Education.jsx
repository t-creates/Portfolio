import React from 'react';
import { urlFor } from '../../utils/client';

const Education = ({ schools: { school, date, title, image } }) => (
  <div className="flex flex-auto gap-2 flex-row p-5 overflow-auto items-center
   justify-items-center  animate-in slide-in-from-left delay-1000 duration-1000"
  >
    <div className="w-24 mask mask-squircle">
      <img src={urlFor(image)} alt="schoolz" />
    </div>
    <div className="text-xl text-white/90 font-bold">
      <h1 className="">{school}</h1>
      <h2>{title}</h2>
      <h3>{date}</h3>
    </div>
  </div>
);

export default Education;
