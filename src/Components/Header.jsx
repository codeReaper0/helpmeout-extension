import arr from "../assets/assets/arrow-right.svg"
import h2 from "../assets/assets/hero2.svg"
import h1 from "../assets/assets/hero1.svg"
import h3 from "../assets/assets/hero3.svg"
import { NavLink } from "react-router-dom";
export default function header (){
  
  return (
    <div className="relative p-8 top-[2rem] mb-8  items-center py-[10rem] bg-primary flex row-reverse gap-8 justify-between p-6 flex-wrap bg-white">
      <div className="flex flex-col gap-8 md:w-[42%] items-start">
    <h2 className="leading-2 font-sora tracking-3 text-3xl font-bold text-black-header-color">Show Them Don't Just Tell Them</h2>
    <span className="text-md font-inter">Hello your friends and loved ones by creating and sending videos on how to get  things done on a website </span>
    <NavLink to={"https://github.com/fktona/extension"} className="px-4 py-2 gap-2 flex rounded-sm text-white bg-blue-900">Install HelpMeOut <img src={arr} alt=""/></NavLink></div>
<div className="grid grid-rows-2 grid-flow-col md:w-[38%] gap-4">
  <img
    src={h2}
    alt=""
    className=""
  />

  <img
    src={h1}
    alt=""
  />

  <img
    src={h3}
    alt=""
    className="row-span-2 bg-black grid-end h-[100%]"
  />
</div>

    </div>
    )
}