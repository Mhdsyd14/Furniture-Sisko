import React from "react";
import Navbar from "../component/Home/Navbar";
import Hero from "../component/Product/Hero";
import Filter from "../component/Product/Filter";
import Card from "../component/Product/Card";
import Footer from "../component/Home/Footer";

const Product = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Filter />
      <Card />
      <div className=" flex flex-row p-5">
        <div className=" flex flex-row gap-4 mx-auto">
          <div className=" rounded-md bg-[#C0772C] p-2 text-center w-[50px] text-white">
            1
          </div>
          <div className=" rounded-md bg-[#E5D097] p-2 text-center w-[50px] text-white">
            2
          </div>
          <div className=" rounded-md bg-[#E5D097] p-2 text-center w-[50px] text-white">
            3
          </div>
          <div className=" rounded-md bg-[#E5D097] p-2 text-center w-[85px] text-white">
            Next
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
