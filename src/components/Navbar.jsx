import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

// create Navbar section function
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  return (
    <section name="navbar" className="w-full h-full bg-teal-200">
      <div className="w-full flex flex-column p-2">
        {/* Nav burger */}
        <div onClick={clickHandler} className="hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? "invisible"
              : "absolute top-0 left-0 w-full h-screen flex flex-col"
          }
        >
          <li className="py-4 text-4xl text-purple-900">
            {" "}
            <Link onClick={clickHandler} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
        </ul>

        {/* Navbar menu */}
        <ul className="hidden md:flex py-4 text-2xl text-bold text-purple-900">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

// export Navbar section function
export default Navbar;
