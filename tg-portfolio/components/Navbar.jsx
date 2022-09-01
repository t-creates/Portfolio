import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  console.log('Navbar');
  // const btn = document.querySelector('button.mobile-menu-button');
  // const menu = document.querySelector('.mobile-menu');
  return (
    // Navbar
    <nav className=" bg-cyan-400/75 shadow-lg">
      <div className="max-w-10xl mx-auto px-48 md:px-16">
        <div className="flex justify-between">
          <div className="flex lg:space-x-7">
            <div />
            {/* Website Logo or Title */}
            <Link href="/">
              <div className="text-xl font-extrabold flex items-center py-4 px-2">
                <h1 className=""><span className="hover:text-zinc-500 cursor-pointer hover:animate-pulse">Travis Geislinger </span>
                </h1>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-11">
            <Link href="/">
              <p className="cursor-pointer py-4 px-2 border-b-4 border-zinc-500 font-semibold
              hover:animate-pulse hover:text-zinc-800 navName"
              >About
              </p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer py-4 px-2 border-b-4 border-zinc-500 font-semibold
              hover:animate-pulse hover:text-zinc-800 navName"
              >Services
              </p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer py-4 px-2 border-b-4 border-zinc-500 font-semibold
              hover:animate-pulse hover:text-zinc-800 navName"
              >Porfolio
              </p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer py-4 px-2 border-b-4 border-zinc-500 font-semibold
              hover:animate-pulse hover:text-zinc-800 navName"
              >Contact
              </p>
            </Link>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          button
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
          <li><Link href="/services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</Link></li>
          <li><Link href="/about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</Link></li>
          <li><Link href="/portfolio" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</Link></li>
          <li><Link href="/contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</Link></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
