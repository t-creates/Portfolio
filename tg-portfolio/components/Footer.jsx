import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  console.log('Footer');
  return (
    <div>
      <footer className="p-5">
        <div className="lg:px-40">
          <hr className="border-4 logoBlue rounded-full" />
        </div>
        <div className="flex justify-center items-center space-x-10 p-5">
          <Link href="https://www.linkedin.com/in/travis-geislinger-889b81188/">
            <FaLinkedin className="text-4xl logoBlue hover:text-cyan-400 cursor-pointer hover:animate-pulse" />
          </Link>
          <Link href="https://www.github.com/t-creates">
            <FaGithub className="text-4xl logoBlue hover:text-cyan-400 cursor-pointer hover:animate-pulse" />
          </Link>
          <Link href="/contact">
            <p className="font-bold hover:text-cyan-400 cursor-pointer hidden md:flex hover:animate-pulse">CONTACT</p>
          </Link>
          <p className="font-extrabold hidden md:flex"> | | </p>
          <Link href="/">
            <div className="text-xl font-extrabold items-center py-4 px-2 hidden md:flex">
              <img
                src="/default.png"
                alt="Travis Geislinger"
                className="h-14 w-14 mr-2 rounded-full cursor-pointer hover:animate-pulse"
              />
            </div>
          </Link>
          <Link href="/about">
            <h3 className="font-bold hover:text-cyan-400 cursor-pointer hidden md:flex hover:animate-pulse">Travis Geislinger</h3>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
