import React from "react";
import Heroproduct from "../../assets/Heroproduct.png";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div
        className=" h-[425px] flex flex-col"
        style={{
          backgroundImage: `url(${Heroproduct})`,
          backgroundSize: "cover",
          backgroundPosition: "0px -200px ",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" p-12 ml-5 text-white my-auto">
          <h1 className=" text-5xl font-playfair font-semibold">Contact</h1>
          <nav className="flex items-center space-x-2 mt-5">
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
            <ChevronRightIcon className="h-5 w-5" />
            <span>Contact</span>
            <ChevronRightIcon className="h-5 w-5" />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Hero;
