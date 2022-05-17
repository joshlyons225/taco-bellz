import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Bridgett from "../assets/Bridgett.jpg";
import Josh from "../assets/Josh.JPEG";
import Jules from "../assets/Jules.jpg";
import Kate from "../assets/Kate.jpg";

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
          {/* Bridgett */}
          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={Bridgett}
                alt="bridgett icon"
              ></img>
            </div>
          </div>

          {/* Josh */}
          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={Josh}
                alt="josh icon"
              ></img>
            </div>
          </div>

          {/* Jules */}
          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={Jules}
                alt="jules icon"
              ></img>
            </div>
          </div>

          {/* Kate */}
          <div>
            <div>
              <img
                className="object-cover h-1/5 w-auto py-2"
                src={Kate}
                alt="kate icon"
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