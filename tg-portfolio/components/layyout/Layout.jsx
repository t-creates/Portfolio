import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className=" w-full h-full animate-none transition-none">
    <Navbar />
    <main className="2xl:mx-72 mx-0 animate-none transition-none">{children}</main>
    <Footer />
  </div>
);

export default Layout;
