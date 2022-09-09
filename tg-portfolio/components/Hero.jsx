import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { urlFor } from '../utils/client';

const Hero = ({ hero }) => {
  const heroImage = urlFor(hero[0].image).url();
  console.log(hero);
  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center max-w-5xl lg:m-28  md:px-16 md:m-14 rounded-lg bg-slate-700/70">
        <div className="p-16">
          <img
            className="rounded-full lg:w-96 lg:h-96  md:w-64 md:h-64 sm:w-28 sm:h-28 pr-5"
            src={`${heroImage}`}
          />
        </div>
        <div className="flew flex-col">
          <div>
            <h1 className="font-extrabold navName text-7xl animate-bounce fill-mode-forwards">{hero[0].name}</h1>
            <h1 className="font-bold navName text-5xl animate-bounce repeat-1 textBlue">{hero[0].title}</h1>
            <h1 className="font-semibold navName text-3xl heroTitle">{hero[0].bio}</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link href="../public/travisGeislingerResume.pdf">
              <button
                type="button"
                className="bg-transparent bg-cyan-400 text-black font-semibold hover:text-black py-2 px-4 border-2
           border-none hover:border-transparent rounded w-48 m-2 mt-9
           "
              >
                Resume
              </button>
            </Link>
            <div className="p-3 flex flex-row">
              <div className="p-3">
                <Link href="https://www.linkedin.com/in/travis-geislinger-889b81188/">
                  <button type="button">
                    <FaLinkedin className="text-4xl logoBlue text-blue-700 hover:text-cyan-400 cursor-pointer" />
                  </button>
                </Link>
              </div>
              <div className="p-3">
                <Link href="https://www.github.com/t-creates">
                  <button type="button">
                    <FaGithub className="text-4xl logoBlue text-blue-700 hover:text-cyan-400 cursor-pointer" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
