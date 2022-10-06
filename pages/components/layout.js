import Navbar from "./navbar";
import Footer from "./footer";
import Skill from "./skill";
import Works from "./works";
import Profile from "./profile";
import LogoSection from "./logoSection";

const layout = ({ children }) => {
  return (
    <div>
      <LogoSection />
      <Navbar />
      <div>{children}</div>
      <div className="mt-32">
        <Skill />
      </div>
      <div className="mt-32">
        <Works />
      </div>
      <div className="mt-32">
        <Profile />
      </div>
      <Footer />
    </div>
  );
};

export default layout;
