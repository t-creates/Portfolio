import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Toolbox', href: '/#toolbox' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

const Footer = () => (
  <footer className="mt-20 border-t border-black/10 bg-white">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-black/60">Travis Geislinger</p>
        <h4 className="text-2xl font-semibold text-black">Building reliable software with care.</h4>
        <p className="text-sm text-black/60">©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Travis Geislinger. All rights reserved.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-black/70">
        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            <span className="cursor-pointer hover:text-black">{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/travis-geislinger-889b81188/" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 p-3 text-2xl text-black hover:bg-black hover:text-white transition">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/t-creates" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 p-3 text-2xl text-black hover:bg-black hover:text-white transition">
          <FaGithub />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
