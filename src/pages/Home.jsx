import React from "react";
import Hero from "../components/home/Hero";
import FeaturedServices from "../components/home/FeaturedServices";
import HomeAbout from "../components/home/HomeAbout";
import HomeServices from "../components/home/HomeServices";
import DiscoverMore from "../components/home/DiscoverMore";
import HomeGrid from "../components/home/HomeGrid";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <HomeAbout />
      <HomeServices />
      <DiscoverMore />
      <HomeGrid />
    </div>
  );
};

export default Home;
