import React, { useState } from 'react';
import { v4 } from 'uuid';
import { FaEye, FaGithub } from 'react-icons/fa';
import { urlFor } from '../../utils/client';

/*
Add design patterns used for project and data structures used.
link projects with expertise statements
Add multiple types
Add multiple tags
*/

const Project = ({ projects: { image, name, sourceCode, website, description, neww }, idx }) => {
  const [show, setShow] = useState(false);
  const delay = (idx % 6) * 75;

  return (
    <article
      data-aos="fade-up" // <- valid animation name
      data-aos-delay={String(delay)} // must be a string
      data-aos-duration="700"
    >
      <div
        className={`rounded-md flex flex-1 flex-col bg-neutral/30 md:mt-5 shadow-xl max-w-[400px] h-[375px]
     ${show ? 'relative' : ''}`}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <span className={`${show ? 'absolute inset-0 flex flex-col justify-center items-center z-20 backdrop-blur rounded-md' : 'hidden'}`}>
          <a href={website} key={v4} rel="noopener noreferrer" target="_blank">
            <button
              type="button"
              className="btn bg-green-700/90 text-white font-semibold hover:text-white hover:bg-black
           border-none rounded mb-10 w-48 test hover:border-solid hover:border-2 hover:border-green-700/90 items-center justify-center"
            >
              <FaEye className="text-3xl text-white cursor-pointer pr-2" /> Live
            </button>
          </a>
          <a href={sourceCode} rel="noopener noreferrer" target="_blank">
            <button
              type="button"
              className="btn w-48 border-none rounded text-white hover:text-white bg-green-700/90 test
            hover:border-solid hover:border-2 hover:border-green-700/90 items-center justify-center"
            >
              <FaGithub className="text-3xl text-white cursor-pointer pr-2" /> Source
            </button>
          </a>
        </span>
        <div className="relative w-full h-[233px]">
          <img src={urlFor(image)} alt={name} className="rounded-t-md object-fill h-[233px]" />
        </div>
        <div className="pt-3 px-3 flex flex-col justify-between h-[67px]">
          <h2 className="text-2xl flex flex-1 justify-between font-medium text-black aboutTitle">
            {name}
            {neww ? <div className="badge badge-secondary bg-green-700/90 text-xs border-none test">NEW</div> : null}
          </h2>
          <h3 className="pt-2 pb-5 font-medium text-green-700/90 text-base">{ }</h3>
          <p className="text-black/70 pb-3 test"> {description}</p>
          {/* <div className="h-fit flex items-center flex-wrap gap-1 justify-end p-2">
        {badge.map((badges, i) => (
          <div className="badge badge-outline text-black/75" key={i}>{badges}</div>
        ))}
      </div>
      */}
        </div>
      </div>
    </article>
  );
};

export default Project;
