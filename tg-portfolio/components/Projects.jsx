import React from 'react';
import Link from 'next/link';
import { v4 } from 'uuid';
import { urlFor } from '../utils/client';

const Projects = ({ projects: { image, name, badge, sourceCode, website, description, neww, slug } }) => (
  <div className="card lg:w-80 md:w-64 bg-neutral/50 md:mt-5 shadow-xl animate-in zoom-in spin-in-90 duration-1000 my-3">
    <div className="relative">
      <figure><img src={urlFor(image)} alt={name} /></figure>
    </div>
    <div className="card-body">
      <h2 className="card-title text-black ">
        {name}
        {neww ? <div className="badge badge-secondary">NEW</div> : null}
      </h2>
      <p className="text-black"> {description}</p>
      <Link href={website} key={v4}>
        <button
          type="button"
          className="btn  bg-green-700/90 text-black font-semibold hover:text-white hover:bg-black py-2 px-4 border-2
           border-none hover:border-transparent rounded"
        >View Project
        </button>
      </Link>
      <Link href={sourceCode} key={slug.current}>
        <button type="button" className="btn border-none text-black hover:text-white bg-emerald-900/100 ">View Code</button>
      </Link>
      <div className="card-actions justify-end">
        {badge.map((badges, i) => (
          <div className="badge badge-outline text-black/75" key={i}>{badges}</div>
        ))}
      </div>
    </div>
  </div>
);
export default Projects;
