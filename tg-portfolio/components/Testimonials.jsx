import React from 'react';
import { urlFor } from '../utils/client';

const TestClients = ({ clients: { image, name, bio, company } }) => (
  <div>
    {/* Client Testimonials */}
    <div className="card w-96 bg-slate-700/70 shadow-xl rounded-xl animate-in slide-in-from-left delay-1000 duration-1000">
      <figure className="px-10 pt-10">
        <img src={urlFor(image)} alt="Client" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center p-5">
        <h2 className="card-title font-extrabold">{name}</h2>
        <h3 className="card-title font-semibold">{company}</h3>
        <p>{bio.length > 111 ? `${bio.substring(0, 111)}...` : bio}</p>
        <div className="card-actions flex flex-row gap-1 justify-center items-center mt-2" />
      </div>
    </div>
  </div>
);

export default TestClients;
