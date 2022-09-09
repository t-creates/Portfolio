import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="w-full h-full bg-hero">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
