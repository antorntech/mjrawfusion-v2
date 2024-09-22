import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import HomeAbout from "../components/home/HomeAbout";

const AboutUs = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <HomeAbout />
      </div>
    </>
  );
};

export default AboutUs;
