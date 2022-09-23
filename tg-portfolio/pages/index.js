import React from 'react';
import Head from 'next/head';
import { Hero, Testimonials } from '../components';
import { client } from '../utils/client';

const Home = ({ hero, clientsTest }) => (
  <div className="">
    <Head>
      <title>Travis Geislinger</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/default-monochrome-white.svg" />
    </Head>
    <Hero hero={hero} />
    {/* Client Testimonials */}
    <div className="mt-10 md:mx-24 sm:mx-5">
        <h1 className="navName text-black text-4xl font-bold border-green-700/100 pb-8 px-8 border-b-4">Testimonials</h1>
        <div className="flex justify-center items-center">
          <div className="carousel carousel-center p-10 space-x-10  rounded-box max-w-8xl overflow-x-auto">
            {clientsTest?.map((clientTest) => <Testimonials key={clientTest._id} clients={clientTest} />)}
          </div>
        </div>
      </div>
    </div>

);

// Data Fetching
export const getServerSideProps = async () => {
  // Hero Query
  const heroQuery = '*[_type == "hero"]';
  const hero = await client.fetch(heroQuery);

  // Testimonials Query
  const clientsQuery = '*[_type == "testimonials"]';
  const clientsTest = await client.fetch(clientsQuery);

  return {
    props: {
      hero,
      clientsTest,
    },
  };
};

export default Home;
