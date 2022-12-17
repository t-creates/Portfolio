import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => (
  <div>
    <footer className="p-5 pt-10">
      <div className="lg:px-40">
        <hr className="border-4 border-green-700/100 rounded-full" />
      </div>
      <div className="flex justify-center items-center space-x-10 p-5">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/travis-geislinger-889b81188/">
          <button type="button">
            <FaLinkedin className="text-4xl text-black hover:text-green-700/100 cursor-pointer hover:animate-pulse" />
          </button>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.github.com/t-creates">
          <button type="button">
            <FaGithub className="text-4xl text-black hover:text-green-700/100 cursor-pointer hover:animate-pulse" />
          </button>
        </a>
        <Link href="/contact">
          <p className="font-bold text-black hover:text-green-700/100 cursor-pointer hidden md:flex hover:animate-pulse">CONTACT</p>
        </Link>
        <p className="font-extrabold hidden md:flex text-black"> | | </p>
        <Link href="/about">
          <h3 className="font-bold text-black hover:text-green-700/100 cursor-pointer hidden md:flex hover:animate-pulse">Travis Geislinger</h3>
        </Link>
      </div>
    </footer>
  </div>
);

export default Footer;
