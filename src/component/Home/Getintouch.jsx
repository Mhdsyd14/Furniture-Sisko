import React from "react";
import map from "../../assets/map.png";
const Getintouch = () => {
  return (
    <>
      <div className=" bg-white flex flex-row p-12">
        <div className=" flex flex-col  w-[590px] ml-32 text-[#642C0C] gap-2">
          <h5>Solutions</h5>
          <h1 className=" text-4xl font-playfair font-semibold">
            Get in Touch
          </h1>
          <h5>
            Have a question or need assitance? Feel free to reach out to us!
          </h5>
        </div>
        <div className="  flex flex-col w-[490px] text-[#642C0C] gap-2 ml-36">
          <h3 className=" font-bold">Email</h3>
          <h5>contact@furniture.com</h5>
          <h3 className=" font-bold">Phone</h3>
          <h5>+62 00225 555</h5>
          <h3 className=" font-bold">Office</h3>
          <h5>Jl. Gatot Subroto, Bandung</h5>
        </div>
      </div>
      <div className=" w-[790px] mx-auto mb-7">
        <img src={map} alt="map" />
      </div>
    </>
  );
};

export default Getintouch;
