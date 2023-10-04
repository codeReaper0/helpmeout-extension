import { useState } from "react";
//import Header from "./Components/Header";
import Homepage from "../Components/Header";
//import Footer from "./Components/Footer";
import Nav from "../Components/nav";
import Process from "../Components/Process";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";
//import { AppContext } from "./assets/AppContext";
//import { NavLink, Outlet, useLocation, useRoutes } from "react-router-dom";
export default function Home() {

  return (
    <div className="relative bg-gray-200">
 
     
      
        <Homepage />
        <Feature />
       
        <Process />
        
    </div>
  );
}
