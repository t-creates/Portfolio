import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    {
      id: 'nav-link-0',
      name: 'Home',
      link: '/',
      listId: 'nav-list-0',
    },
    {
      id: 'nav-link-1',
      name: 'About',
      link: '/about',
      listId: 'nav-list-1',
    },
    {
      id: 'nav-link-2',
      name: 'Skills',
      link: '/skills',
      listId: 'nav-list-2',
    },
    {
      id: 'nav-link-3',
      name: 'Works',
      link: '/works',
      listId: 'nav-list-3',
    },
    {
      id: 'nav-link-4',
      name: 'Contact',
      link: '/contact',
      listId: 'nav-list-4',
    },
  ];

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    // Navbar
    <nav className=" bg-transparent shadow-xl">
      <div className="max-w-10xl mx-auto lg:px-48 md:px-16">
        <div className="flex justify-between">
          <div className="flex lg:space-x-7" />
          <div className="hidden md:flex items-center space-x-11">
            {navLinks.map((navItem) => (
              <Link href={navItem.link} key={navItem.id}>
                <p className="cursor-pointer py-4 px-2  font-semibold
              hover:animate-pulse hover:text-black text-green-700/95 navName"
                >{navItem.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center bg-green-800/90 w-full flex-row justify-between fixed">
          <button onClick={toggleMenu} type="button"> <HiMenu className="h-8 w-8 text-white" /> </button>
          <div style={{ display: open ? 'block' : 'none' }}>
            <ul className="">
              <div className="flex flex-auto flex-row mr-5 gap-1">
                {navLinks.map((navItem) => (
                  <div>
                    <Link href={navItem.link} key={navItem.id}>
                      <button type="button">
                        <li
                          key={navItem.listId}
                          className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                        >
                          {navItem.name}
                        </li>
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
