import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import CustomCursor from "./components/CustomCursor";
import Mobile_nav from "./components/NavBar'/Mobile_nav";
import { Outlet } from "react-router-dom";
import seamless_paper_texture from "./assets/seamless_paper_texture.webp";
import nayaLight from "./assets/nayaLight.webp";
import dot from "./assets/dot.webp";
import tweed from "./assets/tweed.webp";
import star from "./assets/star.webp";
import UseLenis from "./UseLenis";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  UseLenis();
  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is less than 500px
      if (window.innerWidth < 500) {
        // If the screen is less than 500px, destroy Lenis
        if (lenis) {
          lenis.destroy();
        }
      } else {
        // Re-initialize Lenis if screen width is greater than or equal to 500px
        if (!lenis) {
          useLenis();
        }
      }
    };
  });


  return (
    // <Loader>
    <div
      className={`cont relative  min-h-screen   dark:bg-zinc-900 transition-opacity duration-500 overflow-hidden`}
    >
      <div
        style={{
          backgroundImage: `url('${star}')`,
        }}
        className={`absolute left-0 top-0 w-full h-full z-[0]  xs:brightness-[0.10] min-h-screen hidden dark:block opacity-[1] brightness-[0.11]  transition-all duration-300`}
      ></div>
      <div
        style={{ backgroundImage: `url('${star}')` }}
        className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[1.06]  brightness-[1] opacity-[1] dark:hidden block min-h-screen"
      ></div>
      <CustomCursor />
      <Mobile_nav />

      <Outlet />
    </div>
    // </Loader>
  );
}

export default App;
