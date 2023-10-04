import React from "react";
import Logo from "../assets/assets/logo.svg";
import Edit from "../assets/assets/edit.svg";
import Copy from "../assets/assets/copy.svg";
import Facebook from "../assets/assets/fb.svg";
import Whatsapp from "../assets/assets/whatsapp.svg";
import Telegram from "../assets/assets/telegram.svg";
import video from "../assets/assets/video1.svg";
import {NavLink} from "react-router-dom";
const Details = () => {
  return (
    <div className="relative">
      <section className="flex bg-white flex-col  p-5 md:flex-row relative top-[3.8rem]">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="font-bold text-3xl text-[#141414]">
              Your video is ready!
            </h1>
            <p>name</p>
          </div>

          <div className="flex items-center">
            <p>Untitled_Video_20232509</p>
            <img src={Edit} alt="edit-icon" />
          </div>

          <div className="rounded-lg flex bg-[#dcdcdf] p-4 ">
            <input
              type="text"
              className="w-full p-2 outline-none bg-[#b6b3c620] placeholder-black"
              placeholder="Enter email of receiver"
            />
            <button className="px-4 bg-[#605C84] text-white rounded cursor-pointer">
              Send
            </button>
          </div>

          <div>
            <p>Video Url</p>
            <div className="rounded-lg flex-wrap border justify-center gap gap-4 flex items-center p-4 ">
              <p>https://www.helpmeout/video_esefd65</p>
              <button className="px-4 py-1 border-primary-color border-2 flex items-center gap-1 text-[#605C84] border-2 rounded cursor-pointer">
                <img src={Copy} alt="" className="p-2 " />
                Copy
              </button>
            </div>
          </div>

          <div>
            <p>Share your video</p>
            <div className="flex items-center gap-4">
              <button className="rounded-lg border-2 px-4 flex py-3 gap-1">
                <img src={Facebook} alt="" />
                Facebook
              </button>
              <button className="rounded-lg border-2 px-4 flex py-3 gap-1">
                <img src={Whatsapp} alt="" />
                Whatsapp
              </button>
              <button className="rounded-lg border-2 px-4 flex py-3 gap-1">
                <img src={Telegram} alt="" />
                Telegram
              </button>
            </div>
          </div>
        </div>
        <div className=" border border-y  border-black mx-2"></div>
        <img src={video} alt="" className="md:w-[45vw] mx-auto" />
        <div>Video</div>
      </section>
      <div className="top-[6rem] px-2   space-y-3 mb-[7rem] flex mx-auto items-center text-center flex-col justify-center md:w-[50%] relative">
        <h1 className="font-bold text-black-header mb-8">
          To Ensure the availability and privacy of your video we recommend
          saving it to your account
        </h1>{" "}
        <button className="bg-primary-color text-white px-2 py-1">
          save video
        </button>
        <p className="flex gap-2">
          Don't have an account{" "}
          <NavLink
            to={"/register"}
            className="border-b-2 border-primary text-primary-color"
          >
            Create account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Details;
