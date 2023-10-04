import { useState } from "react";
import Homepage from "./Homepage";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import { NavLink, Outlet, useLocation, useRoutes } from "react-router-dom";
export default function RootLayout() {

  return (
    <div className="relative bg-gray-200">   
        <Nav />
        <Outlet />
        <Footer />
    </div>
  );
}
