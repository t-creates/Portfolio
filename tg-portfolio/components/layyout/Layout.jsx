import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className=" w-full h-full animate-none transition-none">
    <Navbar />
    <main className="w-full animate-none pt-[var(--nav-height-mobile)] md:pt-0 transition-none">{children}</main>
    <Footer />
  </div>
);

export default Layout;
