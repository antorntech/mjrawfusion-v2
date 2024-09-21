import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuLeft = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/aboutus",
    },
    {
      label: "Services",
      path: "/services",
    },
  ];

  const menuRight = [
    {
      label: "Industries",
      path: "/industries",
    },
    {
      label: "Divisions",
      path: "/divisions",
    },
  ];

  const mainMenu = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/aboutus",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Industries",
      path: "/industries",
    },
    {
      label: "Divisions",
      path: "/divisions",
    },
  ];
  return (
    <div className="w-full px-5 py-2 overflow-hidden">
      {/* desktop menu */}
      <div className="max-w-screen-xl mx-auto hidden lg:flex justify-between items-center">
        <div className="flex items-center gap-8">
          {menuLeft.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#04cafb] text-[16px] font-semibold transition duration-300"
                    : "text-black text-[16px] font-[500] hover:text-[#04cafb] transition duration-300"
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
        <div>
          <Link to="/">
            <img
              src="/images/logo-dark.png"
              alt="logo-dark.png"
              width={250}
              className="py-1"
            />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          {menuRight.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#04cafb] text-[16px] font-semibold transition duration-300"
                    : "text-black text-[16px] font-[500] hover:text-[#04cafb] transition duration-300"
                }
              >
                {item.label}
              </NavLink>
            );
          })}
          <Link
            to="/contactus"
            className="inline-block px-5 py-2 bg-gradient-to-l from-[#04cafb] to-[#039dda] text-white rounded-md shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* mobile menu */}
      <div>
        <div className="py-1 flex items-center justify-between lg:hidden">
          <div className="border-2 border-[#04cafb] px-2 rounded-md">
            <i
              className={`fa-solid transition-all ease-out duration-500 mt-1 ${
                menuOpen ? "fa-xmark" : "fa-bars"
              } text-[25px] text-[#04cafb]`}
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </div>
          <div>
            <Link to="/">
              <img
                src="/images/logo-dark.png"
                alt="logo-dark.png"
                className="h-6"
              />
            </Link>
          </div>
          <div>
            <Link
              to="/contactus"
              className="inline-block p-2 text-[12px] bg-gradient-to-l from-[#04cafb] to-[#039dda] text-white rounded-md shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Mobile menu container with transition */}
        <div
          className={`flex flex-col gap-2 overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[500px] py-3" : "max-h-0"
          }`}
        >
          {mainMenu.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(!menuOpen)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#04cafb] text-[16px] font-semibold transition duration-300"
                    : "text-black text-[16px] font-[500] hover:text-[#04cafb] transition duration-300"
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
