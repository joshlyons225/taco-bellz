// import files and dependencies
import React from "react";
import Logo from "../assets/images/Yo-Quiero.png";
import Tacoz from "../assets/Tacoz.jpg";

const Home = () => {
  return (
    <section name="home" className="bg-red-200">
      <div className="p-4 h-auto">
        <img src={Logo} alt="Yo Quiero Logo" className="w-80"></img>
      </div>

      {/* CLASS TEST */}

      <div className="bg-pink-600 py-4 px-4">
        <p className="py-2 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
          commodo viverra maecenas accumsan lacus. Tincidunt nunc pulvinar
          sapien et ligula ullamcorper malesuada.
        </p>

        {/* BUTTON TEST */}

        <button className="bg-pink-300 hover:bg-pink-100 text-black font-bold py-2 px-4 rounded">
          UPVOTE
        </button>

        {/* CARD COMPONENT */}
        <div className="max-w-sm mx-auto flex p-6 m-5 bg-white rounded-lg shadow-xl">
          <div className="flex shrink 0">
            <img src={Tacoz} alt="glory taco" className="h-12 w-12"></img>
          </div>
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900">DREAMY</h4>
            <p className="text-base text-gray-600">Look Here.</p>
          </div>
        </div>

        <div className="max-w-sm mx-auto flex p-6 m-5 bg-white rounded-lg shadow-xl">
          <div className="flex shrink 0">
            <img src={Tacoz} alt="glory taco" className="h-12 w-12"></img>
          </div>
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900">DREAMY</h4>
            <p className="text-base text-gray-600">Look Here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// export Home section function
export default Home;
