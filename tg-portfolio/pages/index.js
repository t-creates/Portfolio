import Head from 'next/head';
import { Hero, Testimonials } from '../components';

const Home = () => {
  console.log('Home');
  return (
    <div className="">
      <Head>
        <title>Travis Geislinger</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/default-monochrome-white.svg" />
      </Head>
      <Hero />
      <Testimonials />
    </div>
  );
};

export default Home;
