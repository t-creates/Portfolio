import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    {
      id: 'nav-link-0',
      name: 'Home',
      link: '/',
    },
    {
      id: 'nav-link-1',
      name: 'Skills',
      link: '/skills',
    },
    {
      id: 'nav-link-2',
      name: 'Works',
      link: '/works',
    },
    {
      id: 'nav-link-3',
      name: 'Contact',
      link: '/contact',
    },
  ];

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    // Navbar
    <nav className="w-full bg-[#fff]">
      <div className="mx-auto lg:px-48 md:px-16 border-b-[1px]">
        <div className="md:flex justify-between sm:hidden">
          <div className="md:flex items-center sm:hidden">
            <Link href="/">
              <Image src="/default-monochrome-black.svg" width={75} height={75} className="hover:cursor-pointer" />
            </Link>
          </div>
          <div className="flex lg:space-x-7" />
          <div className="md:flex items-center space-x-11">
            {/* Logo */}
            {navLinks.map((navItem) => (
              <Link href={navItem.link} key={navItem.id}>
                <p className="cursor-pointer py-4 px-2 lg:text-xl  font-semibold
              hover:animate-pulse hover:text-black text-black/80 test"
                >{navItem.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden fixed z-50 w-full border-b-[1px] text-black bg-[#fff]">
          <div className="flex flex-1 justify-between px-5">
            <button onClick={toggleMenu} type="button"> <HiMenu className="h-8 w-8 text-black" /> </button>
            <Link href="/">
              <Image src="/default-monochrome-black.svg" width={50} height={50} />
            </Link>
          </div>
          <ul className="" style={{ display: open ? 'flex' : 'none' }}>
            <div className="flex flex-1 justify-around">
              {navLinks.map((navItem) => (
                <Link href={navItem.link} key={navItem.id}>
                  <button type="button">
                    <li
                      className="block test text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                    >
                      {navItem.name}
                    </li>
                  </button>
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
