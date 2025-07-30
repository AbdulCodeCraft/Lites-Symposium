import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
