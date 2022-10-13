import Navbar from "./navbar";
import Footer from "./footer";
import LogoSection from "./logoSection";

const layout = ({ children }) => {
  return (
    <div>
      <LogoSection />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
