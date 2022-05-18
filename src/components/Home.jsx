// import files and dependencies
import React from "react";
import Tacoz from "../assets/Tacoz.jpg";

const Home = () => {
  return (
    <section name="home" className="w-full h-auto bg-violet-400">
      <div className="p-4 h-screen">
        <h1 className="text-7xl font-bold text-indigo-800">HELLO, BRIDGETT.</h1>
        <h2 className="text-5xl font-bold text-indigo-800">This is a test.</h2>
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
