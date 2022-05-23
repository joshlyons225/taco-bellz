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
<<<<<<< HEAD
      className='w-full h-24 bg-gradient-to-t from-rose-600  to-fuchsia-800 overflow-auto'
    >
      <div className='w-full grid grid-cols-2 flex-wrap justify-items-between p-2'>
=======
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
            <Link to='loginup' smooth={true} duration={500}>
              LOG IN | SIGN UP
            </Link>
          </li>
        </ul>

        {/* <div className='hidden md:flex justify-end items-center space-x-3 mr-3'>
          <button className='nav'>LOG IN</button>
          <button className='nav'>SIGN UP</button>
        </div> */}
>>>>>>> main
        {/* Nav burger */}
        <div onClick={clickHandler} className='md:invisible z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? 'invisible'
<<<<<<< HEAD
              : 'absolute top-0 left-0 w-full h-screen flex flex-col'
          }
        >
          <li className='py-4 text-2xl text-purple-900 container'>
            {' '}
            <Link onClick={clickHandler} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-4 text-2xl text-purple-900 container'>
=======
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
>>>>>>> main
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
            <Link
              onClick={clickHandler}
              to='loginup'
              smooth={true}
              duration={500}
            >
              LOG IN/SIGNUP OR LOG OUT
            </Link>
          </li>
        </ul>
<<<<<<< HEAD

        <div className='invisible'>
          {/* Navbar menu */}
          <ul className='flex md:visible py-4 text-2xl text-bold text-purple-900'>
            <li>
              <Link to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to='throwdown' smooth={true} duration={500}>
                Throwdown
              </Link>
            </li>
          </ul>
        </div>
=======
>>>>>>> main
      </div>
    </section>
  );
};

// export Navbar section function
export default Navbar;
