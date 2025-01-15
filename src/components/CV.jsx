import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { useMyContext } from "../MyContext";
import { useTranslation } from "react-i18next";
import cv from "../assets/CV.png";
import tweed from "../assets/tweed.webp";
import nayaLight from "../assets/nayaLight.webp";
import seamless_paper_texture from "../assets/seamless_paper_texture.webp";

const CV = () => {
  const [isEnter, setIsEnter] = useState(false);
  const {
    isTransitioning,
    currentLang,
    textL,
    currentTa,
    currentUr,
    currentGm,
  } = useMyContext();
  const { t, i18n } = useTranslation();
  console.log(currentGm);

  const handleDownload = () => {
    // Replace with your actual CV file path
    const cvUrl = "./DaniyalCV.pdf"; // Accessible from the public folder
    window.open(cvUrl, "_blank"); // Open in a new tab
  };

  useGSAP(() => {
    gsap.to(".arrow5", {
      bottom: isEnter ? "-3rem" : "0.7rem",
      //   left: isEnter ? '3rem' : '0.7rem',
      duration: 0.3,
      ease: "power1.out",
    });
  }, [isEnter]);
  useGSAP(() => {
    gsap.to(".arrow6", {
      bottom: isEnter ? "0.7rem" : "3rem",
      //   left: isEnter ? '0.7rem' : '-1.5rem',
      duration: 0.3,
      ease: "power1.out",
    });
  }, [isEnter]);

  
// useGSAP(() => {
//   gsap.fromTo(
//     ".CV",
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
      className="CV xs:border-[#e5e5e5] border-[#d2d2d2]   dark:border-[#292929] xs:w-[37vw] w-[39vw] h-[200px]  border-[1px] relative overflow-hidden md:h-[29.7vw] xl:w-[20vw] xl:h-[250px] xl:rounded-[2vw] 2xl:w-[35.4w] lg:rounded-[3vw] text-white px-7 py-6 xs:py-5 xs:px-6 md:w-[40vw] xl:px-8 xl:py-8 lg:w-[35vw]  2xl:mr-4 2xl:ml-0  bg-[#ececec] dark:bg-transparent flex items-center justify-between flex-col  rounded-[6vw] md:rounded-[4vw]"
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}
      onClick={handleDownload}
    >
      {" "}
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
                } transition-all duration-500 z-[1] block dark:hidden brightness-[1] `}
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
      <p
        className={`font-[pop2]  mt-[-0.5rem]   text-[1.15rem] text-[#2a2a2a] dark:text-[#cbcbcb] left-[5vw] xs:text-[1rem] xs:mt-[-0.9vw] xl:text-[1.3rem] xl:mt-[-0.7vw] md:mt-[0vw] xl:left-[2vw] xs:w-[75%] w-[75%] absolute z-[4]  xl:w-[80%]  ${
          isTransitioning ? "opacity-0" : "opacity-1"
        }  ${!textL && "text-right rtl"} ${
          currentTa && "xl:text-[1rem] text-[0.9rem] xs:text-[3.2vw]"
        } ${
          currentUr && "xl:text-[1rem] text-[0.9rem] xs:text-[4vw]"
        } transition-opacity duration-700`}
      >
        {/* View CV */}
        {t("cv")}
      </p>
      <div className="icon border-[1px] dark:border-[2px] p-[4vw] rounded-full w-fit dark:border-[#333333] border-[#00000038] dark:text-[#bdbdbd] text-[#636363] text-[3.4vw] flex items-center justify-center absolute right-[3%] bottom-[5%]  xs:text-[0.7rem] xs:p-[4.8vw] xs:right-[4%] xs:bottom-[6%] md:text-[1rem] md:p-5   md:right-[1.8%] xl:right-[5%] xl:bottom-[7%]  z-[2] bg-[#ffffff] dark:bg-zinc-900 xl:p-5 overflow-hidden">
        <FiDownload className="arrow5 absolute" />
        <FiDownload className="arrow6 absolute " />
      </div>
      <img
        src={cv}
        alt=""
        className=" relative z-[5] w-[8rem] mt-[15%] xs:mt-[3rem] xl:mt-[0] md:mt-[5%] md:w-[80%] xl:w-[100%]"
      />
    </div>
  );
};

export default CV;
