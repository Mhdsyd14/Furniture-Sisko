import React from "react";
import Navbar from "../component/Home/Navbar";
import Hero from "../component/Payment/Hero";
import Order from "../component/Payment/Order";
import Shipping from "../component/Payment/Shipping";

const Payment = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Order />
      <Shipping />
    </>
  );
};

export default Payment;
