import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import { urlFor } from '../utils/client';

const Hero = ({ hero }) => (
  <div className="flex justify-center w-full mainHero">
    <div className="flex md:flex-row sm:flex-col-reverse md:justify-between sm:justify-center items-center sm:mt-[18vh] md:px-16 md:my-14 pt-5 rounded-lg">
      {/* <div className="relative md:w-96 sm:w-56 h-fit z-20">
        <img className="w-full h-full object-fill" src="/icons/to-the-stars-animate.svg" />
      </div> */}
      <div className="">
        <div className="gap-2 flex flex-col">
          <img
            className="w-[300vh] h-[300vh] object-contain animate-in slide-in-from-top-96 duration-1000
          absolute top-[-230px] left-0 -z-0 sm:hidden lg:block"
            src="/icons/hawk.svg"
          />
          <h1 className="p-2 font-extrabold navName md:text-7xl sm:text-5xl  text-black/90  tracking-in-expand">Travis</h1>
          <h2 className="p-2 font-bold aboutTitle md:text-5xl sm:text-3xl text-black/80 tracking-in-expand">Software Engineer</h2>
          <h3 className="p-2 font-normal aboutTitle 2xl:text-3xl md:text-2xl sm:text-base text-black/70 pb-5 tracking-in-expand">{hero[0].bio}</h3>
        </div>
        <div className="flex flex-col justify-center md:items-start sm:items-center slide-in-from-bottom-96 animate-in duration-1000">
          <a target="_blank" rel="noreferrer" href="/travisGeislingerResume.pdf" className="z-10">
            <button
              type="button"
              className="bg-green-700/100 text-white hover:bg-black py-2 px-4 border-2
            hover:border-green-700/90 rounded w-48 h-12 m-2 border-transparent text-center test"
            >
              Resume/CV
            </button>
          </a>
          <div className="px-3 pt-3 flex justify-around w-48">
            <div className="pt-3 px-3 z-10">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/travis-geislinger-889b81188/">
                <button type="button">
                  <FaLinkedin className="text-4xl text-[#0A66C2] hover:text-black cursor-pointer" />
                </button>
              </a>
            </div>
            <div className="pt-3 px-3 z-10">
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
