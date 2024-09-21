import React from "react";
import Hero from "../components/home/Hero";
import FeaturedServices from "../components/home/FeaturedServices";
import HomeAbout from "../components/home/HomeAbout";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <HomeAbout />
    </div>
  );
};

export default Home;
