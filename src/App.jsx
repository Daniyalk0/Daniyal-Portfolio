import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import CustomCursor from "./components/CustomCursor";
import Mobile_nav from "./components/NavBar'/Mobile_nav";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";
import seamless_paper_texture from "./assets/seamless_paper_texture.webp";
import nayaLight from "./assets/nayaLight.webp";
import dot from "./assets/dot.webp";
import tweed from "./assets/tweed.webp";
import star from "./assets/star.webp";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Loader visible duration
  }, []);

  return (
    // <Loader>
      <div
        className={` relative min-h-screen   dark:bg-zinc-900 transition-opacity duration-500  `}
      >
        <div
          style={{
            backgroundImage: `url('${star}')`,
          }}
          className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.12] xs:brightness-[0.11] hidden dark:block opacity-[1] "
        ></div>
        <div
          style={{ backgroundImage: `url('${star}')` }}
          className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[1.06]  brightness-[1] opacity-[1] dark:hidden block"
        ></div>
        <CustomCursor />
        <Mobile_nav />

        
          <Outlet />

      </div>
    // </Loader>
  );
}

export default App;
