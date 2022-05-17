import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Bridgett from "../assets/Bridgett.jpg";
import Josh from "../assets/Josh.JPEG";
import Jules from "../assets/Jules.jpg";
import Kate from "../assets/Kate.jpg";

const Throwdown = () => {
  return (
    <section name="throwdown" className="w-full h-auto">
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
            <a
              href="https://horrorscopes-project.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="object-cover h-1/5 w-auto py-2"
                  src={Bridgett}
                  alt="bridgett icon"
                ></img>
              </div>
            </a>
          </div>

          {/* Josh */}
          <div>
            <a
              href="https://horrorscopes-project.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="object-cover h-1/5 w-auto py-2"
                  src={Josh}
                  alt="josh icon"
                ></img>
              </div>
            </a>
          </div>

          {/* Jules */}
          <div>
            <a
              href="https://horrorscopes-project.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="object-cover h-1/5 w-auto py-2"
                  src={Jules}
                  alt="jules icon"
                ></img>
              </div>
            </a>
          </div>

          {/* Kate */}
          <div>
            <a
              href="https://horrorscopes-project.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  className="object-cover h-1/5 w-auto py-2"
                  src={Kate}
                  alt="kate icon"
                ></img>
              </div>
            </a>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

// export Throwdown section function
export default Throwdown;
