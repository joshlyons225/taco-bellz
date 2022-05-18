import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BBChalupa from "../assets/images/small/black_bean_chalupa_640x650.jpg";
import BBQuesarito from "../assets/images/small/black_bean_quesarito_640x650.jpg";
import CBRBurrito from "../assets/images/small/cheesy_bean_and_rice_burrito_640x650.jpg";
import GorditaCrunch from "../assets/images/small/cheesy_gordita_crunch_640x650.jpg";
import ChikChalupa from "../assets/images/small/chicken_chalupa_supreme_640x650.jpg";
import MexPizza from "../assets/images/small/mexican_pizza_640x650.jpg";
import DoritosLocos from "../assets/images/small/nacho_cheese_doritos_locos_tacos_supreme_640x650.jpg";
import BellGrande from "../assets/images/small/nachos_bellgrande_640x650.jpg";
import ChikQuesadilla from "../assets/images/small/quesadilla_640x650.jpg";
import SoftTaco from "../assets/images/small/soft_taco_640x650.jpg";
import PotTaco from "../assets/images/small/spicy_potato_soft_taco_640x650.jpg";
import VegCrunchWrap from "../assets/images/small/vegetarian_crunchwrap_640x650.jpg";
import RanchFryBurr from "../assets/images/small/white_hot_ranch_burrito_-_veggie_640x650.jpg";

const Throwdown = () => {
  return (
    <section name="throwdown" className="w-full h-auto bg-orange-300">
      <h2 className="font-bold text-4xl text-emerald-500 text-center">
        Behold the Spinning Glory!!
      </h2>
      {/* Carousel */}
      <div className="carousel-wrapper">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          interval={2000}
          centerMode={true}
          onSwipeMove={true}
          showThumbs={false}
          onClickItem={() => {
            window.open(this.index);
          }}
        >
          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={BBChalupa}
                alt="bbchalupa icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={BBQuesarito}
                alt="bbquesarito icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={CBRBurrito}
                alt="cbrburrito icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={GorditaCrunch}
                alt="gorditacrunch icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={ChikChalupa}
                alt="chikchalupa icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={MexPizza}
                alt="mexpizza icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={DoritosLocos}
                alt="doritoslocos icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={BellGrande}
                alt="bellgrande icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={ChikQuesadilla}
                alt="chikquesadilla icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={SoftTaco}
                alt="softtaco icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={PotTaco}
                alt="pottaco icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={VegCrunchWrap}
                alt="vegcrunchwrap icon"
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={RanchFryBurr}
                alt="ranchfryburr icon"
              ></img>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

// export Throwdown section function
export default Throwdown;
