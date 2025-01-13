import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import CustomCursor from "./components/CustomCursor";
import Mobile_nav from "./components/NavBar'/Mobile_nav";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";
import seamless_paper_texture from "./assets/seamless_paper_texture.webp";
import tweed from "./assets/tweed.webp";

function App() {
  const [loader, setLoader] = useState(false);
  const [Hide, setHide] = useState(false);
  const [opacity, setOpacity] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 1500);
  // }, []);

  useEffect(() => {
    document.body.style.overflow = loader ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loader]);

  return (
    <>
      <div
        className={` relative min-h-screen  bg-gray-400 dark:bg-zinc-900 transition-opacity duration-500`}
      >
        <div
          style={{
            backgroundImage: `url('${seamless_paper_texture}')`,
          }}
          className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.1] opacity-[1] dark:hidden"
        ></div>
        <div
          style={{ backgroundImage: `url('${tweed}')` }}
          className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.35] opacity-[0.9] hidden dark:block"
        ></div>
        <CustomCursor />
        <Mobile_nav />
        <Outlet />
      </div>
    </>
  );
}

export default App;
