import React from "react";
import { FaToilet, FaToiletPaper } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-auto flex justify-center bg-black">
      <h1 className="text-white text-center inline-flex py-2">
        <FaToilet size={30} color="white" /> Insert Our Names with GitHub Links
        Here
        <br></br>
        &copy; 2022 Top Shelf Productions
        <FaToiletPaper size={30} color="white" />
      </h1>
    </footer>
  );
};

// export Footer element
export default Footer;
