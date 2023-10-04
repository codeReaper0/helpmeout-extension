import React from "react"
import logo from "../assets/assets/logo.svg"
import fb from "../assets/assets/fb.svg"
import google from "../assets/assets/google.svg"
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <section className="flex justify-center items-center">
        <h1 className="top-5rem text-4xl mb-8 text-l-pri font-bold text-center md:text-start items-center flex gap-4 absolute top-10 left-8"> <img src={logo} alt="" className="w-[50px]"/>HelpMeOut</h1>
      <div className="flex flex-col relative top-[8rem] py-10 gap-6">
        <div className="text-center space-y-4">
          <h3 className="font-inter font-bold text-3xl tracking-wide">
            Log In or Sign Up
          </h3>
          <p className="font-normal text-sm tracking-wide">
            Join millions of others in sharing successful <br /> moves on
            HelpMeOut.
          </p>
        </div>
        <div className="space-y-5">
          <button className="bg-white border-2 border-black rounded-xl  flex justify-center items-center py-3 gap-4 w-full">
            <img src="/Google svg.svg" alt="" />
            <p className="font-inter flex gap-2 font-medium text-lg text-black-header-color tracking-wide">
              <img src={google} alt="" />Continue with Google
            </p>
          </button>
          <button className="bg-white border-2 border-black rounded-xl  flex justify-center items-center py-3 gap-4 w-full">
            <img src="/Facebook svg.svg" alt="" />
            <p className="font-inter flex gap-2 items-center font-medium text-lg text-black-header-color tracking-wide">
              <img src={fb} alt="" />Continue with Facebook
            </p>
          </button>
        </div>

        <div className="flex items-center w-90">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <form className="space-y-8">
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              id="Email"
              placeholder="Enter Your Email"
              className="border-[1px] px-2  border-black w-full py-3 rounded-xl"
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="Password"
              placeholder="Enter Your Password"
              className="border-[1px] px-2 border-black w-full py-3 rounded-xl"
            />
          </div>
          <NavLink to={"/details"}>
          <button className="w-full py-3 mt-8 rounded-lg bg-r-pri text-white">Sign Up</button></NavLink>
        </form>
      </div>
    </section>
  )
}

export default Login
