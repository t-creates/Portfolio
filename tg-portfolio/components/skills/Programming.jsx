import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '../../utils/client';

const Programming = ({ technolos }) => (
  <div className="flex lg:flex-row md:flex-col place-content-start sm:flex-col justify-between  ">
    <div className="md:ml-11 sm:mt-9  w-full">
      <div>
        <h1 className="test text-3xl text-black">Technologies</h1>
      </div>
      <div className="">
        <div className="lg:max-h-96 round-full grow items-center flex lg:flex-col flex-wrap
                    justify-between gap-4 p-11 sm:p-2 sm:pt-5 scrollbar-hide "
        >
          {technolos.map((techno) => (
            <div className="animate-in zoom-in delay-500 duration-1000" key={techno._id}>
              <Link href={techno.link}>
                <Image
                  src={urlFor(techno.image).url()}
                  alt="techno"
                  width={100}
                  height={100}
                  className="hover:cursor-pointer hover:animate-bounce rounded-2xl
                    animate-bounce repeat-1 delay-500 duration-1000"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
);

export default Programming;
