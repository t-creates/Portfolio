/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '../styles/globals.css';
import Layout from '../components/layyout/Layout';

const SITE_URL = 'https://travisg.tech';
const OG_IMAGE = `${SITE_URL}/Travis%20Geislinger%20Software%20Developer.png`;

const MyApp = ({ Component, pageProps }) => {
  const [showLoading, setShowLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const TITLE = 'Travis Geislinger | Full-Stack Developer';
  const DESCRIPTION = 'Portfolio of Travis Geislinger: JavaScript, C#, .NET, SQL, React/Next.js. See projects, clean code, and GitHub @t-creates.';

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 150);

    const hideTimer = setTimeout(() => {
      setShowLoading(false);
    }, 700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const { documentElement } = document;
    if (documentElement) {
      documentElement.style.setProperty('scroll-behavior', 'smooth');
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Travis Geislinger" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Travis Geislinger software developer resume cover" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        {/* eslint-disable-next-line react/no-invalid-html-attribute */}
        <link rel="me" href="https://github.com/t-creates" />
        <link rel="icon" href="/default-monochrome-white.svg" />
      </Head>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" strategy="afterInteractive" />
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
          <SpeedInsights />
        </>
      )}
    </div>
  );
};

export default MyApp;
