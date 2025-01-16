import React, { useEffect, useRef, useState } from "react";
import { GoHome } from "react-icons/go";
import { RiToolsLine } from "react-icons/ri";
import { LuFolder } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import nayaLight from "../../assets/nayaLight.webp";
import tweed from "../../assets/tweed.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";


function Mobile_nav() {
  const [hoveredIcon, setHoveredIcon] = useState("");
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(true);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      // Hide the navbar on any scroll
      setIsVisible(false);

      // Show the navbar after scrolling stops
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(true), 600); // Adjust the delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const icons = [
    { id: "first", Icon: GoHome, text: "Home" },
    { id: "two", Icon: RiToolsLine, text: "Tools" },
    { id: "three", Icon: LuFolder, text: "Projects" },
    { id: "four", Icon: IoMdInformationCircleOutline, text: "About" },
  ];
  const changeRoute = (route) => {
    if (route === "Home") {
      navigate(`/`);
    } else {
      navigate(`/${route}`);
    }
    setHoveredIcon(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpacity(false);
    }, 2000);
  }, []);

  useGSAP(() => {

  
      // Animation for smaller screens (e.g., mobile)
      gsap.fromTo(
        ".nav",
        {
          opacity: 0,
          y: -100, // start from below the viewport
        },
        {
          opacity: 1,
          duration: 2,
          delay: 1.3,
          y: 0, // move above the viewport
        }
      );
    
  }, []);
  


  return (
    <div
      className={` nav  z-[1000]  fixed left-1/2 xs:left-1/2  -translate-x-1/2 xs:top-[2.7vw] xs:-translate-x-1/2  h-fit top-[0.7vw]`}
    >
      <div className={`flex items-center justify-center xs:gap-4 w-full ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
        <div className="flex gap-3 p-3 md:gap-6 xl:gap-4 g items-center  dark:bg-transparent xs:gap-3 xl:p-3 rounded-full xs:p-2  w-fit z-[999] relative border-[1px] xs:border-[#ececec] xl:shadow-zinc-500 border-[#d2d2d2] dark:border-[#22222200] shadow-md  shadow-[#a6a6a690] dark:shadow-[#1c1c1c]">
         <div
                     style={{
                       backgroundImage: `url('${nayaLight}')`,
                     }}
                     className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.11]  opacity-[1] dark:hidden rounded-full"
                   ></div>
          <div
            style={{ backgroundImage: `url('${tweed}')` }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.43] xs:brightness-[0.42] opacity-[0.9] hidden dark:block rounded-full"
          ></div>

          {icons.map(({ id, Icon, text }) => (
            <div
              onClick={() => changeRoute(text)}
              key={id}
              className="dark:text-white text-[5vw] md:text-[3vw] font-bold relative group xl:text-[1.8vw] xs:text-[6vw]"
              onMouseEnter={() => setHoveredIcon(id)}
              onMouseLeave={() => setHoveredIcon("")}
            >
              <Icon className=""/>

              {/* Text */}
              <h2
                className={`font-[anzo5] dark:bg-[#ffffff33] bg-[#46464628] px-2 rounded-md absolute xl:text-[0.9vw] text-[2vw] xl:left-[-1vw] md:left-[-1.2vw] left-[-1.2vw] xs:left-[-2.7vw] xs:text-[2.5vw] md:text-[1.5vw] transition-all duration-300 pointer-events-none 
                ${
                  hoveredIcon === id
                    ? "top-[2.3vw] opacity-100"
                    : "top-[-0.3vw] opacity-0"
                } ${id === "four" ? "ml-[0.5vw]" : ""} ${
                  id === "two" ? "ml-[0.3vw]" : ""
                }`}
              >
                {text}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mobile_nav;
