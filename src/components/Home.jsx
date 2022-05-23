// import files and dependencies
import React from 'react';
import Logo from '../assets/images/Yo-Quiero.png';

const Home = () => {
  return (
    <section name='home' className='bg-red-200 pb-5'>
      <div className=' items-center md:flex'>
        <div className='p-4 h-auto sm:flex-col'>
          <img src={Logo} alt='Yo Quiero Logo' className='mx-auto h-full'></img>
        </div>
        <div className='flex-auto mx-auto p-4'>
          <h1 className='text-violet-900 text-7xl py-4  sm:text-center md:text-left font-bold'>
            YEAH, WE GET IT.
          </h1>
          <p className='text-violet-900 pr-6 sm:text-center md:text-left'>
            We KNOW that <span className='text-pink-600'>'yo quiero'</span>{' '}
            means <span className='text-pink-600'>'I I want'</span>. And we're
            okay with that. Because we are SO taken with the Taco Bell realm
            that we're willing to overlook egregious grammatical erros.
          </p>
          <h1 className='text-violet-900 text-7xl py-4 sm:text-center md:text-left font-bold'>
            SO LETS HAVE A THROWDOWN.
          </h1>
          <p className='text-violet-900 pr-6 pb-4 sm:text-center md:text-left'>
            You know. The kind where your two favorites in the whole wide world
            go head-to-head. Cause we're down for some combat, especially when
            it comes to these contenders.
          </p>
        </div>
      </div>
    </section>
  );
};

// export Home section function
export default Home;
