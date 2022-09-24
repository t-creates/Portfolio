import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className=" bg-cover bg-no-repeat bg-hero">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
