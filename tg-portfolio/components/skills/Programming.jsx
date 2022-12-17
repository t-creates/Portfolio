import React from 'react';
import Image from 'next/image';

import { urlFor } from '../../utils/client';

const Programming = ({ technolos }) => (
  <div className="flex md:flex-row  place-content-start justify-between lg:mx-36 sm:m-0 md:m-1">
    <div className="md:ml-11 sm:mt-9  w-full">
      <div>
        <h1 className="test text-3xl text-black">Technologies</h1>
      </div>
      <div className="">
        <div className=" round-full grow items-center flex flex-row flex-wrap
                    justify-between md:gap-4 sm:gap-1 sm:pt-5 scrollbar-hide "
        >
          {technolos.map((techno) => (
            <div className="animate-in zoom-in duration-1000" key={techno._id}>
              <a href={techno.link} target="_blank" rel="noreferrer">
                <Image
                  src={urlFor(techno.image).url()}
                  alt="techno"
                  width={100}
                  height={100}
                  className="hover:cursor-pointer rounded-2xl
                     delay-500 duration-1000"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
);

export default Programming;
