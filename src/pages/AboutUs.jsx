import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import HomeAbout from "../components/home/HomeAbout";

const AboutUs = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-xl">
            Welcome to MJ Raw Fusion, a leading and comprehensive indenting
            house and trading company specializing in pharmaceutical raw
            materials and Instruments. With a commitment to quality and
            reliability, we connect Pharmaceutical manufacturers with top-tier
            raw suppliers globally.
          </p>
        </div>
      </div>
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <HomeAbout />
      </div>
    </>
  );
};

export default AboutUs;
