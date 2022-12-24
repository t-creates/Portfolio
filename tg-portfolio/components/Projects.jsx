import React from 'react';
import { v4 } from 'uuid';
import { urlFor } from '../utils/client';

const Projects = ({ projects: { image, name, badge, sourceCode, website, description, neww } }) => (
  <div className="card 2xl:w-96 lg:w-72 md:w-64 bg-neutral/50 md:mt-5 shadow-xl animate-in zoom-in spin-in-90 duration-1000 my-3">
    <div className="relative">
      <figure><img src={urlFor(image)} alt={name} /></figure>
    </div>
    <div className="card-body">
      <h2 className="card-title text-black ">
        {name}
        {neww ? <div className="badge badge-secondary">NEW</div> : null}
      </h2>
      <p className="text-black"> {description}</p>
      <div className="card-actions justify-end">
        {badge.map((badges, i) => (
          <div className="badge badge-outline text-black/75" key={i}>{badges}</div>
        ))}
      </div>
      <a href={website} key={v4} rel="noopener noreferrer" target="_blank">
        <button
          type="button"
          className="btn w-full bg-green-700/90 text-black font-semibold hover:text-white hover:bg-black py-2 px-4 border-2
           border-none hover:border-transparent rounded"
        >View Project
        </button>
      </a>
      <a href={sourceCode} rel="noopener noreferrer" target="_blank">
        <button
          type="button"
          className="btn w-full border-none rounded text-black hover:text-white bg-emerald-900/100 "
        >View Code
        </button>
      </a>
    </div>
  </div>
);
export default Projects;
