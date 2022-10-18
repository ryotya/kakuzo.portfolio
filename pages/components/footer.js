import { Link as Scroll } from "react-scroll";

const footer = () => {
  return (
    <div className="h-16">
      <div className="flex justify-center tab:justify-between container-foo">
        <div>
          <Scroll
            className="tab:text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer"
            to="profile"
            smooth={true}
            offset={-100}
            duration={900}
          >
            Profile
          </Scroll>
          <Scroll
            className="tab:text-lg tracking-wider  ml-6 font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer"
            to="skills"
            smooth={true}
            offset={-100}
            duration={900}
          >
            Skills
          </Scroll>
          <Scroll
            className="tab:text-lg tracking-wider ml-6 font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer"
            to="works"
            smooth={true}
            offset={-50}
            duration={900}
          >
            Works
          </Scroll>
          <Scroll
            className="tab:text-lg tracking-wider ml-6 font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer"
            to="contact"
            smooth={true}
            offset={-50}
            duration={900}
          >
            Contact
          </Scroll>
        </div>
        <div>
          <p className="font-light hidden tab:flex ">
            ©︎ kakuzo All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
