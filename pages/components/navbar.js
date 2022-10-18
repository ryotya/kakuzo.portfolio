import { Link as Scroll } from "react-scroll";

const navbar = () => {
  return (
    <div className="mt-0 spc:mt-8">
      <div className="container-nav">
        <nav className="flex justify-center tab:justify-end mr-6">
          <div className="flex items-center">
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
            </div>
            <div className="ml-12">
              <Scroll
                className="tab:text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer"
                to="skills"
                smooth={true}
                offset={-100}
                duration={900}
              >
                Skills
              </Scroll>
            </div>
            <div className="ml-12">
              <Scroll
                className="tab:text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer"
                to="works"
                smooth={true}
                offset={-50}
                duration={900}
              >
                Works
              </Scroll>
            </div>
            <div className="ml-12">
              <Scroll
                className="tab:text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer"
                to="contact"
                smooth={true}
                offset={-50}
                duration={900}
              >
                Contact
              </Scroll>
            </div>
            {/* <form action="#" className="ml-12 hidden tab:block">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkTheme}
                  onChange={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </form> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default navbar;
