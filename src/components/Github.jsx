import React, { useEffect, useState } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import tweed from "../assets/tweed.webp";
import nayaLight from "../assets/nayaLight.webp";
import seamless_paper_texture from "../assets/seamless_paper_texture.webp";
import { useMyContext } from "../MyContext";

const Github = () => {
  const [isEnter, setIsEnter] = useState(false);
  const [isLight, setIsLight] = useState(false);
 const {themeMode, themeSwitch, setThemeMode} = useMyContext()

  useGSAP(() => {
    gsap.to(".arrow", {
      bottom: isEnter ? "1rem" : "0.7rem",
      left: isEnter ? "3rem" : "0.7rem",
      duration: 0.3,
      ease: "power1.out",
    });
  }, [isEnter]);
  useGSAP(() => {
    gsap.to(".arrow2", {
      bottom: isEnter ? "0.7rem" : "0.5rem",
      left: isEnter ? "0.7rem" : "-1.5rem",
      duration: 0.3,
      ease: "power1.out",
    });
  }, [isEnter]);

//   useGSAP(() => {

//     gsap.fromTo(
//       ".github",
//       { scale: "0", translateX: "100%" },
//     { 
//       scale: "1", 
//       translateX: "0%", 
//       duration: 1.6, 
//       delay: 0.5, 
//       stagger: 0.2, // Adds a delay of 0.2 seconds between each element's animation
//       force3D: true 
//     }
//   );
// })
  
  

  return (
    <div className="github flex items-center gap-3 xl:flex-col relative w-full">
      <a
        onMouseEnter={() => setIsEnter(true)}
        onMouseLeave={() => setIsEnter(false)}
        href="https://github.com/Daniyalk0"
        target="_blank"
        className="border-[1px] dark:border-[#292929] z-[5] dark:bg-transparent 
      xs:border-[#e5e5e5] border-[#d2d2d2]  w-[53vw] md:w-[53%] h-[200px] rounded-[6vw] md:rounded-[4vw] md:h-[270px]  font-[real2] py-3 px-4 relative overflow-hidden flex items-center justify-center xl:w-[19vw] xl:h-[230px] xl:rounded-[2.2vw] bg-zinc-100 dark:bg-zinc-900"
      >
        <div
          style={{ backgroundImage: `url('${tweed}')` }}
          className={`absolute left-0 top-0 w-full h-full z-[-1]  ${
            isEnter ? "brightness-[0.4] " : "brightness-0 opacity-0"
          } transition-all duration-500 z-[1] hidden dark:block opacity-1`}
        ></div>
        <div
          style={{ backgroundImage: `url('${nayaLight}')` }}
          className={`absolute left-0 top-0 w-full h-full z-[-1]  ${
            isEnter ? "opacity-1 " : "opacity-0"
          } transition-all duration-500 z-[1] block dark:hidden brightness-[1.04] `}
        ></div>
 <div
            style={{
              backgroundImage: `url('${nayaLight}')`,
            }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.08] xs:brightness-[1.14] opacity-[1] dark:hidden"
          ></div>

        <div
          style={{ backgroundImage: `url('${tweed}')` }}
          className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.35] opacity-[0.9] hidden dark:block"
        ></div>

        <div className="dark:text-zinc-400 text-zinc-800 text-[7rem] relative z-[2] ">
          <VscGithubAlt />
        </div>

        {/* <div className="overflow-hidden  absolute bottom-3 w-full flex items-center justify-center">
          <h2
            className={`text-zinc-700  text-[real2] font-semibold transition-all duration-300  ${
              isEnter ? "-translate-y-[0]" : "translate-y-[100%]"
            }`}
          >
            Way to code —
          </h2>
        </div> */}
        <div className="icon border-[1px]  dark:border-[2px] p-[2.2vw] rounded-full w-fit dark:border-[#333333] border-[#00000038] dark:text-[#bdbdbd] text-[#636363] text-[3.4vw] flex items-center justify-center absolute right-[3%] bottom-[5%] rotate-[-50deg] xs:text-[0.6rem] xs:p-[2.5vw] xs:right-[4%] xs:bottom-[6%] md:text-[1rem] md:p-5   md:right-[1.8%] xl:right-[5%] xl:bottom-[7%]  z-[10] bg-[#ffffff] dark:bg-zinc-900 xl:p-5 overflow-hidden">
          <FaArrowRight className={`arrow2 md:absolute`} />
          <FaArrowRight className="arrow md:block hidden md:absolute" />
        </div>
      </a>

      <div
        className=" border-[1px] dark:border-[#292929] 
       xs:border-[#e5e5e5] border-[#d2d2d2]  w-[39vw] md:w-[60%]  h-[200px] rounded-[6vw] md:rounded-[4vw] md:h-[270px] flex items-center bg-[#eeeeee] dark:bg-zinc-900 justify-center xl:rounded-[2.2vw] xl:w-[19vw] xl:h-[120px] overflow-hidden relative"
      >
         <div
                    style={{
                      backgroundImage: `url('${nayaLight}')`,
                    }}
                    className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.08] xs:brightness-[1.14] opacity-[1] dark:hidden"
                  ></div>
        
                  <div
                    style={{ backgroundImage: `url('${tweed}')` }}
                    className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.35] opacity-[0.9] hidden dark:block"
                  ></div>
        <div
          className={`icon w-[6rem] md:w-[9rem] xl:w-[6rem] xl:h-[45%] md:h-[28%] h-[30%] overflow-hidden border-[2px] border-gray-300 dark:border-[#363636] rounded-full flex items-center  relative`}
          onClick={themeSwitch}
        >
         <div
                    style={{
                      backgroundImage: `url('${nayaLight}')`,
                    }}
                    className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.11] opacity-[1] dark:hidden"
                  ></div>
        
                  <div
                    style={{ backgroundImage: `url('${tweed}')` }}
                    className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.40] opacity-[1] hidden dark:block"
                  ></div>
          <div
            className={`text-[#F2D99F] p-6 md:p-8 ml-1 bg-zinc-800 w-fit rounded-full absolute  ${
              themeMode === "light"
                ? "left-0"
                : "left-[42%] md:left-[50%] xl:left-[43%]"
            } transition-all duration-300 flex items-center justify-center xl:p-[1.68vw] dark:bg-zinc-900`}
          >
            <MdDarkMode
              className={`absolute ${
                themeMode === "light"
                  ? "opacity-0 scale-0"
                  : "opacity-1 scale-1"
              } transition-all duration-300 text-[6vw] md:text-[5vw] xl:text-[1.6vw]`}
            />
            <MdLightMode
              className={`absolute ${
                themeMode === "dark"
                  ? " scale-0 opacity-0 "
                  : "opacity-1 scale-1 "
              } transition-all duration-300 text-[6vw] md:text-[5vw] xl:text-[1.6vw]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
