import React from "react";

const Order = () => {
  return (
    <>
      <div className="flex flex-col p-8">
        <div className="ml-10">
          <h1 className="text-3xl font-playfair font-bold">Payment</h1>
          <h1 className="mt-4">1 From 2 Step</h1>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="h-1 w-[290px] bg-[#C0772C] mt-4" />
              <div className="flex flex-row items-center gap-3 mt-3">
                <h1 className="text-white bg-[#642C0C] w-8 h-8 flex items-center justify-center rounded-full">
                  1
                </h1>
                <h1>Set Up Order</h1>
              </div>
            </div>
            <div className="flex flex-col ml-3 opacity-25">
              <div className="h-1 w-[290px] bg-[#C0772C] mt-4" />
              <div className="flex flex-row items-center gap-3 mt-3">
                <h1 className="text-white bg-[#642C0C] w-8 h-8 flex items-center justify-center rounded-full">
                  2
                </h1>
                <h1>Pay Order</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Where do you send it?</h1>
          <div className="border border-[#C0772C] p-6 rounded-lg">
            <form className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your address"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Province
                </label>
                <select className="block w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">Select province</option>
                  <option value="province1">Province 1</option>
                  <option value="province2">Province 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Regency
                </label>
                <select className="block w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">Select regency</option>
                  <option value="regency1">Regency 1</option>
                  <option value="regency2">Regency 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  District
                </label>
                <select className="block w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">Select district</option>
                  <option value="district1">District 1</option>
                  <option value="district2">District 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Village
                </label>
                <select className="block w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">Select village</option>
                  <option value="village1">Village 1</option>
                  <option value="village2">Village 2</option>
                </select>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#C0772C] text-white p-3 rounded-lg font-bold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
