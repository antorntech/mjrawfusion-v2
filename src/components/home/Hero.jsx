import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full px-5 py-2 bg-[url('/images/hero-bg.png')] bg-no-repeat bg-cover bg-bottom h-[100vh] md:h-[95vh] overflow-hidden">
      <div className="max-w-screen-xl mx-auto h-full flex justify-center items-center">
        <div className="w-full text-center">
          <p className="text-white uppercase text-sm md:text-[26px] mb-0 md:mb-12 animate__animated animate__fadeInUp">
            Get The Best Service From MJRAWFUSION
          </p>
          <h1 className="text-3xl md:text-[120px] font-bold text-white py-2 animate__animated animate__fadeInUp">
            Sourcing Excellence
          </h1>
          <Link
            to="/contactus"
            className="mt-2 md:mt-10 lg:mt-16 inline-block px-4 py-2 md:px-5 md:py-3 bg-gradient-to-l from-[#04cafb] to-[#039dda] text-white rounded-md shadow-lg animate__animated animate__fadeInUp"
          >
            Get Started <i class="fa-solid fa-location-arrow ml-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
