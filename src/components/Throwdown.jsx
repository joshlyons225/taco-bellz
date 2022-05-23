import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgPack from '../assets/images/index';
import throwdownLogo from '../assets/images/throwdown-logo.png';
import { FaArrowUp } from 'react-icons/fa';

const Throwdown = () => {
  return (
    <section name='throwdown' className='w-full h-auto bg-black'>
      <img
        src={throwdownLogo}
        alt='taco bell throwdown contenders'
        className='mx-auto w-1/2 py-3'
      ></img>
      {/* Carousel */}
      <div className='carousel-wrapper pb-8'>
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          interval={999000}
          centerMode={true}
          onSwipeMove={true}
          showThumbs={false}
          //   onClickItem={() => {
          //     window.open(this.index);
          //   }}
        >
          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['BBChalupa']}
                  alt='bbchalupa icon'
                ></img>
                <h6 className='text-7xl absolute top-20 mx-auto nav text-center'>
                  BLACK BEAN CHALUPA SUPREME
                </h6>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 731
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  If there’s anything more carefree than the classic Chalupa, we
                  aren’t familiar with it. Some say that they invented the term
                  “chill”. Heck, you can’t even say ‘Chalupa’ without a little
                  ‘chill’ at the front of it. The Black Bean Chalupa continues
                  that laidback legacy. It’s got all the components that make a
                  Chalupa chill in the first place: a pillowy, cloud-like shell
                  and iconic Taco Bell ingredients that give you a feeling of
                  contentment in every bite.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['BBQuesarito']}
                  alt='bbquesarito icon'
                ></img>
                <h6 className='text-7xl absolute top-20 mx-auto nav pl-50'>
                  BLACK BEAN QUESARITO
                </h6>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 221
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  A little while ago, in the not-so-distant past, someone in our
                  kitchen had an epiphany: we should take a quesadilla, roll it
                  up like a burrito, and fill it with delicious ingredients. And
                  that’s exactly what we did. Filled with our signature black
                  beans, both nacho cheese sauce and shredded cheese, seasoned
                  rice, a tangy chipotle sauce, and reduced-fat sour cream, it’s
                  an enticing vegetarian mash-up of two of our most incredible
                  items.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['CBRBurrito']}
                  alt='cbrburrito icon'
                ></img>

                <p className='text-5xl text-white font-bold absolute top-20 inset-x-1'>
                  CHEESY BEAN & RICE BURRITO
                </p>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 808
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  So there’s cheesy, and then there’s cheesy. How do you
                  differentiate the two? Because both clearly have totally
                  different meanings. For starters, you can be cheesy by telling
                  one of those jokes that involve a knock at the door and
                  results in a huge eye roll when the answer is nothing but a
                  lame pun. But how can you get to the good kind of cheesy? Like
                  cheesy cheesy. Simple, take the Cheesy Bean and Rice Burrito
                  for example. With a perfect combination of warm nacho cheese
                  sauce, refried beans and premium seasoned rice all wrapped in
                  a soft flour tortilla, it’s the kind of cheesy you definitely
                  want…and nobody has to answer “who’s there” to get it.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['GorditaCrunch']}
                  alt='gorditacrunch icon'
                ></img>
                <p className='text-5xl text-white font-bold absolute top-20 inset-x-1'>
                  CHEESY GORDITA CRUNCH
                </p>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 465
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  A warm flatbread layered with three-cheese blend and wrapped
                  around a crunchy taco filled with seasoned beef, spicy ranch
                  sauce, crispy lettuce and shredded cheddar cheese.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['ChikChalupa']}
                  alt='chikchalupa icon'
                ></img>
                <p className='text-5xl text-white font-bold absolute top-20 inset-x-1'>
                  CHICKEN CHALUPA SUPREME
                </p>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 387
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  The Chalupa Supreme sure weaves some beautiful witchcraft.
                  Take a traditional flatbread, something already awesome in its
                  own right, and fry it. Suddenly you have a shell that
                  mysteriously marries chewy and crispy; pure sorcery. Add
                  seasoned chicken, a three-cheese blend, lettuce, tomatoes, and
                  reduced fat sour cream, and you get a Dante-esque culinary
                  anomaly. The only greater fried magic trick known to man is
                  turning arbitrary dough splashes, into funnel cake. Now that
                  is nothing short of a miracle.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['MexPizza']}
                  alt='mexpizza icon'
                ></img>
                <p className='text-5xl text-white font-bold absolute top-20 inset-x-1'>
                  MEXICAN PIZZA
                </p>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 1021
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  Seasoned beef and refried beans between two Mexican Pizza
                  shells with Mexican Pizza sauce, three-cheese blend, and
                  tomatoes on top.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['DoritosLocos']}
                  alt='doritoslocos icon'
                ></img>
                <p className='text-5xl text-white font-bold absolute top-20 inset-x-1'>
                  NACHO CHEESE DORITOS® LOCOS TACO SUPREME®
                </p>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 588
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  As you already know, the Nacho Cheese Doritos® Locos Tacos
                  Supreme® all started with a dream. But with every dream,
                  there’s always that starting point. You know, the leap off.
                  The idea that begins small but eventually launches you into a
                  much greater thing. Cue in the Nacho Cheese Doritos® Locos
                  Tacos. That’s right. Subtract the supreme, and that’s where it
                  all began.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['BellGrande']}
                  alt='bellgrande icon'
                ></img>
                <p className='text-5xl text-white font-bold absolute top-20 inset-x-1'>
                  NACHOS BELLGRANDE®
                </p>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 522
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  Welcome to the Nachos Draft: the daily lunch event that you've
                  prepped for all off-season...aka since your last Taco Bell
                  run. The #1 overall pick is an easy choice: the Nachos
                  BellGrande®, with the most well-rounded refried beans, nacho
                  cheese sauce, seasoned beef, reduced fat sour cream, and diced
                  tomatoes that is guaranteed to be the MVP.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['ChikQuesadilla']}
                  alt='chikquesadilla icon'
                ></img>
                <p className='text-5xl text-white font-bold absolute top-20 inset-x-1'>
                  CHICKEN QUESADILLA
                </p>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 221
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  The Chicken Quesadilla is a purist’s meal; and we say “purist”
                  in the most complimenting way possible. It’s a simple flour
                  tortilla with some grilled chicken, a hefty portion of melted
                  three-cheese blend, creamy jalapeño sauce, and absolutely zero
                  bells and whistles. It’s the culinary equivalent to a
                  comfortable, plain black shirt that is equally sleek as it is
                  chic. Or a good midrange jump shot; you know, not showy but
                  consistent every single time. That one player you want to have
                  the ball during the championship game with 3 seconds left on
                  the clock and will win it for the team. You know what you’re
                  going to get. It’s never a guessing game. It’s reliable and is
                  a go-to when you’re ever in doubt.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['SoftTaco']}
                  alt='softtaco icon'
                ></img>
                <p className='text-5xl text-white font-bold absolute top-20 inset-x-1'>
                  CLASSIC BEEF SOFT TACO
                </p>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 375
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  While the Crunchy Taco’s got a tough outer shell, a bit of a
                  mean streak, and a penchant for picking fights with strangers,
                  the Soft Taco has a nice polite chill. Instead of a tough corn
                  shell, the Soft Taco has a warm, flour tortilla that gently
                  holds the seasoned beef, lettuce and cheese. It’s the kind of
                  taco that will bring flowers to your mom when it’s invited
                  over for dinner. It remembers your birthday, even without the
                  help of social networks. Dreamy. Soft. Delicious.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['PotTaco']}
                  alt='pottaco icon'
                ></img>
                <p className='text-5xl text-white font-bold absolute top-20 inset-x-1'>
                  SPICY POTATO SOFT TACO
                </p>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 444
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  Who even thought of the game hot potato? Seriously, though.
                  It’s basically a game of catch but with a hot potato. If you
                  think about it, you basically heat a potato hotter than you
                  should and hotter than you can handle, then throw it at your
                  friends.We don’t know about you, but we’d rather be enjoying a
                  Spicy Potato Soft Taco. If you’re one of those kids who has a
                  thing for hot potatoes, why don’t you just get the Spicy
                  Potato Soft Taco instead? It’s got warm and seasoned potato
                  bites, real cheddar cheese, crisp lettuce, and creamy chipotle
                  sauce for a little extra kick.So, now, by eating a Spicy
                  Potato Soft Taco, you can technically play hot potato without
                  actually doing it.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['VegCrunchWrap']}
                  alt='vegcrunchwrap icon'
                ></img>
                <p className='text-5xl text-white font-bold absolute top-20 inset-x-1'>
                  BLACK BEAN CRUNCHWRAP
                </p>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 526
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  The Black Bean Crunchwrap is the vegetarian version of one of
                  our greatest creations. So what’s in one, exactly? We couldn’t
                  be happier that you asked. It starts off with our signature
                  black beans, then adds layers of nacho cheese sauce, lettuce,
                  tomatoes, reduced-fat sour cream, and if you can believe it, a
                  crunchy tostada shell for that crunch you know and love. We
                  wrap it all up – or should we say, we CRUNCHwrap it all up in
                  a warm flour tortilla– to give you unbelievably delicious
                  on-the-go food.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <img
                  className='object-cover w-auto py-2 h-1/5 relative brightness-50'
                  src={imgPack['smImgPack']['RanchFryBurr']}
                  alt='ranchfryburr icon'
                ></img>
                <p className='text-5xl text-white font-bold absolute top-20 inset-x-1'>
                  WHITE HOT RANCH FRIES BURRITO
                </p>

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <button className='outline  text-white rounded-lg py-1 px-3  hover:bg-rose-400 hover:outline-none'>
                    UPVOTE | {FaArrowUp} 681
                  </button>
                </div>

                <p className='text-white text-lg pb-12 pt-3 absolute bottom-10 inset-x-1'>
                  Seasoned Nacho Fries topped with black beans, spicy white hot
                  ranch sauce, nacho cheese sauce, tomatoes, reduced-fat sour
                  cream, and real shredded cheddar cheese wrapped inside a warm
                  flour tortilla.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

// export Throwdown section function
export default Throwdown;
