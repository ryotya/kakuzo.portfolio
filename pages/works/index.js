import NavbarWorks from "./navbar-works";
import KarufukaCorp from "./karufukaCorp";
import Tetora from "./tetora";
import LifeNet from "./lifenet";
import Autoku from "./autoku";
import Wizhr from "./wizhr";
import Samurai from "./samurai";

const worksIndex = () => {
  return (
    <div>
      <NavbarWorks />
      <LifeNet />
      <div className="border-b w-1/3 mx-auto mt-24"></div>
      <KarufukaCorp />
      <div className="border-b w-1/3 mx-auto mt-24"></div>
      <Tetora />
      <div className="border-b w-1/3 mx-auto mt-24"></div>
      <Autoku />
      <div className="border-b w-1/3 mx-auto mt-24"></div>
      <Wizhr />
      <div className="border-b w-1/3 mx-auto mt-24"></div>
      <Samurai />
      <div className="border-b w-1/3 mx-auto mt-24"></div>
    </div>
  );
};

export default worksIndex;
