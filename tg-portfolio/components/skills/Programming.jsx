import React from 'react';

import { urlFor } from '../../utils/client';

const Programming = ({ technolos }) => (
  <div className="flex md:flex-row  place-content-start justify-between lg:mx-36 sm:m-0 md:m-1">
    <div className="md:ml-11 sm:mt-9 w-full">
      <div className="round-full grow items-center flex flex-row flex-wrap
        sm:justify-center md:justify-between md:gap-4 sm:gap-1 sm:pt-5 scrollbar-hide"
      >
        {technolos.map((techno) => (
          <div className="animate-in zoom-in duration-1000 h-fit w-48 bg-none" key={techno._id}>
            <a href={techno.link} target="_blank" rel="noreferrer">
              <img
                src={urlFor(techno.image).url()}
                alt="techno"
                layout="fill"
                className="hover:cursor-pointer hover:scale-125 bg-none transform transition-transform
                     delay-500 duration-1000 object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Programming;
