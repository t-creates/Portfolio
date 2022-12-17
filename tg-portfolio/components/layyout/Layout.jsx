import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className=" bg-cover bg-no-repeat bg-slate-200">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
