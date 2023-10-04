 import work from "../assets/assets/works.svg"


export default function Feature() {
  return (
    <div className="relative px-8 mt-[8rem]  items-center py-[10rem] flex  gap-8 justify-between p-6 flex-wrap bg-white">
      <div className="flex flex-col w-full py-4 bg-white gap-6 items-center justify-center">
        <p className="text-center text-4xl text-black-header-color font-bold ">How it Works</p>
        <span className="text-center text-md font-light">Key Highlights of Our Extension</span>
      </div>
      <div className="flex justify-between  gap-4">
      <div className="flex justify-between flex-col md:flex-row  lq gap-4">
        <ul className="flex flex-col items-start justify-center">
          <li className="text-center">
                      
                                             <p className="text-3xl text-white bg-blue-900 w-fit  mx-auto p-3 px-6 mb-2 rounded-full font-semibold">1        </p>
            <p className="font-inter font-semibold text-2xl text-blue-header-color font-semibold">Simple Screen Recording</p>
            <span className="font-worksans font-normal text-lg text-grey-text-color">Click the Start Recording button in our extension.  choose which part of your screen to capture and who you want to send it to</span>
                        <img src={work} alt="" />
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-center">
          <li className="text-center">
                       <p className="text-3xl text-white bg-blue-900 w-fit  mx-auto p-3 px-6 mb-2 rounded-full font-semibold">2</p>
            <p className="font-inter font-semibold text-2xl text-blue-header-color">Easy-to-Share Url</p>
            <span className="font-worksans font-normal text-lg text-grey-text-color">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</span>
                        <img src={work} alt="" />
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-center">
          <li className="text-center">
                         <p className="text-3xl text-white bg-blue-900 w-fit  mx-auto p-3 px-6 mb-2 rounded-full font-semibold">3    </p>
            <p className="font-inter font-semibold text-2xl text-blue-header-color">Revisit Recordings</p>
            <span className="text-center font-worksans font-normal text-lg text-grey-text-color">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</span
            >
                        <img src={work} alt="" />
          </li>
        </ul>
      </div>

      </div>
    </div>
  );
}
