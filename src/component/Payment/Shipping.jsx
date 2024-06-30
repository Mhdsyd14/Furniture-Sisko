import React, { useState } from "react";
import halaman1 from "../../assets/halaman1.png";

const Shipping = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1; // Ensure quantity does not go below 1
    });
  };

  return (
    <>
      <div className="p-4 flex flex-row ">
        <div className=" w-[750px] ml-12 rounded-md border border-[#C0772C] p-4">
          <div className="relative overflow-hidden rounded-lg">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-white text-[#642C0C]">
                <tr className="border-b border-[#C0772C]">
                  <th className="py-2 text-center font-bold p-4"></th>
                  <th className="py-2 text-center font-bold p-4">Product</th>
                  <th className="py-2 text-center font-bold p-4">Price</th>
                  <th className="py-2 text-center font-bold p-4">Quantity</th>
                  <th className="py-2 text-center font-bold p-4">Subtotal</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#642C0C]">
                <tr className="py-5">
                  <td className="py-5 text-center p-4 w-[150px]">
                    <img src={halaman1} alt="gambar" />
                  </td>
                  <td className="py-5 text-center p-4">YY-853581</td>
                  <td className="py-5 text-center p-4">Notebook Basic</td>
                  <td className="py-5 text-center p-4">
                    <div className="border border-[#C0772C] rounded-sm mt-3 w-[100px] h-[40px] flex items-center justify-center">
                      <button
                        className="ml-[3px] mt-[2px] p-1"
                        onClick={() => handleQuantityChange(-1)}
                      >
                        -
                      </button>
                      <span className="mx-2">{quantity}</span>
                      <button
                        className="mr-[3px] mt-[2px] p-1"
                        onClick={() => handleQuantityChange(1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-5 text-center p-4">${299 * quantity}</td>
                </tr>
              </tbody>
            </table>
            <div className=" h-[2px] w-[750px] bg-[#C0772C]" />
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-lg mt-4"
              placeholder="Add a note (Optional)"
            />
            <div className=" flex flex-col mt-4">
              <h1 className=" text-xl font-bold text-[#642C0C]">Shipping</h1>
              <select className="block w-full p-2 border border-gray-300 rounded-lg mt-3">
                <option value="">Select Delivery</option>
                <option value="province1">Province 1</option>
                <option value="province2">Province 2</option>
              </select>
            </div>

            <div className=" flex flex-row mt-4 gap-2">
              <input type="checkbox" className=" mb-5" />
              <div className=" flex flex-col">
                <h1 className=" text-xl font-bold text-[#642C0C]">
                  Shipping Insurance
                </h1>
                <h1 className=" text-[#642C0C] opacity-30">
                  Risk coverage if the item is lost or damaged in transit
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[423px] h-[350px] ml-12 rounded-md border border-[#C0772C] p-4 flex flex-col">
          <div className=" flex flex-row items-center gap-4">
            <input
              type="text"
              className="block w-[290px] p-2 border border-gray-300 rounded-lg mt-4"
              placeholder="Insert voucher"
            />
            <button className=" border border-[#642C0C] p-2 mt-4 rounded-sm w-[90px] font-bold">
              Use
            </button>
          </div>
          <h1 className=" mt-3 opacity-30">View available vouchers</h1>
          <div className=" h-[2px] w-[390px] mt-3 bg-[#642C0C] opacity-10"></div>
          <div className=" flex flex-row mt-6 gap-[210px]">
            <h1 className="text-[#642C0C] font-medium">Subtotal</h1>
            <h1>Rp.125.000</h1>
          </div>
          <div className=" flex flex-row mt-2 gap-[170px]">
            <h1 className="text-[#642C0C] font-medium">Shipping Cost</h1>
            <h1>Rp.125.000</h1>
          </div>
          <div className=" h-[2px] w-[390px] mt-5 bg-[#642C0C] opacity-10"></div>
          <div className=" flex flex-row mt-2 gap-[230px]">
            <h1 className="text-[#642C0C] font-medium">Total</h1>
            <h1 className=" font-bold text-[#642C0C] ">Rp.125.000</h1>
          </div>
          <a
            href="#"
            className=" rounded-md w-full bg-[#C0772C] mt-5 p-2 text-center text-white font-playfair font-bold"
          >
            Pay Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Shipping;
