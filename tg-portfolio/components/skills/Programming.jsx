import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../utils/client';

const Programming = ({ technolos }) => {
  const skillBar = [
    {
      id: 'skill-1',
      title: 'FRONT-END',
      value: '80',
    },
    {
      id: 'skill-2',
      title: 'BACK-END',
      value: '20',
    },
    {
      id: 'skill-3',
      title: 'JAVASCRIPT',
      value: '90',
    },
    {
      id: 'skill-4',
      title: 'PYTHON',
      value: '10',
    },
  ];

  return (
    <div className="flex lg:flex-row md:flex-col place-content-start sm:flex-col justify-between  ">
      <div className="flex flex-col items-start text-green-700 font-bold animate-in zoom-in duration-1000">
        {skillBar.map((skill) => (
          <div className="m-3"><h1>{skill.title}</h1> <progress className="progress md:w-96 sm:w-64" value={skill.value} max="100" /></div>
        ))}
      </div>
      <div className="md:ml-11 sm:mt-9  w-full">
        <div>
          <h1 className="test text-3xl text-black">Technologies</h1>
        </div>
        <div className="">
          <div className="lg:max-h-96 round-full grow flex lg:flex-col flex-wrap
                    justify-between gap-4 p-11 sm:p-2 sm:pt-5 scrollbar-hide "
          >
            {technolos.map((techno) => (
              <div className="animate-in zoom-in delay-500 duration-1000 ">
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
};

export default Programming;
