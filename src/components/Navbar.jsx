import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

// create Navbar section function
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  return (
    <section
      name='navbar'
      className='w-full h-64 bg-gradient-to-b from-purple-800  to-red-200 sticky'
    >
      <div className='w-full grid grid-cols-2 flex-wrap justify-items-between p-2'>
        <div className='invisible'>
          {/* Navbar menu */}
          <ul className='flex md:visible py-4 text-2xl text-bold text-purple-900'>
            <li className='nav'>
              <Link to='home' smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li className='nav'>
              <Link to='throwdown' smooth={true} duration={500}>
                THROWDOWN
              </Link>
            </li>
          </ul>
        </div>

        {/* Login / Signup */}
        <div className='hidden md:flex justify-end items-center space-x-3 mr-3'>
          <button className='nav'>LOG IN</button>
          <button className='nav'>SIGN UP</button>
        </div>
        {/* Nav burger */}
        <div onClick={clickHandler} className='md:invisible z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? 'invisible'
              : 'absolute top-0 w-full h-full flex flex-col inset-x-0 justify-content-center'
          }
        >
          <li className='text-center py-2 text-xl text-purple-900'>
            {' '}
            <Link onClick={clickHandler} to='home' smooth={true} duration={500}>
              Home
            </Link>
            <hr className='background-color-white'></hr>
          </li>
          <li className='text-center py-2 text-xl text-purple-900'>
            {' '}
            <Link
              onClick={clickHandler}
              to='throwdown'
              smooth={true}
              duration={500}
            >
              Throwdown
            </Link>
            <hr className='background-color-white'></hr>
          </li>
          <li className='text-center py-2 text-xl text-purple-900'>
            {' '}
            <Link onClick={clickHandler} to='#' smooth={true} duration={500}>
              Log In or Log Out
            </Link>
            <hr className='background-color-white'></hr>
          </li>
        </ul>
      </div>
    </section>
  );
};

// export Navbar section function
export default Navbar;
