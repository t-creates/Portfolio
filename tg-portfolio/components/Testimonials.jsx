import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { urlFor } from '../utils/client';

const TestClients = ({ clients }) => {
  const clientsImage0 = urlFor(clients[0].image).url();
  const clientsImage1 = urlFor(clients[1].image).url();
  const clientsImage2 = urlFor(clients[2].image).url();
  return (
    <div>
      <div className="flex justify-center items-center mb-5">
        <h1 className="cursor-pointer py-4 px-2 border-b-4 logoBlue font-semibold
              hover:animate-pulse hover:text-cyan-400 text-cyan-400 navName text-6xl"
        >Testimonials
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="carousel carousel-center p-10 space-x-10 bg-neutral rounded-box max-w-8xl animate-in  snap-x snap-madatory overflow-x-auto scroll-smooth">
          <div className="card w-96 bg-slate-700/70 shadow-xl rounded-xl carousel-item  snap-center">
            <figure className="px-10 pt-10">
              <img src={`${clientsImage0}`} alt="Client" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center p-5">
              <h2 className="card-title font-extrabold">{clients[0].name}</h2>
              <h3 className="card-title font-semibold">{clients[0].company}</h3>
              <p>{clients[0].bio.length > 111 ? `${clients[0].bio.substring(0, 111)}...` : clients[0].bio}</p>
              <div className="card-actions flex flex-row gap-1 justify-center items-center mt-2">
                <BsStarHalf /><BsStar /><BsStar /><BsStar /><BsStar />
              </div>
            </div>
          </div>
          <div className="card w-96 bg-slate-700/70 shadow-xl rounded-xl carousel-item">
            <figure className="px-10 pt-10">
              <img src={`${clientsImage1}`} alt="Client" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center p-5">
              <h2 className="card-title font-extrabold">{clients[1].name}</h2>
              <h3 className="card-title font-semibold">{clients[1].company}</h3>
              <p>{clients[1].bio.length > 111 ? `${clients[1].bio.substring(0, 111)}...` : clients[1].bio}</p>
              <div className=" flex flex-row gap-1 justify-center items-center mt-2">
                <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStar />
              </div>
            </div>
          </div>
          <div className="card w-96 bg-slate-700/70 shadow-xl rounded-xl carousel-item">
            <figure className="px-10 pt-10">
              <img src={`${clientsImage2}`} alt="Client" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center p-5">
              <h2 className="card-title font-extrabold">{clients[2].name}</h2>
              <h3 className="card-title font-semibold">{clients[2].company}</h3>
              <p>{clients[2].bio.length > 99 ? `${clients[2].bio.substring(0, 111)}...` : clients[2].bio}</p>
              <div className="card-actions flex flex-row gap-1 justify-center items-center mt-2">
                <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestClients;
