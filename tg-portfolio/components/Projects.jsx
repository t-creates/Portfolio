import React from 'react';
import Link from 'next/link';
import { v4 } from 'uuid';
import { urlFor } from '../utils/client';

const Projects = ({ projects: { image, name, badge, sourceCode, website, description, neww, slug } }) => (
  <div className="card w-96 bg-base-100 bg-slate-600/75 shadow-xl animate-in zoom-in spin-in-90 duration-1000">
    <div className="relative">
      <figure><img src={urlFor(image)} alt={name} /></figure>
    </div>
    <div className="card-body">
      <h2 className="card-title">
        {name}
        {neww ? <div className="badge badge-secondary">NEW</div> : null}
      </h2>
      <p>{description}</p>
      <Link href={website} key={v4}>
        <button type="button" className="btn border-none text-black hover:text-white bg-cyan-400/75">View Project</button>
      </Link>
      <Link href={sourceCode} key={slug.current}>
        <button type="button" className="btn border-none text-black hover:text-white bg-blue-700 ">View Code</button>
      </Link>
      <div className="card-actions justify-end">
        {badge.map((badges, i) => (
          <div className="badge badge-outline" key={i}>{badges}</div>
        ))}
      </div>
    </div>
  </div>
);
export default Projects;
