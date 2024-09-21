import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-black px-5 py-12">
        <div className="max-w-screen-xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img src="/images/logo-light.png" alt="" width={250} />
              <p className="text-white mt-5 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                asperiores, adipisci voluptas perferendis voluptatum illum vero,
                placeat voluptate delectus a qui numquam.
              </p>
              <Link to="/">
                <button className="px-4 py-3 text-[16px] bg-gradient-to-l from-[#04cafb] to-[#039dda] text-white rounded-md shadow-lg">
                  Get In Touch
                </button>
              </Link>
            </div>
            <div>
              <div>
                <h2 className="text-white text-xl md:text-3xl">Get in touch</h2>
                <div className="w-20 h-1 bg-white mt-2"></div>
              </div>
              <ul className="mt-5 flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <span className="text-white">+880 1234 567 890</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <span className="text-white">
                    Panthapath, Dhaka, Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <Link to="/" className="text-white">
                    Privacy and Policy
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <Link to="/" className="text-white">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h2 className="text-white text-xl md:text-3xl">News Letter</h2>
                <div className="w-20 h-1 bg-white mt-2"></div>
                <p className="text-white mt-5">
                  Stay up to date with the latest news, announcements and
                  articles.
                </p>
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border-[3px] border-[#04cafb] focus:outline-none focus:ring-[3px] focus:ring-transparent focus:border-[3px]"
                />
                <button className="mt-3 uppercase px-4 py-3 text-[16px] bg-gradient-to-l from-[#04cafb] to-[#039dda] text-white w-full shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-l from-[#04cafb] to-[#039dda]">
        <p className="text-white text-sm text-center p-5">
          © MJRAWFUSION - {year} | All Right Reserved | Developed BY{" "}
          <i class="fa fa-heart"></i> PEOPLENTECH
        </p>
      </div>
    </>
  );
};

export default Footer;
