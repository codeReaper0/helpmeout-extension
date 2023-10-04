import logo from "../assets/assets/logo-white.svg"


export default function Feature() {
  return (
    <div className="relative  py-[8rem]  flex gap-8 w-full j p-6 flex-wrap bg-r-pri text-white ">
    
      <div className="flex md:flex-row flex-col items-center md:justify-between items-start w-full gap-8 md:items-start md:py-6 flex-wrap ">
              <h4 className="text-xl flex  gap-4 justify-center items-center font-bold ">    <img src={logo} alt="" />HelpmMeOut</h4>
          <ul className="flex flex-col items-center gap-2 text-centerr">
          <h4 className="font-bold ">About</h4>
            <li className="font-semibold">Contact Us</li>
            <li className="font-semibold">Privacy Policy</li>
            
          </ul>
        
          <ul className="flex flex-col gap-2 items-center t3xt-centerter font-bold
          ">Menu
            <li className="font-semibold">Home</li>
            <li className="font-semibold">Converter</li>
            <li className="font-semibold">How it Works</li>
          </ul>
        
          <ul className="flex flex-col items-center gap-2 t3xt-centerter font-bold">Screen Record
            <li className="font-semibold">Browser Window</li>
            <li className="font-semibold">Desktop</li>
            <li className="font-semibold">Application</li>
          </ul>
        
      </div>
    </div>
  );
}

