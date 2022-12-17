/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import Layout from '../components/layyout/Layout';

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://travisg.tech')
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      {!isLoading ? (
        <Layout>
          {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      ) : (
        <div className="md:mt-96  sm:mt-48 flex justify-center place-content-center">
          <div className="loader w-full h-screen" />
        </div>
      )}
    </div>
  );
};

export default MyApp;
