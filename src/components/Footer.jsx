import React from "react";
import { FaToilet, FaToiletPaper } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-black">
      <h1 className="text-white text-center py-2">
        <FaToilet /> Insert Our Names with GitHub Links Here
      </h1>
      <h2 className="text-white text-center py-2">
        <FaToiletPaper /> &copy; 2022 Top Shelf Productions
      </h2>
    </footer>
  );
};

// export Footer element
export default Footer;
