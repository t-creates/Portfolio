import React from 'react';
import Link from 'next/link';

const About = () => (
  <div className="sm:p-2 md:p-6 animate-in slide-in-from-bottom-48 duration-1000">
    <h1 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-5">A Little About Me</h1>
    <div className="text-xl">
      <p className="pt-5 text-black/75 font-bold test">I am a Full Stack Developer located in Canada. I have a passion for creating software that
        can help make the lives of its users more enjoyable.
      </p>

      <p className="pt-5 text-black/75 font-bold test"> I am well organized and focused on growth and development. Problem solving is a skill that I enjoy to cultivate daily.
        My interests include learning new technologies, spending time outdoors hiking mountains, practicing archery, fly fishing,
        and diving into the philosophies of life.
      </p>

      <p className="pt-5 text-black/75 font-bold test">Currently I am interested in creating intuitive and useful user experiences.
      </p>
      <Link href="/contact">
        <p className="text-black aboutTitle text-2xl font-bold hover:cursor-pointer animate-pulse p-5">Want to work together?</p>
      </Link>
    </div>
  </div>
);

export default About;
