import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();
  const navLinks = [
    {
      id: 'Home',
      name: 'Home',
      link: '/',
      sectionId: 'home',
    },
    {
      id: 'Services',
      name: 'Services',
      link: '/#services',
      sectionId: 'services',
    },
    {
      id: 'Expertise',
      name: 'Expertise',
      link: '/#expertise',
      sectionId: 'expertise',
    },
    {
      id: 'Toolbox',
      name: 'Toolbox',
      link: '/#toolbox',
      sectionId: 'toolbox',
    },
    {
      id: 'Projects',
      name: 'Projects',
      link: '/#projects',
      sectionId: 'projects',
      /* link: '/works', */
    },
    {
      id: 'Contact',
      name: 'Contact',
      link: '/#contact',
      sectionId: 'contact',
    },
  ];

  function toggleMenu() {
    setOpen(!open);
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (router.pathname !== '/') {
      setActiveSection(router.pathname);
      return undefined;
    }

    const sectionIds = ['services', 'expertise', 'projects', 'toolbox', 'contact'];

    const updateActiveSection = () => {
      const navOffset = window.innerWidth < 768 ? 112 : 96;
      const scrollPosition = window.scrollY + navOffset;
      let currentSection = 'home';

      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        if (scrollPosition >= element.offsetTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [router.pathname]);

  const isNavItemActive = (navItem) => {
    if (router.pathname !== '/') {
      return router.pathname === navItem.link;
    }

    return activeSection === navItem.sectionId;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 w-full border-b border-black/10 bg-white/90 shadow-sm backdrop-blur md:sticky md:top-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
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
                  isNavItemActive(navItem) ? 'text-black' : 'text-gray-500 hover:text-black'
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
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      <div className={`md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <button
          type="button"
          aria-label="Close navigation menu"
          className={`fixed inset-0 top-[var(--nav-height-mobile)] z-30 bg-black/20 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <ul className={`absolute inset-x-0 top-full z-40 flex flex-col divide-y divide-black/5 border-b border-black/10 bg-white shadow-lg transition-all duration-300 ${open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}>
          {navLinks.map((navItem) => (
            <li key={navItem.id}>
              <Link
                href={navItem.link}
                className={`block px-6 py-4 text-base transition-colors ${isNavItemActive(navItem) ? 'bg-green-50 text-black' : 'text-black/80 hover:bg-green-50'}`}
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
