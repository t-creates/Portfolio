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

      <div className="flew flex-col">
        <div>
          <h1 className="p-2 font-extrabold navName md:text-7xl sm:text-5xl  text-black/90  tracking-in-expand">{hero[0].name}</h1>
          <h2 className="p-2 font-bold aboutTitle md:text-5xl sm:text-3xl text-green-700/95 tracking-in-expand">Software Engineer</h2>
          <h3 className="p-2 font-semibold test md:text-3xl sm:text-sm text-black/90 tracking-in-expand">Engineering software to make your life easier</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <a target="_blank" rel="noreferrer" href="/travisGeislingerResume.pdf" locale={false}>
            <button
              type="button"
              className="bg-green-700/100 text-black font-semibold hover:text-white hover:bg-black py-2 px-4 border-2
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
