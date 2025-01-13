import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";

const Loader = ({ className, loader }) => {
  const [visibility1, setVisibility1] = useState(true);
  const [visibility2, setVisibility2] = useState(true);
  const [visibility3, setVisibility3] = useState(true);
  const [visibility4, setVisibility4] = useState(true);
  const [visibility5, setVisibility5] = useState(true);
  const [visibility6, setVisibility6] = useState(true);
  const [visibility7, setVisibility7] = useState(true);
  const [opacity, setOpacity] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisibility1(false);
    }, 1750);
    setTimeout(() => {
      setVisibility2(false);
    }, 1650);
    setTimeout(() => {
      setVisibility3(false);
    }, 1550);
    setTimeout(() => {
      setVisibility4(false);
    }, 1450);

    return () => {
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(true);
    }, 1800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`${
        opacity ? "opacity-0" : "opacity-1"
      } fixed  left-0 top-0 z-[2000] ${className} transition-all duration-500 w-full  h-[100vh] flex items-center justify-center  `}
    >
      <Lottie
        animationData={loaderAnimation}
        loop
        style={{ height: "300px", width: "300px", zIndex:1000 }}
      />
      <div className="w-full absolute flex flex-col items-center h-full ">
        <div
          className={` h-[100vh] w-[14rem] top-0 left-0  bg-zinc-600 absolute z-[999] ${
            !visibility4 && " top-[-150%]"
          } transition-all duration-700 `}
        />
        <div
          className={` h-[100vh] w-[14rem] top-0 left-[14%]  bg-zinc-700 absolute z-[999] ${
            !visibility3 && " top-[-150%]"
          } transition-all duration-700 `}
        />
        <div
          className={` h-[100vh] w-[14rem] top-0 left-[28%]  bg-zinc-800 absolute z-[999] ${
            !visibility2 && " top-[-150%]"
          } transition-all duration-700 `}
        />
        <div
          className={` h-[100vh] w-[14rem] top-0 left-[42%] bg-zinc-900 absolute z-[999] ${
            !visibility1 && " top-[-150%]"
          } transition-all duration-700 `}
        />
        <div
          className={` h-[100vh] w-[14rem] top-0 left-[56%] bg-zinc-800 absolute z-[999] ${
            !visibility2 && " top-[-150%]"
          } transition-all duration-700 `}
        />
        <div
          className={` h-[100vh] w-[14rem] top-0 left-[70%] bg-zinc-700 absolute z-[999] ${
            !visibility3 && " top-[-150%]"
          } transition-all duration-700 `}
        />
        <div
          className={` h-[100vh] w-[14rem] top-0 left-[85%] bg-zinc-600 absolute z-[999] ${
            !visibility4 && " top-[-150%]"
          } transition-all duration-700 `}
        />

      </div>
    </div>
  );
};

export default Loader;
