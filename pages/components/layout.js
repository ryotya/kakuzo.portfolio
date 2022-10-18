import Footer from "./footer";
import LogoSection from "./logoSection";

const layout = ({ children }) => {
  return (
    <div>
      <LogoSection />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
