import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  // const btn = document.querySelector('button.mobile-menu-button');
  // const menu = document.querySelector('.mobile-menu');
  const navLinks = [
    {
      id: 'nav-link-0',
      name: 'Home',
      link: '/',
    },
    {
      id: 'nav-link-1',
      name: 'About',
      link: '/about',
    },
    {
      id: 'nav-link-2',
      name: 'Skills',
      link: '/skills',
    },
    {
      id: 'nav-link-3',
      name: 'Works',
      link: '/works',
    },
    {
      id: 'nav-link-4',
      name: 'Contact',
      link: '/contact',
    },
  ];
  return (
    // Navbar
    <nav className=" bg-transparent shadow-2xl">
      <div className="max-w-10xl mx-auto lg:px-48 md:px-16">
        <div className="flex justify-between">
          <div className="flex lg:space-x-7">
            <div />
            {/* Website Logo or Title */}
            <Link href="/">
              <div className="text-xl font-extrabold flex items-center py-4 px-2">
                <img src="/default.png" alt="Travis Geislinger" className="md:h-28 md:w-28 sm:h-16 sm:w-16 mr-2 rounded-full cursor-pointer hover:animate-pulse" />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-11">
            {navLinks.map((navItem) => (
              <Link href={navItem.link} key={navItem.id}>
                <p className="cursor-pointer py-4 px-2 border-b-4 logoBlue font-semibold
              hover:animate-pulse hover:text-cyan-400 text-cyan-400 navName"
                >{navItem.name}
                </p>
              </Link>
            ))}
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
          {navLinks.map((navItem) => (
            <Link href={navItem.link} key={navItem.id}>
              <button type="button">
                <li className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">{navItem.name}</li>
              </button>
            </Link>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
