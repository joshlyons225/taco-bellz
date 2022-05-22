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
          <ul className='flex md:visible py-4 ml-4 text-2xl text-bold divide-x'>
            <li className='nav'>
              <Link to='home' smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li className='nav'>
              <Link to='champ' smooth={true} duration={500}>
                CHAMP
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
        <ul className='hidden md:flex justify-end items-center space-x-3 mr-3'>
          <li className='nav'>
            <Link to='#' smooth={true} duration={500}>
              LOG IN | SIGN UP
            </Link>
          </li>
        </ul>

        {/* <div className='hidden md:flex justify-end items-center space-x-3 mr-3'>
          <button className='nav'>LOG IN</button>
          <button className='nav'>SIGN UP</button>
        </div> */}
        {/* Nav burger */}
        <div onClick={clickHandler} className='md:invisible z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? 'invisible'
              : 'absolute top-0 w-full h-full flex flex-col inset-x-0 justify-content-center divide-y'
          }
        >
          <li className='py-2 text-xl nav2 text-center'>
            {' '}
            <Link onClick={clickHandler} to='home' smooth={true} duration={500}>
              HOME
            </Link>
          </li>
          <li className='py-2 text-xl nav2 text-center'>
            {' '}
            <Link
              onClick={clickHandler}
              to='throwdown'
              smooth={true}
              duration={500}
            >
              CHAMP
            </Link>
          </li>
          <li className='py-2 text-xl nav2 text-center'>
            {' '}
            <Link
              onClick={clickHandler}
              to='champ'
              smooth={true}
              duration={500}
            >
              THROWDOWN
            </Link>
          </li>
          <li className='py-2 text-xl nav2 text-center'>
            {' '}
            <Link onClick={clickHandler} to='#' smooth={true} duration={500}>
              LOG IN/SIGNUP OR LOG OUT
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

// export Navbar section function
export default Navbar;
