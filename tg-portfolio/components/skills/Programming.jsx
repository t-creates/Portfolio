import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../utils/client';

const Programming = ({ technolos }) => (
  <div className="flex md:flex-row place-content-start sm:flex-col justify-between  ">
    <div className="flex flex-col items-start text-green-700 font-bold animate-in zoom-in spin-in-90 duration-1000">
      <div className="m-3"><h1>FRONT-END</h1> <progress className="progress md:w-96 sm:w-64" value="80" max="100" /></div>
      <div className="m-3"><h1>BACK-END</h1><progress className="progress md:w-96 sm:w-64" value="20" max="100" /></div>
      <div className="m-3"><h1>JAVASCRIPT</h1><progress className="progress md:w-96 sm:w-64" value="90" max="100" /></div>
      <div className="m-3"><h1>PYTHON</h1><progress className="progress md:w-96 sm:w-64" value="10" max="100" /></div>
    </div>
    <div className="md:ml-11 sm:mt-9  w-full">
      <div>
        <h1 className="test text-3xl text-black">Technologies</h1>
      </div>
      <div className="">
        <div className=" round-full grow columns-auto flex flex-wrap items-center
          justify-between overflow-auto gap-2 p-11 sm:p-2 sm:pt-5 scrollbar-hide"
        >
          {technolos.map((techno) => (
            <div className="animate-in slide-in-from-right delay-500 duration-1000 ">
              <Link href={techno.link} key={techno._id}>
                <img
                  src={urlFor(techno.image)}
                  alt="techno"
                  width={100}
                  height={100}
                  className="hover:cursor-pointer hover:animate-bounce rounded-2xl
                    animate-bounce repeat-1 delay-500 duration-1000 "
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
