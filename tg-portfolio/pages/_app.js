/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import Layout from '../components/layyout/Layout';

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  if (loading) {
    return <div className="md:mt-96  sm:mt-48 flex justify-center place-content-center"> <div className="loader w-full h-screen" /> </div>;
  }
  return (
    <Layout>
      {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
