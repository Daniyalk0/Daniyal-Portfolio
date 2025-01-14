import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";

const Loader = ({ children }) => {
  const [opacity, setOpacity] = useState(true);

  useEffect(() => {
    // Remove the initial loader (in public/index.html)
    const initialLoader = document.getElementById("initial-loader");
    if (initialLoader) {
      initialLoader.remove();
    }

    // Set a timeout for the loader
    const timer = setTimeout(() => {
      setOpacity(false);
    }, 1990);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[2000] w-full h-full flex transition-opacity duration-300 items-center justify-center bg-white ${
          opacity ? "opacity-1" : "opacity-0 pointer-events-none"
        }`}
      >
        <Lottie
          animationData={loaderAnimation}
          loop={false}
          style={{ height: "300px", width: "300px" }}
        />
      </div>
      {!opacity && children}
    </>
  );
};

export default Loader;
