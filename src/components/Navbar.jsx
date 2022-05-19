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
      className='w-full h-24 bg-gradient-to-t from-rose-600  to-fuchsia-800 overflow-auto'
    >
      <div className='w-full grid grid-cols-2 flex-wrap justify-items-between p-2'>
        {/* Nav burger */}
        <div onClick={clickHandler} className='md:invisible z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? 'invisible'
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
            {' '}
            <Link
              onClick={clickHandler}
              to='throwdown'
              smooth={true}
              duration={500}
            >
              Throwdown
            </Link>
          </li>
        </ul>

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
      </div>
    </section>
  );
};

// export Navbar section function
export default Navbar;
