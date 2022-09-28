import Navbar from "./navbar";
import Footer from "./footer";
import Skill from "./skill";
import LogoSection from "./logoSection";

const layout = ({ children }) => {
  return (
    <div>
      <LogoSection />
      <Navbar />
      <div>{children}</div>
      <div className="mt-24">
        <Skill />
      </div>
      <Footer />
    </div>
  );
};

export default layout;
