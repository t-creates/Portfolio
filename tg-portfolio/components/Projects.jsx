import React from 'react';
import Image from 'next/image';
// import { urlFor } from '../utils/client';
import projectData from '../utils/projectData';

const Projects = () => {
// const projectImage = urlFor(projects.image && projects[0].image).url;
  const projects = projectData;
  return (
    <div className="mt-10 mx-24">
      <div className="p-6 rounded-lg bg-slate-700/70">
        <h1 className="navName text-4xl font-bold logoBlue pb-8 px-8 border-b-4">Projects</h1>
        <div className="flex flex-wrap justify-between overflow-auto gap-16 p-11">
          {projects.map((project) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="relative">
                <figure><Image src={project.image} alt={project.name} /></figure>
              </div>
              <div className="card-body">
                <h2 className="card-title">
                  {project.name}
                  {project.new ? <div className="badge badge-secondary">NEW</div> : null}
                </h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  {project.badge.map((badge) => (
                    <div className="badge badge-outline">{badge}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
