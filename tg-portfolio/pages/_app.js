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

const SITE_URL = 'https://travisg.tech';

const MyApp = ({ Component, pageProps }) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  const [showLoading, setShowLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const TITLE = 'Travis Geislinger | Full-Stack Developer';
  const DESCRIPTION = 'Portfolio of Travis Geislinger: JavaScript, C#, .NET, SQL, React/Next.js. See projects, clean code, and GitHub @t-creates.';

  useEffect(() => {
    fetch('https://travisg.tech')
      // fetch('http://localhost:3000/')
      // .then((response) => response.json())
      .then((siteData) => {
        // eslint-disable-next-line no-console
        console.log(siteData);
        setData(siteData);
        setFadeOut(true);
        setTimeout(() => {
          setShowLoading(false); // remove loader from DOM
        }, 700);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('error fetching data:', error);
        setFadeOut(true);
        setTimeout(() => {
          setShowLoading(false); // remove loader from DOM
        }, 700);
      });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.removeAttribute('data-aos-easing');
      body.removeAttribute('data-aos-delay');
      body.removeAttribute('data-aos-duration');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Travis Geislinger" />
        <meta name="theme-color" content="#15803D" />
        {/* eslint-disable-next-line react/no-invalid-html-attribute */}
        <link rel="me" href="https://github.com/t-creates" />
        <link rel="icon" href="/default-monochrome-white.svg" />
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      </Head>
      {showLoading ? (
        <div
          className={`flex justify-center items-center fixed inset-0 z-50 transition-opacity duration-700 
          ${fadeOut ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
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
