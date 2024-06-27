import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Featured from "../component/Featured";
import Experience from "../component/Experience";
import Quality from "../component/Quality";
import Ourlatest from "../component/Ourlatest";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Experience />
      <Quality />
      <Ourlatest />
    </>
  );
};

export default Home;
