import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  console.log('Hero');
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1>Image</h1>
      </div>
      <div>
        <h1>Hello, </h1>
        <h1>I&apos;m Travis,</h1>
        <h1>Web Developer</h1>
      </div>
      <div>
        <Link href="../public/travisGeislingerResume.pdf">
          <button
            type="button"
            className="bg-transparent hover:bg-cyan-400 text-blue-700 font-semibold hover:text-black py-2 px-4 border-2
           border-blue-700 hover:border-transparent rounded"
          >
            Resume
          </button>
        </Link>
        <Link href="https://www.linkedin.com/in/travis-geislinger-889b81188/">
          <FaLinkedin className="text-4xl logoBlue hover:text-cyan-400 cursor-pointer" />
        </Link>
        <Link href="https://www.github.com/t-creates">
          <FaGithub className="text-4xl logoBlue hover:text-cyan-400 cursor-pointer" />
        </Link>
      </div>

    </div>
  );
};

export default Hero;
