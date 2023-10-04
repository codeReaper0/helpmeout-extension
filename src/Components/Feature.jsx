import img from "../assets/assets/feature_img.svg"
import kite from "../assets/assets/circle.svg"
import share from "../assets/assets/share.svg"
import revisit from "../assets/assets/revisit.svg"

export default function Feature() {
  return (
    <div className="relative p-8 mt-[8rem] space-y-10 items-center py-[10rem]  flex  gap-8 justify-between p-6 flex-wrap bg-white">
      <div className="flex flex-col w-full py-4 bg-white gap-6 items-center justify-center">
        <p className="text-center text-black-header-color font-bold text-4xl">Features</p>
        <span className="text-center font-worksans text-grey-text-color text-md font-light">Key Highlights of Our Extension</span>
      </div>
      <div className="flex justify-between md:flex-row  flex-col  gap-4">
      <div className="flex justify-between flex-col gap-8">
        <ul className="flex flex-col items-start justify-start">
          <li className="  ">

            <p className="text-2xl flex items-center gap-6 mb-2 text-blue-header-color font-inter font-semibold">             <img src={kite} alt="" className="bg-blue-900 p-2 rounded-full"/>Simple Screen Recording</p>
            <span className="text-center  font-light">Effortless screen recording for everyone. Record with ease, no tech expertise required</span>
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-center">
          <li className="">

            <p className="text-2xl flex items-center gap-6 mb-2 text-blue-header-color font-inter font-semibold">             <img src={share} alt="" className="bg-blue-900 p-2 rounded-full" />Easy-to-Share Url</p>
            <span className="text-center text-grey-text-colorfont-worksans font-light">Access and review your past content effortlessly. Your recordings, always at your fingertips</span>
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-center">
          <li className=""><p

            className="text-2xl gap-5 flex mb-2 text-blue-header-color font-inter  items-center font-semibold">           <img src={revisit} alt="" className="bg-blue-900 p-2 rounded-full"/>Revisit Recordings  </p>
            <span className="text-center text-grey-text-color font-worksans font-light">Access and review your past content effortlessly. Your recordings, always at your fingertips</span>
          </li>
        </ul>
      </div>
        <img
          src={img}
          
          alt="" className="md:max-w-[40%] " />
      </div>
    </div>
  );
}
