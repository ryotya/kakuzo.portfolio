import { useState, useEffect } from "react";
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
        <nav className="flex justify-center tab:justify-end mr-6">
          <div className="flex items-center">
            <div>
              <Link href="/#profile">
                <a className="tab:text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer">
                  Profile
                </a>
              </Link>
            </div>
            <div className="ml-12">
              <Link href="/#skills">
                <a className="tab:text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer">
                  Skills
                </a>
              </Link>
            </div>
            <div className="ml-12">
              <Link href="/#works">
                <a className="tab:text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer">
                  Works
                </a>
              </Link>
            </div>
            <div className="ml-12">
              <Link href="/#contact">
                <a className="tab:text-lg tracking-wider font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200 hover:cursor-pointer">
                  Contact
                </a>
              </Link>
            </div>
            <form action="#" className="ml-12 hidden tab:block">
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
