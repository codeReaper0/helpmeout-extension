import { useState } from "react";
import Homepage from "../Components/Header";
import Nav from "../Components/nav";
import Process from "../Components/Process";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";
export default function Home() {

  return (
    <div className="relative bg-gray-200">
        <Homepage />
        <Feature />
       
        <Process />
        
    </div>
  );
}
