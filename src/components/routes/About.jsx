import React, { useEffect, useState } from "react";
import nayaLight from "../../assets/nayaLight.webp";
import tweed from "../../assets/tweed.webp";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { RxCross2 } from "react-icons/rx";
import { useMyContext } from "../../MyContext";
import { useTranslation } from "react-i18next";
import Lang from '../Lang'

const About = () => {
  const [isEnter, setIsEnter] = useState(false);
  const { isTransitioning, currentLang, textL, currentTa } = useMyContext();
  const { t, i18n } = useTranslation();
  // useGSAP(() => {
  //   // Check if the viewport width is greater than a certain breakpoint (e.g., 768px)
  //   if (window.innerWidth >= 768) {
  //     // Animation for larger screens (e.g., tablets or desktops)
  //     gsap.fromTo(
  //       ".about",
  //       {
  //         opacity: 0,
  //         y: 100, // start from below the viewport
  //       },
  //       {
  //         opacity: 1,
  //         duration: 2,
  //         delay: 1.3,
  //         y: 0, // move to its original position
  //       }
  //     );
  //   } else {
  //     // Animation for smaller screens (e.g., mobile)
  //     gsap.fromTo(
  //       ".about",
  //       {
  //         opacity: 0,
  //         y: -100, // start from below the viewport
  //       },
  //       {
  //         opacity: 1,
  //         duration: 2,
  //         delay: 1.3,
  //         y: 0, // move above the viewport
  //       }
  //     );
  //   }
  // }, []);

  

  return (
    <div className="   py-4  px-3 w-full h-full ">
      <div className="about border-[2px]  dark:border-[#292929] border-[#cdcdcd] min-h-screen rounded-[5vw]  px-[2vw] xs:px-3 xs:py-3 lg:rounded-[4vw] lg:py-4 lg:px-0 xl:flex items-center gap-4   relative   overflow-hidden   xl:rounded-[3vw] flex-col    z-[999] xl:mt-[3rem] xl:py-4">
        <div
          style={{
            backgroundImage: `url('${nayaLight}')`,
          }}
          className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.02] opacity-[1] dark:hidden  block"
        ></div>
        <div
          style={{ backgroundImage: `url('${tweed}')` }}
          className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.35] brightness-[0.37] opacity-[1] hidden dark:block"
        ></div>

        <div className="w-full flex items-center justify-center mt-5">
          <div
            className="border-2 border-[#d2d2d2] dark:border-[#292929]  w-fit rounded-full xl:p-3 overflow-hidden dark:text-zinc-200 text-zinc-800 relative"
            onMouseEnter={() => setIsEnter(true)}
            onMouseLeave={() => setIsEnter(false)}
          >
            <div
              style={{ backgroundImage: `url('${tweed}')` }}
              className={`absolute left-0 top-0 w-full h-full z-[-1]  ${
                isEnter ? "brightness-[0.4] " : "brightness-0 "
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
        </div>
<div className="w-full h-full flex items-center justify-center gap-4">

        <div className=" w-full h-[210px] rounded-[5vw] md:rounded-[3vw] md:w-full border-[1px] relative overflow-hidden xs:border-[#e5e5e5] border-[#d2d2d2]    dark:border-[#292929] md:h-[230px] xl:w-[40vw] xl:h-[700px] xl:rounded-[2vw] 2xl:w-[35vw] lg:rounded-[2vw] xs:h-[190px] xl:px-9 xl:py-2 ">
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
          <div className="w-full relative flex flex-col gap-4">
            <p
              className={`font-[pop2]  text-[1.25rem] text-[#383838] dark:text-[#cbcbcb]  xs:text-[1.1rem] xs:mt-[5.7vw] xl:text-[1.6rem] xl:mt-[2vw] md:mt-[3vw]  relative z-[2]  ${
                isTransitioning ? "opacity-0 mt-[2rem]" : "opacity-1"
              } transition-opacity duration-700 ${!textL && "text-right rtl"} ${
                currentTa && "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
              }`}
            >
              {/* Passionate about web development and enjoy solving problems. */}
              {t("aboutPageTitle")}
            </p>
            <div className="w-full h-[1px] bg-[#d2d2d2]    dark:bg-[#292929]  relative" />
          </div>
          <div className="relative mt-7 flex flex-col gap-4">
            <h2
              className={`font-[real] uppercase tracking-[0.6vw] text-[1rem] dark:text-[#4e4e4e] text-gray-400 font-semibold  xs:text-[0.9rem] xs:tracking-[0.4vw] md:tracking-[0.3vw] md:text-[0.9rem] xl:text-[0.8rem] xl:tracking-[0.2vw] relative z-[1] ${
                isTransitioning ? "opacity-0" : "opacity-1"
              }  ${!textL && "text-right rtl"} transition-all duration-700 `}
            >
              {t("myStory")}
            </h2>
            <p
              className={`font-[real]  text-[1.25rem] text-[#434343] dark:text-[#cbcbcb] xl:leading-[2.2rem] xs:text-[1.1rem]  xl:text-[1.15rem]  relative z-[2]  ${
                isTransitioning ? "opacity-0 mt-[2rem]" : "opacity-1"
              } transition-opacity duration-700 ${!textL && "text-right rtl"} ${
                currentTa && "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
              }`}
            >
              {/* Passionate about web development and enjoy solving problems. */}
              {t("aboutText1")}
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
          <h2
              className={`font-[real] uppercase tracking-[0.6vw] text-[1rem] dark:text-[#4e4e4e] text-gray-400 font-semibold  xs:text-[0.9rem] xs:tracking-[0.4vw] md:tracking-[0.3vw] md:text-[0.9rem] xl:text-[0.8rem] xl:tracking-[0.2vw] relative z-[1] ${
                isTransitioning ? "opacity-0" : "opacity-1"
              }  ${!textL && "text-right rtl"} transition-all duration-700 `}
            >
              {t("whatIdo")}
            </h2>
            <p
              className={`font-[real]  text-[1.25rem] text-[#434343] dark:text-[#cbcbcb] xl:leading-[2.2rem] xs:text-[1.1rem]  xl:text-[1.15rem]  relative z-[2]  ${
                isTransitioning ? "opacity-0 mt-[2rem]" : "opacity-1"
              } transition-opacity duration-700 ${!textL && "text-right rtl"} ${
                currentTa && "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
              }`}
            >
              {/* Passionate about web development and enjoy solving problems. */}
              {t("aboutText2")}
            </p>
          </div>
        </div>
        <Lang className={'xl:w-[40vw]'}/>
                </div>
      </div>
    </div>
  );
};

export default About;
