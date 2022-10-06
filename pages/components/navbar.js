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
    <div className="mt-24">
      <div className="container-nav">
        <nav className="flex justify-end">
          <div className="flex items-center">
            <div>
              <Link href="#">
                <a className="text-lg font-light tracking-wider hover:text-gray-500 hover:border-b border-gray-500 duration-200">
                  Profile
                </a>
              </Link>
            </div>
            <div className="ml-12">
              <Link href="#">
                <a className="text-lg font-light tracking-wider hover:text-gray-500 hover:border-b border-gray-500 duration-200">
                  Works
                </a>
              </Link>
            </div>
            <div className="ml-12">
              <Link href="#">
                <a className="text-lg font-light tracking-wider hover:text-gray-500 hover:border-b border-gray-500 duration-200">
                  Contact
                </a>
              </Link>
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
