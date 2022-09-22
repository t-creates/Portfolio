import React from 'react';
import Link from 'next/link';

const About = () => (
  <div className="mt-10 mx-24">
    <div className="p-6 rounded-lg bg-slate-700/80">
      <h1 className="navName text-4xl font-bold logoBlue pb-8 px-8 border-b-4">Me, Myself & I . . .</h1>
      <div>
        <p className="p-5">I am a Full Stack Developer located in Canada. I have a passion for creating software that
          can help make the lives of its users more enjoyable.
        </p>

        <p className="px-5"> I am well organized and focused on growth and development. Problem solving is a skill that I enjoy to cultivate daily.
          My interests include learning new technologies, spending time outdoors hiking mountains, practicing archery, fly fishing,
          and diving into the philosophies of life.
        </p>

        <p className="pt-5 px-5">Currently I am interested in creating intuitive and useful user experiences.
        </p>
        <Link href="/contact">
          <p className="text-blue-700 font-bold p-5">Want to work together?</p>
        </Link>
      </div>
    </div>
  </div>
);

export default About;
