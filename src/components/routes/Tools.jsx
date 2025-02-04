import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { RxCross2 } from "react-icons/rx";
import { useMyContext } from "../../MyContext";
import { useTranslation } from "react-i18next";
import nayaLight from "../../assets/nayaLight.webp";
import tweed from "../../assets/tweed.webp";
import gsap from "gsap/all";
import Copy from "../Copy";
import html from "../../assets/logo/html.png";
import css from "../../assets/logo/css.png";
import js from "../../assets/logo/js.png";
import react from "../../assets/logo/react.png";
import redux from "../../assets/logo/redux.png";
import tailwind from "../../assets/logo/tailwind.png";
import git from "../../assets/logo/git.png";
import github from "../../assets/logo/github.png";
import vscode from "../../assets/logo/vscode.png";
import appwrite from "../../assets/logo/appwrite.png";
const StackCom = React.lazy(() => import("./StackCom"));

const Tools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isEnter, setIsEnter] = useState(false);
  const { isTransitioning, currentLang, textL, currentTa } = useMyContext();
  const { t, i18n } = useTranslation();

  const [progressValues, setProgressValues] = useState([
    { id: 1, value: 0, target: 100, delay: 0 }, // Starts immediately
    { id: 2, value: 0, target: 80, delay: 1000 },
    { id: 3, value: 0, target: 60, delay: 1500 },
    { id: 4, value: 0, target: 90, delay: 2000 },
    { id: 5, value: 0, target: 90, delay: 2500 },
    { id: 6, value: 0, target: 90, delay: 3000 },
    { id: 7, value: 0, target: 70, delay: 3500 },
    { id: 8, value: 0, target: 50, delay: 4000 },
    { id: 9, value: 0, target: 80, delay: 4500 },
  ]);

  useEffect(() => {
    const intervals = [];

    progressValues.forEach((bar, index) => {
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          setProgressValues((prev) =>
            prev.map((p) =>
              p.id === bar.id && p.value < p.target
                ? { ...p, value: p.value + 1 }
                : p
            )
          );
        }, 20); // Speed of increment

        intervals.push(interval);
      }, bar.delay); // Delay before starting

      intervals.push(timeout);
    });

    return () => intervals.forEach((interval) => clearInterval(interval)); // Cleanup
  }, []);

  useGSAP(() => {
    gsap.killTweensOf(".tools"); // Stop any existing animations to prevent conflicts
  
    // Adjust animation based on screen width
    gsap.fromTo(
      ".tools",
      { opacity: 0, y: window.innerWidth >= 768 ? -100 : -70 }, // Adjust based on screen size
      { opacity: 1, y: 0, duration: 1.3, ease: "power2.out" } // Smooth easing for better effect
    );
  }, []);
  
  

  //   useGSAP(() => {
  // gsap.from('.html', {
  // width:'0%',
  // duration:2,
  // })
  //   })
  return (
    <div className="   py-4  px-2 w-full h-full ">
      <div className="tools border-[2px] xs:border-[#e3e3e3] rounded-[6vw] dark:border-[#292929] border-[#cdcdcd]  px-[2vw] xs:px-2 xs:py-2 lg:rounded-[4vw] lg:py-7 lg:px-0 lg:flex items-center justify-center gap-4   relative   overflow-hidden py-4  xl:rounded-[3vw] flex-col lg:mt-[3rem]   z-[999] xl:mt-[3rem] xl:py-8  md:mt-[3rem] md:py-5 mt-[2.5rem]  s:mt-[3rem]">
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
   

        <div className="w-full h-full flex items-center justify-center gap-4 flex-col  relative xs:gap-3  md:mt-0 lg:w-[70%]">
          <div className="w-full flex items-center justify-center gap-4 ">
            <div className=" w-full  rounded-[6vw] md:rounded-[4vw] border-[1px] relative overflow-hidden xs:border-[#e5e5e5] border-[#d2d2d2]    dark:border-[#292929] lg:rounded-[2vw]  xl:px-9 xl:pt-2  lg:px-8 md:px-7  h-auto md:py-4 px-6 py-4  xl:rounded-[2vw] xs:px-5">
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
              <p
                className={`font-[pop2]  text-[1.25rem] text-[#313131] dark:text-[#cbcbcb]  xs:text-[1.1rem] xl:text-[1.4rem] xl:mt-[2vw]   relative z-[2]  ${
                  isTransitioning ? "opacity-0 " : "opacity-1"
                } transition-opacity duration-700 ${
                  !textL && "text-right rtl"
                } ${
                  currentTa && "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                }`}
              >
                {/* Passionate about web development and enjoy solving problems. */}
                Languages
              </p>
              <StackCom
                icon={html}
                bg="bg-[#E34F26] "
                tweed={tweed}
                nayaLight={nayaLight}
                progress={progressValues[0].value}
                classname={"justify-center"}
                barClass={"w-[70%]"}
              />

              <div className="w-[100%] h-[1px] relative my-3 mx-auto bg-gradient-to-r from-transparent via-[#b5b5b5] to-transparent dark:via-[#434343]" />
              <StackCom
                icon={css}
                bg={"bg-[#0C73B8]"}
                tweed={tweed}
                nayaLight={nayaLight}
                progress={progressValues[1].value}
                classname={"justify-center"}
                barClass={"w-[70%]"}
              />
              <div className="w-[100%] h-[1px] relative my-3 mx-auto bg-gradient-to-r from-transparent via-[#b5b5b5] to-transparent dark:via-[#434343]" />
              <StackCom
                icon={js}
                bg={"bg-[#F4E11E]"}
                tweed={tweed}
                nayaLight={nayaLight}
                progress={progressValues[2].value}
                classname={"justify-center"}
                barClass={"w-[70%]"}
              />
              <div className="w-[100%] h-[1px] relative my-3 mx-auto bg-gradient-to-r from-transparent via-[#b5b5b5] to-transparent dark:via-[#434343]" />
            </div>
            <div className=" w-full md:w-[50%] rounded-[6vw] md:rounded-[4vw]  border-[1px] relative overflow-hidden xs:border-[#e5e5e5] border-[#d2d2d2]   dark:border-[#292929]  lg:rounded-[2vw]   xl:pb-[0vw] lg:px-10 md:px-12  h-auto md:py-4 px-6 py-4  xl:rounded-[2vw] xl:px-11 md:flex hidden items-center justify-center flex-col xl:w-[40%] xs:px-5">
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
              <p
                className={`font-[pop2] h-fit  text-[1.25rem] text-[#313131] dark:text-[#cbcbcb]  xs:text-[1.1rem] xl:text-[1.4rem] xl:mt-[0vw]   relative z-[2]  ${
                  isTransitioning ? "opacity-0 " : "opacity-1"
                } transition-opacity duration-700 ${
                  !textL && "text-right rtl"
                } ${
                  currentTa && "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                }`}
              >
                {/* Passionate about web development and enjoy solving problems. */}
                Tools
              </p>
              <div className="flex items-center gap-4 md:gap-3 lg:gap-0 xl:gap-0  w-full justify-between lg:justify-between  ">
                <StackCom
                  icon={git}
                  bg="bg-[#DE4C36] "
                  tweed={tweed}
                  nayaLight={nayaLight}
                  progress={progressValues[6].value}
                  classname={
                    "flex-col md:h-[13.3rem] lg:h-[14.5rem] xl:h-[16.9rem] items-start justify-start w-[0%]"
                  }
                  barClass={
                    "rotate-[90deg] md:w-[10rem] lg:w-[10.4rem] xl:w-[12rem] md:mt-[4.7rem] lg:mt-[4.7rem] xl:mt-[5.5rem]"
                  }
                  cont={"mt-0 md:mt-3 w-0"}
                  textClass={
                    "xl:top-[14.8rem] xl:left-[-1.9rem] md:top-[12.4rem] md:left-[-2rem] lg:top-[13.2rem]"
                  }
                />
                <div className="w-[100%] left-2/3 -translate-x-1/2 h-[1px] absolute  bg-gradient-to-r from-transparent via-[#b5b5b5] to-transparent dark:via-[#434343] rotate-90 " />
                <StackCom
                  icon={github}
                  bg="bg-[#343943] "
                  tweed={tweed}
                  nayaLight={nayaLight}
                  progress={progressValues[7].value}
                  classname={
                    "flex-col md:h-[13.3rem] lg:h-[14.5rem] xl:h-[16.9rem] items-start justify-start w-[0%]"
                  }
                  barClass={
                    "rotate-[90deg] md:w-[10rem] lg:w-[10.4rem] xl:w-[12rem] md:mt-[4.7rem]   lg:mt-[4.7rem] xl:mt-[5.5rem]"
                  }
                  cont={"mt-0 md:mt-3 w-0"}
                  textClass={
                    "xl:top-[14.8rem] xl:left-[-1.9rem] md:top-[12.4rem] md:left-[-2rem] lg:top-[13.2rem]"
                  }
                />
                <div className="w-[100%] left-1/3 -translate-x-1/2 h-[1px] absolute  bg-gradient-to-r from-transparent via-[#b5b5b5] to-transparent dark:via-[#434343] rotate-90 " />
                <StackCom
                  icon={vscode}
                  bg="bg-[#24ADF3] "
                  tweed={tweed}
                  nayaLight={nayaLight}
                  progress={progressValues[8].value}
                  classname={
                    "flex-col md:h-[13.3rem] lg:h-[14.5rem] xl:h-[16.9rem] items-start justify-start w-[0%]"
                  }
                  barClass={
                    "rotate-[90deg] md:w-[10rem] lg:w-[10.4rem] xl:w-[12rem] md:mt-[4.7rem]  lg:mt-[4.7rem] xl:mt-[5.5rem]"
                  }
                  cont={"mt-0 md:mt-3 w-0"}
                  textClass={
                    "xl:top-[14.8rem] xl:left-[-1.9rem] md:top-[12.4rem] md:left-[-2rem] lg:top-[13.2rem]"
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <div className=" w-full  rounded-[6vw] md:rounded-[4vw]  md:w-full border-[1px] relative overflow-hidden xs:border-[#e5e5e5] border-[#d2d2d2]    dark:border-[#292929]  xl:w-full lg:rounded-[2vw]  xl:px-9 xl:pt-2  lg:px-8 md:px-7  h-auto md:py-4 px-6 py-4  xl:rounded-[2vw] xs:px-5">
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
              <p
                className={`font-[pop2]  text-[1.25rem] text-[#313131] dark:text-[#cbcbcb]  xs:text-[1.1rem] xl:text-[1.4rem] xl:mt-[2vw]   relative z-[2]  ${
                  isTransitioning ? "opacity-0 " : "opacity-1"
                } transition-opacity duration-700 ${
                  !textL && "text-right rtl"
                } ${
                  currentTa && "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                }`}
              >
                {/* Passionate about web development and enjoy solving problems. */}
                Library and Framworks
              </p>

              <StackCom
                icon={react}
                bg="bg-[#0AD9FE] "
                tweed={tweed}
                nayaLight={nayaLight}
                progress={progressValues[3].value}
                barClass={"w-[70%] md:w-[80%]"}
                classname={"justify-center"}
                textClass={'md:right-[6.4%] lg:right-[1.6rem] xl:right-[2.3rem]'}
              />

              <div className="w-[100%] h-[1px] relative my-3 mx-auto bg-gradient-to-r from-transparent via-[#b5b5b5] to-transparent dark:via-[#434343]" />
              <StackCom
                icon={redux}
                bg="bg-[#774BBD] "
                tweed={tweed}
                nayaLight={nayaLight}
                progress={progressValues[4].value}
                barClass={"w-[70%] md:w-[80%]"}
                classname={"justify-center"}
                textClass={'md:right-[6.4%] lg:right-[1.6rem] xl:right-[2.3rem]'}
              />

              <div className="w-[100%] h-[1px] relative my-3 mx-auto bg-gradient-to-r from-transparent via-[#b5b5b5] to-transparent dark:via-[#434343]" />
              <StackCom
                icon={tailwind}
                bg="bg-[#06B6D4] "
                tweed={tweed}
                nayaLight={nayaLight}
                progress={progressValues[5].value}
                barClass={"w-[70%] md:w-[80%]"}
                classname={"justify-center"}
                textClass={'md:right-[6.4%] lg:right-[1.6rem] xl:right-[2.3rem]'}
              />

              <div className="w-[100%] h-[1px] relative my-3 mx-auto bg-gradient-to-r from-transparent via-[#b5b5b5] to-transparent dark:via-[#434343]" />
            </div>
            <div className=" w-full md:w-[20%] rounded-[6vw] md:rounded-[4vw]  border-[1px] relative overflow-hidden xs:border-[#e5e5e5] border-[#d2d2d2] dark:border-[#292929]  lg:rounded-[2vw]   xl:pb-[0vw] lg:px-10 md:px-12  h-auto md:py-4 px-6 py-4  xl:rounded-[2vw] xl:px-11 md:flex hidden items-center justify-center flex-col xl:w-[20%] xs:px-5">
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
              <p
                className={`font-[pop2] h-fit  text-[1.25rem] text-[#313131] dark:text-[#cbcbcb]  xs:text-[1.1rem] xl:text-[1.4rem] xl:mt-[0vw]   relative z-[2]  ${
                  isTransitioning ? "opacity-0 " : "opacity-1"
                } transition-opacity duration-700 ${
                  !textL && "text-right rtl"
                } ${
                  currentTa && "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                }`}
              >
                {/* Passionate about web development and enjoy solving problems. */}
                BAAS
              </p>

                <StackCom
                         icon={appwrite}
              bg="bg-[#FA3870] "
                  tweed={tweed}
                  nayaLight={nayaLight}
                  progress={progressValues[6].value}
                  classname={
                    "flex-col md:h-[13.3rem] lg:h-[14.5rem] xl:h-[16.9rem] items-start justify-start w-[0%]"
                  }
                  barClass={
                    "rotate-[90deg] md:w-[10rem] lg:w-[10.4rem] xl:w-[12rem] md:mt-[4.7rem] lg:mt-[4.7rem] xl:mt-[5.5rem]"
                  }
                  cont={"mt-0 md:mt-3 w-0"}
                  textClass={
                    "xl:top-[14.9rem] xl:left-[-1.9rem] md:top-[12.4rem] md:left-[-2rem] lg:top-[13.2rem]"
                  }
                />
            </div>
          </div>



          <div className=" w-full  rounded-[6vw] md:rounded-[4vw]  md:w-full border-[1px] relative overflow-hidden xs:border-[#e5e5e5] border-[#d2d2d2]    dark:border-[#292929]  xl:w-[40vw] 2xl:w-[35vw] lg:rounded-[2vw]  xl:px-9 xl:pt-2 lg:w-[45vw]  lg:px-8 md:px-7  h-auto md:py-4 px-6 py-4  xl:rounded-[2vw] flex md:hidden flex-col xs:px-5">
            <p
              className={`font-[pop2]  text-[1.25rem] text-[#313131] dark:text-[#cbcbcb]  xs:text-[1.1rem] xl:text-[1.4rem] xl:mt-[2vw]   relative z-[2]  ${
                isTransitioning ? "opacity-0 " : "opacity-1"
              } transition-opacity duration-700 ${!textL && "text-right rtl"} ${
                currentTa && "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
              }`}
            >
              {/* Passionate about web development and enjoy solving problems. */}
              Tools
            </p>

            <StackCom
              icon={git}
              bg="bg-[#DE4C36] "
              tweed={tweed}
              nayaLight={nayaLight}
              progress={progressValues[6].value}
              barClass={"w-[70%]"}
              classname={"justify-center"}
            />

            <div className="w-[100%] h-[1px] relative my-3 mx-auto bg-gradient-to-r from-transparent via-[#b5b5b5] to-transparent dark:via-[#434343]" />
            <StackCom
              icon={github}
              bg="bg-[#343943] "
              tweed={tweed}
              nayaLight={nayaLight}
              progress={progressValues[7].value}
              barClass={"w-[70%]"}
              classname={"justify-center"}
            />
            <div className="w-[100%] h-[1px] relative my-3 mx-auto bg-gradient-to-r from-transparent via-[#b5b5b5] to-transparent dark:via-[#434343]" />
            <StackCom
              icon={vscode}
              bg="bg-[#24ADF3] "
              tweed={tweed}
              nayaLight={nayaLight}
              progress={progressValues[8].value}
              barClass={"w-[70%]"}
              classname={"justify-center"}
            />

            <div className="w-[100%] h-[1px] relative my-3 mx-auto bg-gradient-to-r from-transparent via-[#b5b5b5] to-transparent dark:via-[#434343]" />
          </div>
          <div className=" w-full  rounded-[6vw] md:rounded-[4vw]  md:w-full border-[1px] relative overflow-hidden xs:border-[#e5e5e5] border-[#d2d2d2]    dark:border-[#292929]  xl:w-[40vw] 2xl:w-[35vw] lg:rounded-[2vw]  xl:px-9 xl:pt-2 lg:w-[45vw]  lg:px-8 md:px-7  h-auto md:py-4 px-6 py-4  xl:rounded-[2vw] flex md:hidden flex-col xs:px-5">
            <p
              className={`font-[pop2]  text-[1.06rem] text-[#313131] dark:text-[#cbcbcb]  xs:text-[0.9rem] xl:text-[1.4rem] xl:mt-[2vw]   relative z-[2]  ${
                isTransitioning ? "opacity-0 " : "opacity-1"
              } transition-opacity duration-700 ${!textL && "text-right rtl"} ${
                currentTa && "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
              }`}
            >
              {/* Passionate about web development and enjoy solving problems. */}
              BAAS (Backend as a Service)
            </p>

            <StackCom
              icon={appwrite}
              bg="bg-[#FA3870] "
              tweed={tweed}
              nayaLight={nayaLight}
              progress={progressValues[6].value}
              barClass={"w-[70%]"}
              classname={"justify-center"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
