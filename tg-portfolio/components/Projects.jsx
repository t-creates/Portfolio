import React, { useState } from 'react';
import { v4 } from 'uuid';
import { urlFor } from '../utils/client';

const Projects = ({ projects: { image, name, badge, sourceCode, website, description, neww } }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`rounded-md flex flex-1 flex-col bg-neutral/30 md:mt-5 shadow-xl
    animate-in zoom-in spin-in-90 duration-1000 ${show ? 'relative' : ''}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className={`${show ? 'absolute inset-0 flex flex-col justify-center items-center z-20 backdrop-blur rounded-md' : 'hidden'}`}>
        <a href={website} key={v4} rel="noopener noreferrer" target="_blank">
          <button
            type="button"
            className="btn bg-green-700/90 text-black font-semibold hover:text-white hover:bg-black py-2 px-4 border-2
           border-none hover:border-transparent rounded mb-10 w-48"
          >View Project
          </button>
        </a>
        <a href={sourceCode} rel="noopener noreferrer" target="_blank">
          <button
            type="button"
            className="btn w-48 border-none rounded text-black hover:text-white bg-green-700/90"
          >View Code
          </button>
        </a>
      </span>
      <div className="relative">
        <img src={urlFor(image)} alt={name} className="rounded-t-md object-fit" />
      </div>
      <div className="pt-5 px-2">
        <h2 className="text-lg flex flex-1 justify-between font-medium text-black">
          {name}
          {neww ? <div className="badge badge-secondary bg-green-700/90 border-none">NEW</div> : null}
        </h2>
        <p className="text-black/70 pb-3"> {description}</p>
        {/* <div className="h-fit flex items-center flex-wrap gap-1 justify-end p-2">
        {badge.map((badges, i) => (
          <div className="badge badge-outline text-black/75" key={i}>{badges}</div>
        ))}
      </div>
      */}
      </div>
    </div>
  );
};

export default Projects;
