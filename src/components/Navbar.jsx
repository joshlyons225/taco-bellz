import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

// create Navbar section function
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  return (
    <section name="navbar" className="w-full h-auto">
      <div className="w-full flex flex-column p-4">
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
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={clickHandler} to="home" smooth={true} duration={500}>
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
