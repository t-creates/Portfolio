/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
