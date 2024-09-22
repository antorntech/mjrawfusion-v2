import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Industries from "../pages/Industries";
import Divisions from "../pages/Divisions";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
