import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import MenuPage from "./MenuPage";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/menu-page" element={<MenuPage />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
