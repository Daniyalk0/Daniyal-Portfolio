import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Loader = ({children}) => {
  const [opacity, setOpacity] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setOpacity(false)
    }, 1180);
  }, [])


  
  return (
    <>
    <div className={`fixed top-0 left-0 z-[2000] w-full h-full flex transition-all duration-300 items-center justify-center `}>
      <div className={`w-[50%] bg-zinc-900 h-full absolute ${opacity ? 'left-0' : ' left-[-100%] '} transition-all duration-700 flex items-center justify-end `}>
        <h1 className="text-[3rem] text-white">h</h1>
      </div>
      <div className={`w-[50%] bg-zinc-900 h-full absolute ${opacity ? 'right-0 ' : 'right-[-100%]'} transition-all duration-700 flex items-center justify-start`}><h1 className="text-[3rem] text-white">i</h1></div>
       {/* <Lottie
        animationData={loaderAnimation}
        loop={false} // Disable loop if the loader ends
        style={{ height: "300px", width: "300px" }}
        />  */}

    </div>
    {children}
        </>
  );
};

export default Loader;
