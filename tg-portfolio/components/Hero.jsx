import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { urlFor } from '../utils/client';

const Hero = ({ hero }) => (
  <div className="flex justify-center">
    <div className="flex justify-between items-center max-w-5xl lg:m-28  md:px-16 md:m-14 pt-5 rounded-lg bg-slate-700/70">
      <div className="p-16">
        <div className="avatar">
          <div className="w-58 rounded-full">
            <img className="mask mask-squircle" src={urlFor(hero[0].image)} />
          </div>
        </div>
      </div>
      <div className="flew flex-col">
        <div>
          <h1 className="font-extrabold navName text-7xl  text-black/90  animate-in fade-in zoom-in delay-150 duration-700">{hero[0].name}</h1>
          <h1 className="font-bold navName text-5xl textBlue animate-in fade-in zoom-in delay-300 duration-700">{hero[0].title}</h1>
          <h1 className="font-semibold navName text-3xl text-gray-400 animate-in zoom-in delay-700 duration-700">{hero[0].bio}</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="../public/travisGeislingerResume.pdf">
            <button
              type="button"
              className="bg-transparent bg-cyan-400 text-black font-semibold hover:text-black py-2 px-4 border-2
           border-none hover:border-transparent rounded w-48 m-2 mt-9 animate-in fade-in zoom-in delay-700 duration-700
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

export default Hero;
