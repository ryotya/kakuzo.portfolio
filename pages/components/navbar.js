import { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import Head from "next/head";

export default function Navbar() {
  const [darkTheme, setDarkTheme] = useState("");

  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  return (
    <div className="mt-8">
      <div className="container-nav">
        <nav className="flex justify-end">
          <div className="flex items-center">
            <div>
              <Scroll
                className="text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer"
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
                className="text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer"
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
                className="text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer"
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
                className="text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer"
                to="contact"
                smooth={true}
                offset={-50}
                duration={900}
              >
                Contact
              </Scroll>
            </div>
            <form action="#" className="ml-12">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkTheme}
                  onChange={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}
