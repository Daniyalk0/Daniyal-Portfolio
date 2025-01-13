import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import CustomCursor from "./components/CustomCursor";
import Mobile_nav from "./components/NavBar'/Mobile_nav";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
  const [loader, setLoader] = useState(true);
  const [Hide, setHide] = useState(false);
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
    setTimeout(() => {
      setOpacity(true);
    }, 2000);

  }, []);
  


  useEffect(() => {
    document.body.style.overflow = loader ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loader]);

  return (
    <>
      <Loader className={`${!loader && "hidden"} `}  loader={loader}/>

      <div
        className={`${
          opacity ? "opacity-1" : "opacity-0"
        } relative min-h-screen  bg-gray-400 dark:bg-zinc-900 transition-all duration-500`}
      >
        <div
          style={{
            backgroundImage: `url('./src/assets/seamless_paper_texture.webp')`,
          }}
          className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.1] opacity-[1] dark:hidden"
        ></div>
        <div
          style={{ backgroundImage: `url('./src/assets/tweed.webp')` }}
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
