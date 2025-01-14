import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";

const Loader = () => {
  const [opacity, setOpacity] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setOpacity(false)
    }, 1990);
  }, [])
  
  return (
    <div className={`fixed top-0 left-0 z-[2000] w-full h-full flex transition-all duration-300 items-center justify-center bg-white ${opacity ? 'opacity-1' : 'opacity-0'}`}>
      <Lottie
        animationData={loaderAnimation}
        loop={false} // Disable loop if the loader ends
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default Loader;
