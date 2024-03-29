import React from 'react';
import { urlFor } from '../../utils/client';

const TestClients = ({ clients: { image, name, bio, company } }) => (
  <div>
    {/* Client Testimonials */}
    <div className="card lg:w-96 md:w-80 sm:w-64 bg-neutral/50 shadow-2xl rounded-xl animate-in slide-in-from-left delay-1000 duration-1000">
      <figure className="px-10 pt-10">
        <img src={urlFor(image)} alt="Client" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center p-5">
        <h2 className="card-title text-white font-extrabold">{name}</h2>
        <h3 className="card-title text-white font-semibold">{company}</h3>
        <p className="text-white">{bio.length > 111 ? `${bio.substring(0, 111)}...` : bio}</p>
        <div className="card-actions flex flex-row gap-1 justify-center items-center mt-2" />
      </div>
    </div>
  </div>
);

export default TestClients;
