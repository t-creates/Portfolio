import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import { urlFor } from '../utils/client';

const Hero = ({ hero }) => (
  <div className="flex justify-center">
    <div className="flex justify-between items-center max-w-5xl lg:m-28 sm:mt-11 md:px-16 md:m-14 pt-5 rounded-lg ">

      {/* UNCOMMENT IF YOU WANT TO ADD A PORTFOLIO AVATAR PHOTO */}

      {/* <div className="p-16">
        <div className="avatar">
          <div className="w-58 rounded-full">
            <img className="mask mask-squircle" src={urlFor(hero[0].image)} />
          </div>
        </div>
      </div> */}

      <div className="flew flex-col animate-in fade-in zoom-in delay-700 duration-700">
        <div>
          <h1 className="p-2 font-extrabold navName text-7xl  text-black/90">{hero[0].name}</h1>
          <h2 className="p-2 font-bold aboutTitle text-5xl text-green-700/95">{hero[0].title}</h2>
          <h3 className="p-2 font-semibold test text-3xl text-black/90">{hero[0].bio}</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <a target="_blank" rel="noreferrer" href="/travisGeislingerResume.pdf" locale={false}>
            <button
              type="button"
              className=" bg-green-700/100 text-black font-semibold hover:text-white hover:bg-black py-2 px-4 border-2
           border-none hover:border-transparent rounded w-48 m-2 mt-9
           "
            >
              Resume
            </button>
          </a>
          <div className="p-3 flex flex-row">
            <div className="p-3">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/travis-geislinger-889b81188/">
                <button type="button">
                  <FaLinkedin className="text-4xl text-green-700/95 hover:text-black cursor-pointer" />
                </button>
              </a>
            </div>
            <div className="p-3">
              <a target="_blank" rel="noreferrer" href="https://www.github.com/t-creates">
                <button type="button">
                  <FaGithub className="text-4xl text-green-700/95 hover:text-black cursor-pointer" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
