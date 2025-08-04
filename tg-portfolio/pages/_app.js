/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import '../styles/globals.css';
import Layout from '../components/layyout/Layout';

const MyApp = ({ Component, pageProps }) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    fetch('https://travisg.tech')
      // fetch('http://localhost:3000/')
      // .then((response) => response.json())
      .then((siteData) => {
        setData(siteData);
        setShowLoading(false);
      })
      .catch((error) => {
        console.error('error fetching data:', error);
        setShowLoading(false);
      });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Head>
        <title>Travis Geislinger</title>
        <meta
          name="description"
          content="Discover my software development portfolio, showcasing my expertise in coding, web development, software engineering, and programming.
        Explore my projects and examples of code I've written in various programming languages and technologies.
        As a skilled software developer, I'm passionate about creating clean, efficient code and building innovative solutions to complex problems.
        Take a closer look at my portfolio and see how my experience and skills can benefit your next project or company."
          key="title"
        />
        <link rel="icon" href="/default-monochrome-white.svg" />
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      </Head>
      {showLoading ? (
        <div className="md:mt-96  sm:mt-48 flex justify-center">
          {/* <div className="loader w-full h-screen" /> */}
          <div className="lds-roller"><div /><div /><div /><div /><div /><div /><div /><div /></div>
        </div>
      ) : (
        <>
          <Layout>
            {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Layout>
          <Analytics
            beforeSend={(event) => {
              // Ignore all events that have a `/private` inside the URL
              if (event.url.includes('/private')) {
                return null;
              }
              return event;
            }}
          />
        </>
      )}
      <script src="bower_components/aos/dist/aos.js" />
    </div>
  );
};

export default MyApp;
