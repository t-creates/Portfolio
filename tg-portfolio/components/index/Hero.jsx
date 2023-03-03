import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import { urlFor } from '../utils/client';

const Hero = ({ hero }) => (
  <div className="flex justify-center w-full mainHero">
    <div className="flex md:flex-row sm:flex-col-reverse
    md:justify-evenly sm:justify-evenly items-center sm:mt-[5vh] md:px-16 md:my-14 pt-5"
    >
      {/* <div className="absolute top-[20%] right-[25%] md:w-80 sm:w-56 h-fit z-20 bg-opacity-0">
        <img className="w-full h-full object-fill rounded-full bg-opacity-0" src="/avatarImage.png" />
      </div> */}
      <div className="md:pl-12 sm:pl-0">
        <div className="gap-2 flex flex-col w-fit">
          {/* <img
            className="w-48 h-48 object-contain rounded-lg"
            src="/avatarImage.png"
          /> */}
          <h1 className="p-2 font-extrabold navName md:text-7xl sm:text-5xl  text-black/90  tracking-in-expand">Hi,</h1>
          <h1 className="p-2 font-extrabold navName md:text-7xl sm:text-5xl  text-black/90  tracking-in-expand">I am Travis.</h1>
          <h2 className="p-2 font-semibold aboutTitle md:text-5xl sm:text-2xl md:leading-[4rem] text-black/80 tracking-in-expand">A
            <span className="md:p-2 sm:p-1 font-bold text-green-700/100">Software Engineer</span>
            living in Alberta, Canada.
          </h2>
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
      <div className="md:w-[66%] h-auto z-0 md:pr-12 sm:pr-0 md:relative
       sm:absolute sm:w-[40%] md:top-0 md:right-0 sm:top-[15%] sm:right-[5%]
       slide-in-from-top-96 animate-in duration-1000"
      >
        <img
          className="w-full h-full object-cover md:rounded-l-none md:rounded-r-full
        sm:rounded-full"
          src="/avatarImage.png"
        />
      </div>
    </div>
  </div>
);

export default Hero;
