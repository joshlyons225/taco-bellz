import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

// create Navbar section function
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  return (
    <section
      name="navbar"
      className="w-full h-64 bg-gradient-to-b from-purple-800  to-red-200 sticky"
    >
      <div className="w-full grid grid-cols-2 flex-wrap justify-items-between p-2">
        <div className="invisible">
          {/* Navbar menu */}
          <ul className="flex md:visible py-4 text-2xl text-bold text-purple-900">
            <li>
              <Link to="home" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="throwdown" smooth={true} duration={500}>
                THROWDOWN
              </Link>
            </li>
          </ul>
        </div>

        {/* Login / Signup */}
        <div className="hidden md:flex justify-end items-center space-x-3 ">
          <button className="py-2 px-2 font-medium text-purple-900 hover:bg-purple-900 rounded hover:text-white transition duration-300">
            Log In
          </button>
          <button className="py-2 px-2 font-medium text-purple-900 hover:bg-purple-900 rounded hover:text-white transition duration-300">
            Sign Up
          </button>
        </div>
        {/* Nav burger */}
        <div onClick={clickHandler} className="md:invisible z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? "invisible"
              : "sticky top-0 left-0 w-full h-full flex flex-col"
          }
        >
          <li className="py-4 text-4xl text-purple-900">
            {" "}
            <Link onClick={clickHandler} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-4 text-4xl text-purple-900">
            {" "}
            <Link
              onClick={clickHandler}
              to="throwdown"
              smooth={true}
              duration={500}
            >
              Throwdown
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

// export Navbar section function
export default Navbar;
