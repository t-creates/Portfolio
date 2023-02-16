import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="bg-cover bg-no-repeat w-full h-full bg-[#f9fafe]">
    <Navbar />
    <main className="2xl:mx-72 mx-0">{children}</main>
    <Footer />
  </div>
);

export default Layout;
