import React from "react";
import halaman1 from "../../assets/halaman1.png";
import halaman2 from "../../assets/halaman2.png";
import halaman3 from "../../assets/halaman3.png";
import load from "../../assets/load.png";
import next from "../../assets/next.png";

const Featured = () => {
  return (
    <div className="container mx-auto px-7 py-16 ">
      <div className="mb-8 flex flex-row ">
        <div className="flex flex-col text-[#311e0b] text-left">
          <h5>Discover</h5>
          <h2 className="text-3xl font-bold font-playfair">Featured</h2>
          <h5>Explore our selection of modern furniture for your home</h5>
        </div>

        <div className=" rounded-lg bg-[#C0772C] w-[110px] h-[45px]  text-white font-playfair p-3 text-center cursor-pointer ml-[715px] mt-[40px] font-bold ">
          View All
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={halaman1}
            alt="Modern Minimalist Sofa"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-[#311e0b]">
              Modern Minimalist Sofa
            </h3>
            <p className="text-[#311e0b]">Elegan, Minimalis, Modern</p>
            <p className="text-lg font-bold text-[#311e0b]">
              Rp. 12.000.000.00
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={halaman2}
            alt="Modern Minimalist Sofa"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-[#311e0b]">
              Modern Minimalist Sofa
            </h3>
            <p className="text-[#311e0b]">Elegan, Minimalis, Modern</p>
            <p className="text-lg font-bold text-[#311e0b]">
              Rp. 12.000.000.00
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={halaman3} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-[#311e0b]">
              Modern Minimalist Sofa
            </h3>
            <p className="text-[#311e0b]">Elegan, Minimalis, Modern</p>
            <p className="text-lg font-bold text-[#311e0b]">
              Rp. 12.000.000.00
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button>
          <img src={load} className="w-20" alt="load" />
        </button>
        <button className=" text-white font-bold py-2 px-4 rounded-full ml-[1000px]">
          <img src={next} className=" w-20" alt="next" />
        </button>
      </div>
    </div>
  );
};

export default Featured;
