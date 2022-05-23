import React from 'react';
import { FaToilet, FaToiletPaper } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full h-auto display-block text-center bg-black'>
      <h3 className='text-white text-center inline-flex py-2 mx-3 whitespace-pre-wrap'>
        <FaToilet size={30} color='white' />
        &nbsp;
        <a href='https://github.com/joshlyons225/'>Josh Lyons</a> •{' '}
        <a href='https://valet-portfolio.herokuapp.com/'>Bridgett Valet</a>{' '}
        <a href='https://katelynarmstrong.github.io/katelyn-armstrong/'>
          &nbsp;• Katelyn Armstrong
        </a>
        &nbsp;• <a href='https://github.com/JulesMcP'>Julieta McPherson</a>
        &nbsp; <FaToiletPaper size={30} color='white' />
      </h3>
      <br></br>
      <h3 className='text-white text-center display-block pb-5'>
        &copy; 2022 Top Roll Productions
      </h3>
    </footer>
  );
};

// export Footer element
export default Footer;
