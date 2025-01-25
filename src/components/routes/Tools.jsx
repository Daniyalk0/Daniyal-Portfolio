import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { RxCross2 } from "react-icons/rx";
import { useMyContext } from "../../MyContext";
import { useTranslation } from "react-i18next";
import nayaLight from "../../assets/nayaLight.webp";
import tweed from "../../assets/tweed.webp";
import gsap from "gsap/all";
import Lottie from "lottie-react";
import animationData from "../../assets/404.json";
import Copy from "../Copy";

const Tools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isEnter, setIsEnter] = useState(false);
  const { isTransitioning, currentLang, textL, currentTa } = useMyContext();
  const { t, i18n } = useTranslation();
  useGSAP(() => {
    // Check if the viewport width is greater than a certain breakpoint (e.g., 768px)
    if (window.innerWidth >= 768) {
      // Animation for larger screens (e.g., tablets or desktops)
      gsap.fromTo(
        ".about",
        {
          opacity: 0,
          y: 100, // start from below the viewport
        },
        {
          opacity: 1,
          duration: 1.3,
          y: 0, // move to its original position
        }
      );
    } else {
      // Animation for smaller screens (e.g., mobile)
      gsap.fromTo(
        ".about",
        {
          opacity: 0,
          y: -100, // start from below the viewport
        },
        {
          opacity: 1,
          duration: 2,
          delay: 1.2,
          y: 0, // move above the viewport
        }
      );
    }
  }, []);
  return (
    <div className="   py-4  px-3 w-full h-full ">
      <div className="about border-[2px] xs:border-[#e3e3e3] rounded-[6vw] dark:border-[#292929] border-[#cdcdcd]  px-[2vw] xs:px-2 xs:py-3 lg:rounded-[4vw] lg:py-4 lg:px-0 xl:flex items-center gap-4   relative   overflow-hidden   xl:rounded-[3vw] flex-col lg:mt-[3rem]   z-[999] xl:mt-[3rem] xl:py-4 xl:pb-9 md:mt-[3rem] md:py-6 mt-[2.5rem]">
        <div
          style={{
            backgroundImage: `url('${nayaLight}')`,
          }}
          className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.13] md:brightness-[1.09] lg:brightness-[1.03] opacity-[1] dark:hidden  block"
        ></div>
        <div
          style={{ backgroundImage: `url('${tweed}')` }}
          className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.35] brightness-[0.37] opacity-[1] hidden dark:block"
        ></div>

        <div className="w-full flex items-center justify-center mt-2">
          <NavLink to={"/"}>
            <div
              className="border-2 border-[#d2d2d2] dark:border-[#292929]  w-fit rounded-full xl:p-3 overflow-hidden dark:text-zinc-200 text-zinc-800 relative lg:text-[1.3rem] lg:p-2 mt-[-0.3rem] xs:mt-[-0.4rem] xs:p-3"
              onMouseEnter={() => setIsEnter(true)}
              onMouseLeave={() => setIsEnter(false)}
            >
              <div
                style={{ backgroundImage: `url('${tweed}')` }}
                className={`absolute left-0 top-0 w-full h-full z-[-1]  ${
                  isEnter ? "brightness-0 " : "brightness-[0.39] "
                } transition-all duration-500 z-[1] hidden dark:block opacity-1`}
              ></div>
              <div
                style={{ backgroundImage: `url('${nayaLight}')` }}
                className={`absolute left-0 top-0 w-full h-full z-[-1]  ${
                  isEnter ? "opacity-1 " : "opacity-0"
                } transition-all duration-500 z-[1] block dark:hidden brightness-[1] `}
              ></div>
              <RxCross2 className="relative z-[3]" />
            </div>
          </NavLink>
        </div>
        <div
          className={` rounded-[6vw] md:rounded-[4vw]   w-full  h-auto  relative overflow-hidden xl:w-[40vw] xl:h-[450px] xl:rounded-[2vw] 2xl:w-[35.4w] lg:rounded-[3vw]  px-6 py-9   xl:px-9 xl:py-7  2xl:mr-4 2xl:ml-0  bg-[#ececec] dark:bg-transparent  md:items-center  flex-col  lg:h-[312px]  lg:px-8 lg:py-8 lg:w-[100%] md:h-[262px]  md:w-[70%]  md:px-7 md:py-8 xs:w-full xs:px-6 xs:py-8 xs:pb-14 `}
        >
          <div
            style={{
              backgroundImage: `url('${nayaLight}')`,
            }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.08] xs:brightness-[1.14] opacity-[1] dark:hidden"
          ></div>

          <div
            style={{ backgroundImage: `url('${tweed}')` }}
            className="absolute left-0 top-0 w-full h-full  z-[0] brightness-[0.35] opacity-[0.9] hidden dark:block"
          ></div>
          <p
            className={`font-[real] md:text-[1.2rem] lg:text-[1.08rem]  text-[1.15rem] leading-8  text-[#434343] md:leading-8 dark:text-[#cbcbcb] xl:leading-[2.2rem] xs:text-[1rem]  xl:text-[1.15rem]  relative z-[2]  ${
              isTransitioning ? "opacity-0 " : "opacity-1"
            } transition-opacity duration-700 ${!textL && "text-right rtl"} ${
              currentTa &&
              "xl:text-[1vw] lg:text-[1.1vw] xs:text-[4vw] text-[0.8rem] "
            }`}
          >
            Page not found!
          </p>
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ height: "100%", width: "100%" }}
          />
        </div>
  
      </div>

    </div>
  );
};

export default Tools;
