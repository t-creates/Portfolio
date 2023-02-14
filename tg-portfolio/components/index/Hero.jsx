import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import { urlFor } from '../utils/client';

const Hero = ({ hero }) => (
  <div className="flex justify-center mainHero">
    <div className="flex justify-between items-center max-w-5xl lg:m-28 sm:mt-11 md:px-16 md:m-14 pt-5 rounded-lg">

      {/* UNCOMMENT IF YOU WANT TO ADD A PORTFOLIO AVATAR PHOTO */}

      {/* <div className="p-16">
        <div className="avatar">
          <div className="w-58 rounded-full">
            <img className="mask mask-squircle" src={urlFor(hero[0].image)} />
          </div>
        </div>
      </div> */}

      <div className="flew flex-col">
        <div>
          <h1 className="p-2 font-extrabold navName md:text-7xl sm:text-5xl  text-black/90  tracking-in-expand">Travis</h1>
          <h2 className="p-2 font-bold aboutTitle md:text-5xl sm:text-3xl text-black/80 tracking-in-expand">Software Engineer</h2>
          <h3 className="p-2 font-semibold aboutTitle 2xl:text-3xl md:text-2xl sm:text-sm text-black/70 pb-5 tracking-in-expand">{hero[0].bio}</h3>
        </div>
        <div className="flex flex-col justify-center items-center slide-in-from-bottom-96 animate-in duration-1000">
          <a target="_blank" rel="noreferrer" href="/travisGeislingerResume.pdf">
            <button
              type="button"
              className="bg-green-700/100 text-white font-semibold hover:bg-black py-2 px-4 border-2
            hover:border-green-700/90 rounded w-48 m-2 mt-9 border-transparent text-center test
           "
            >
              Resume
            </button>
          </a>
          <div className="p-3 flex">
            <div className="p-3">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/travis-geislinger-889b81188/">
                <button type="button">
                  <FaLinkedin className="text-4xl text-[#0A66C2] hover:text-black cursor-pointer" />
                </button>
              </a>
            </div>
            <div className="p-3">
              <a target="_blank" rel="noreferrer" href="https://www.github.com/t-creates">
                <button type="button">
                  <FaGithub className="text-4xl text-black cursor-pointer" />
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
