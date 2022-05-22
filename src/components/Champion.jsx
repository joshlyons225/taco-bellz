// import files and dependencies
import React from 'react';
import Campeon from '../assets/images/campeon.png';
import imgPack from '../assets/images/index';

const Champion = () => {
  return (
    <section name='champ' className='bg-red-800 pb-5'>
      <div className=' items-center md:flex'>
        <div className='flex-auto mx-auto p-4'>
          <h1 className='text-rose-300 text-7xl py-4  sm:text-center md:text-left'>
            WEEKLY CHAMPION
          </h1>
          <p className='text-rose-300 sm:text-center md:text-left'>
            In life, there are winners, and there are losers. Here we present
            the cherished Taco Bell menu item that rules them all (if you spent
            all day mashing the UPVOTE button, good for you. We appreciate that
            kind of dedication, and your spot at the top is well-earned).
          </p>
        </div>

        <div className='p-4 h-auto sm:flex-col'>
          <img
            src={Campeon}
            alt='Luchador Chiuahua with the words Taco Bell Campeon'
            className='mx-auto h-full'
          ></img>
        </div>
      </div>

      <div className='relative'>
        <div className='p-4 sm:flex-col'>
          <img
            src={imgPack['lgImgPack']['BBChalupaLg']}
            alt='bbchalupa icon'
            className='mx-auto max-w-full rounded-md shadow-lg'
          ></img>

          <div className='w-1/2 absolute top-10 right-10'>
            <p className='text-6xl text-rose-500 champ w-1/2'>
              BLACK BEAN CHALUPA SUPREME
            </p>
            <p className='text-rose-500 absolute right-12 pt-1 pl-3 sm:text-center md:text-left w-1/2'>
              And right here, we have the winner. You know. The kind of thing
              that you keep going back to time and again, although you know it
              just might be a toxic relationship. We're okay with that, too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// export Champion section function
export default Champion;
