import React, { useEffect, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { useMyContext } from "../MyContext";
import usa from '../assets/usa.webp'
import fr from '../assets/france.webp'
import ind from '../assets/ind.webp'
import gm from '../assets/germany.webp'
import tweed from '../assets/tweed.webp'
import nayaLight from '../assets/nayaLight.webp'
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Lang = () => {
  const {
    isTransitioning,
    setIsTransitioning,
    setCurrentLang,
    currentLang,
    setTextL,
    textL,
    currentTa,
    setCurrentTa,
    setCurrentUr,
    CurrentUr,
    currentGm,
    setCurrentGm,
  } = useMyContext();
  const [activeLang, setActiveLang] = useState("en");
  const [isHover, setIsHover] = useState("");
  const { t, i18n } = useTranslation();


  const changeLanguage = (lng) => {
    setIsTransitioning(true); // Start transition
    setTimeout(() => {
      setCurrentLang(lng);
      i18n.changeLanguage(lng); // Change language
      setIsTransitioning(false); // End transition
    }, 500); // Duration of the transition

    if (lng === "ta") {
      setTimeout(() => {
        setCurrentTa(true);
      }, 500);
    } else {
      setTimeout(() => {
        setCurrentTa(false);
      }, 500);
    }
    if (lng === "ur") {
      setTimeout(() => {
        setCurrentUr(true);
        setTextL(false);
      }, 500);
    } else {
      setTimeout(() => {
        setCurrentUr(false);
        setTextL(true);
      }, 500);
    }
    if (lng === "gm") {
      setTimeout(() => {
        setCurrentGm(true);
      }, 500);
    } else {
      setTimeout(() => {
        setCurrentGm(false);
      }, 500);
    }
  };
  
  gsap.registerPlugin(ScrollTrigger);

// useGSAP(() => {
//   gsap.fromTo(
//     ".lang",
//     { 
//       scale: "0", 
//       translateY: "100%" 
//     }, // Starting state
//     { 
//       scale: "1", 
//       translateY: "0%", 
//       duration: 1.6, 
//       delay: 0.6,
//     }
//   );
// }, []);

  return (
    <div
      className={`lang rounded-[6vw] md:rounded-[4vw] xs:border-[#e5e5e5] border-[#d2d2d2]  dark:border-[#292929] xs:w-[55vw] w-[53vw] h-[200px] border-[1px] relative overflow-hidden md:h-[29.7vw] xl:w-[26vw] xl:h-[250px] xl:rounded-[2vw] 2xl:w-[35.4w] lg:rounded-[3vw]  px-3 py-0 xs:py-5 xs:px-4 md:w-[55vw] xl:px-7 xl:py-8 lg:w-[60vw] 2xl:mr-4 2xl:ml-0  bg-[#ececec] dark:bg-transparent flex items-start md:items-center justify-center flex-col `}
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
      {" "}
      <p
        className={`font-[pop2] md:mt-2  w-[84%] text-[1.10rem] text-[#2a2a2a] dark:text-[#cbcbcb] left-[3vw] xs:text-[0.9rem]  xl:text-[1.3rem]  xl:left-[2vw] md:left-[4.6vw] absolute z-[4] top-[1rem] ${
          isTransitioning ? "opacity-0 " : "opacity-1"
        } transition-opacity duration-700  ${
          !textL ? "text-right rtl" : "xs:text-center"
        } ${currentTa && "xl:text-[1rem] text-[1.09rem] xs:text-[3.2vw]"}`}
      >
        {/* Language */}
        {t("langText")}
      </p>
      <div className="w-full h-[83%] xs:h-[90%] flex justify-end items-end  md:w-[90%] xl:w-full xl:h-full xl:mt-5 flex-col gap-[0.3rem] lg:gap-[1rem] xl:gap-[0.5rem]  xs:mt-6 xs:gap-[0.5rem] ">
        <div className="w-full flex h-fit justify-center items-center gap-[0.3rem] lg:gap-[1rem] xl:gap-[0.5rem] ">
          <div
            onClick={() => {
              changeLanguage("en"), setCurrentLang("en");
            }}
            className={` w-[32%] xl:w-[60%] md:h-[9vw] lg:w-[14rem] h-[3.9rem]  border-[1px] rounded-[0.8rem] xl:h-[4.4rem] border-[#c0c0c0] dark:border-[#292929]
               relative text-[#2a2a2a] dark:text-[#cbcbcb] font-[pop2] flex items-center  justify-center bg-[#ffffff] dark:bg-zinc-900 shadow-md   xl:px-[0.25rem] xl:py-[0.30rem] overflow-hidden  ${
                 currentLang === "en" &&
                 "border-transparent dark:border-transparent dark:shadow-none shadow-none"
               }`}
          >
            <div
              className={`flex items-center justify-center flex-col  text-[0.60rem] md:text-[0.7rem] lg:text-[0.9rem]  xl:text-[0.7rem] gap-[0.13rem] relative z-[3] `}
            >
              {/* <p className="font-[pop2] ">United States</p> */}
              <img src={usa} alt="" className="w-[1.2rem]" />
              <p className="font-[pop2] ">English</p>
            </div>
            <div
              className={`absolute w-full h-full left-0 top-0 ${
                currentLang === "en" ? "opacity-1" : "opacity-0"
              } eng transition-all duration-700`}
            />
          </div>

          <div
            onClick={() => {
              changeLanguage("hi"), setCurrentLang("hi");
            }}
            // onMouseEnter={() => setIsHover("ind")}
            // onMouseLeave={() => setIsHover("")}
            className={`w-[32%] xl:w-[60%] lg:w-[14rem] h-[3.9rem] md:h-[10vw] border-[1px] rounded-[0.8rem] xl:h-[4.4rem] 
                border-[#c0c0c0] dark:border-[#292929]
              relative text-[#2a2a2a] dark:text-[#cbcbcb] font-[pop2] flex items-center   bg-[#ffffff] dark:bg-zinc-900 shadow-md  xl:px-[0.25rem] xl:py-[0.30rem] justify-center   ${
                currentLang === "hi" &&
                "border-transparent dark:border-transparent dark:shadow-none shadow-none"
              } overflow-hidden`}
          >
            {/* <div className=" w-[47%]  h-[100%] rounded-l-[0.6rem] overflow-hidden  items-center justify-between hidden md:flex">
              <img
                src="./src/assets/US.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="flex items-center justify-center flex-col  text-[0.60rem] md:text-[0.7rem]  lg:text-[0.9rem]  xl:text-[0.7rem] gap-[0.13rem] relative z-[3]">
              {/* <p className="font-[pop2] ">India</p> */}
              <img src={ind} alt="" className="w-[1.2rem]" />
              <p className="font-[pop2] ">Hindi</p>
            </div>
            <div
              className={`absolute w-full h-full left-0 top-0 ${
                currentLang === "hi" ? "opacity-1" : "opacity-0"
              } in transition-all duration-700`}
            />
          </div>

          <div
            onClick={() => {
              changeLanguage("ta"), setCurrentLang("ta");
            }}
            // onMouseEnter={() => setIsHover("ru")}
            // onMouseLeave={() => setIsHover("")}
            className={` w-[32%] xl:w-[60%] lg:w-[14rem] h-[3.9rem] md:h-[9vw] border-[1px] rounded-[0.8rem] xl:h-[4.4rem]  
                border-[#c0c0c0] dark:border-[#292929]
              relative text-[#2a2a2a] dark:text-[#cbcbcb] font-[pop2] flex items-center   bg-[#ffffff] dark:bg-zinc-900 shadow-md  xl:px-[0.25rem] xl:py-[0.30rem] justify-center  ${
                currentLang === "ta" &&
                "border-transparent dark:border-transparent dark:shadow-none shadow-none"
              } overflow-hidden `}
          >
            {/* <div className=" w-[47%]  h-[100%] rounded-l-[0.6rem] overflow-hidden  items-center justify-between hidden md:flex">
              <img
                src="./src/assets/US.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="flex items-center justify-center flex-col  text-[0.60rem] md:text-[0.7rem]  lg:text-[0.9rem]  xl:text-[0.7rem] gap-[0.13rem] relative z-[3]">
              {/* <p className="font-[pop2] ">Russia</p> */}
              <img src={ind} alt="" className="w-[1.2rem]" />
              <p className="font-[pop2] ">Tamil</p>
            </div>
            <div
              className={`absolute w-full h-full left-0 top-0 ${
                currentLang === "ta" ? "opacity-1" : "opacity-0"
              } ta transition-all duration-700`}
            />
          </div>
        </div>

        <div className="w-full flex h-fit justify-center items-center gap-[0.3rem] lg:gap-[1rem] xl:gap-[0.5rem]">
          <div
            onClick={() => {
              changeLanguage("fr"), setCurrentLang("fr");
            }}
            className={` w-[32%] xl:w-[60%] lg:w-[14rem] h-[3.9rem] md:h-[9vw] border-[1px] rounded-[0.8rem] xl:h-[4.4rem] 
                border-[#c0c0c0] dark:border-[#292929]
              relative text-[#2a2a2a] dark:text-[#cbcbcb] font-[pop2] flex items-center    bg-[#ffffff] dark:bg-zinc-900 shadow-md   xl:px-[0.25rem] xl:py-[0.30rem] justify-center  ${
                currentLang === "fr" &&
                "border-transparent dark:border-transparent dark:shadow-none shadow-none"
              } overflow-hidden`}
          >
            <div className="flex items-center justify-center flex-col text-[0.60rem] md:text-[0.7rem]  lg:text-[0.9rem]  xl:text-[0.7rem] gap-[0.13rem] relative z-[3]">
              {/* <p className="font-[pop2] ">France</p> */}
              <img
                src={fr}
                alt=""
                className="w-[1.2rem]"
              />
              <p className="font-[pop2] ">French</p>
            </div>
            <div
              className={`absolute w-full h-full left-0 top-0 ${
                currentLang === "fr" ? "opacity-1" : "opacity-0"
              } fr transition-all duration-700`}
            />
          </div>
          <div
            onClick={() => {
              changeLanguage("ur"), setCurrentLang("ur");
            }}
            // onMouseEnter={() => setIsHover("ar")}
            // onMouseLeave={() => setIsHover("")}
            className={` w-[32%] xl:w-[60%] lg:w-[14rem] h-[3.9rem] md:h-[10vw] border-[1px] rounded-[0.8rem] xl:h-[4.4rem] 
                border-[#c0c0c0] dark:border-[#292929]
               relative text-[#2a2a2a] dark:text-[#cbcbcb] font-[pop2] flex items-center px-[0.2rem] py-[0.15rem]  bg-[#ffffff] dark:bg-zinc-900 shadow-md  md:p-[0.37rem xl:px-[0.25rem] xl:py-[0.30rem] justify-center  ${
                 currentLang === "ur" &&
                 "border-transparent dark:border-transparent dark:shadow-none shadow-none"
               } overflow-hidden`}
          >
            {/* <div className=" w-[47%] h-[100%] rounded-l-[0.6rem] overflow-hidden  items-center justify-between hidden md:flex">
              <img
                src="./src/assets/US.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="flex items-center justify-center flex-col text-[0.60rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-[0.7rem] gap-[0.13rem] relative z-[3]">
              {/* <p className="font-[pop2] ">Saudi Arabia</p> */}
              <img src={ind} alt="" className="w-[1.2rem]" />
              <p className="font-[pop2] ">Urdu</p>
            </div>
            <div
              className={`absolute w-full h-full left-0 top-0 ${
                currentLang === "ur" ? "opacity-1" : "opacity-0"
              } ur transition-all duration-700`}
            ></div>
          </div>
          <div
            onClick={() => {
              changeLanguage("gm"), setCurrentLang("gm");
            }}
            // onMouseEnter={() => setIsHover("gm")}
            // onMouseLeave={() => setIsHover("")}
            className={`w-[32%] xl:w-[60%] lg:w-[14rem] h-[3.9rem]  md:h-[10vw] border-[1px] rounded-[0.8rem] xl:h-[4.4rem] 
                border-[#c0c0c0] dark:border-[#292929]
               relative text-[#2a2a2a] dark:text-[#cbcbcb] font-[pop2] flex items-center px-[0.2rem] py-[0.15rem]  bg-[#ffffff] dark:bg-zinc-900 shadow-md   md:p-[0.37rem xl:px-[0.25rem] xl:py-[0.30rem] justify-center ${
                 currentLang === "gm" &&
                 "border-transparent dark:border-transparent dark:shadow-none shadow-none"
               } overflow-hidden`}
          >
            {/* <div className=" w-[47%] h-[100%] rounded-l-[0.6rem] overflow-hidden  items-center justify-between hidden md:flex">
              <img
                src="./src/assets/US.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="flex items-center justify-center flex-col text-[0.60rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-[0.7rem] gap-[0.13rem] relative z-[3]">
              {/* <p className="font-[pop2] ">Saudi Arabia</p> */}
              <img
                src={gm}
                alt=""
                className="w-[1.2rem] "
              />
              <p className="font-[pop2] ">German</p>
            </div>
            <div
              className={`absolute w-full h-full left-0 top-0 ${
                currentLang === "gm" ? "opacity-1" : "opacity-0"
              } gm transition-all duration-700`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lang;
