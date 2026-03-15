import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const navLinks = [
    {
      id: 'Home',
      name: 'Home',
      link: '/',
    },
    {
      id: 'Expertise',
      name: 'Expertise',
      link: '/#expertise',
    },
    {
      id: 'Toolbox',
      name: 'Toolbox',
      link: '/#toolbox',
    },
    {
      id: 'Projects',
      name: 'Projects',
      link: '/#projects',
      /* link: '/works', */
    },
    {
      id: 'Contact',
      name: 'Contact',
      link: '/contact',
    },
  ];

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <nav className="w-full sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/10 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <a href="/" className="flex items-center gap-2">
          <Image src="/default-monochrome-black.svg" alt="Software Engineer" width={64} height={64} className="hover:opacity-80 transition" />
          <span className="hidden md:block text-sm uppercase tracking-[0.3em] text-black/60">Travis Geislinger</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((navItem) => (
            <Link
              href={navItem.link}
              key={navItem.id}
            >
              <span
                className={`aboutTitle cursor-pointer py-2 text-lg transition-colors ${
                  router.pathname === navItem.link ? 'text-black' : 'text-gray-500 hover:text-black'
                }`}
              >
                {navItem.name}
              </span>
            </Link>
          ))}
          <a
            href="/travisGeislingerResume.pdf"
            className="rounded-full border border-black/10 bg-black text-white px-5 py-2 text-sm font-semibold hover:bg-green-700/90 transition"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-full border border-black/10 p-2 text-black"
        >
          <HiMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 shadow-lg transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex h-[var(--nav-height-mobile)] items-center justify-between px-4">
          <a href="/">
            <Image src="/default-monochrome-black.svg" alt="Software Engineer" width={50} height={50} />
          </a>
          <button type="button" onClick={toggleMenu}>
            <HiMenu className="h-7 w-7 text-black" />
          </button>
        </div>
        <ul className="flex flex-col divide-y divide-black/5">
          {navLinks.map((navItem) => (
            <li key={navItem.id}>
              <Link
                href={navItem.link}
                className="block px-6 py-4 text-base text-black/80 hover:bg-green-50"
                onClick={() => setOpen(false)}
              >
                {navItem.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/travisGeislingerResume.pdf"
              className="block px-6 py-4 text-base font-semibold text-green-700"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
