import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { useTranslation } from "react-i18next";
import { useMyContext } from "../MyContext";
import { NavLink } from "react-router-dom";
import dpp from "../assets/dpp.jpg";
import tweed from "../assets/tweed.webp";
import nayaLight from "../assets/nayaLight.webp";
// import nayaLight from "../assets/nayaLight.webp";

function AboutHome() {
  const [isEnter, setIsEnter] = useState(false);
  const { isTransitioning, currentLang, textL, currentTa } = useMyContext();
  const { t, i18n } = useTranslation();
  const [pfpHover, setPfpHover] = useState(false)

  useGSAP(() => {
    gsap.to(".arroww1", {
      bottom: isEnter ? "1rem" : "0.7rem",
      left: isEnter ? "3rem" : "0.7rem",
      duration: 0.3,
      ease: "power1.out",
    });
  }, [isEnter]);
  useGSAP(() => {
    gsap.to(".arroww2", {
      bottom: isEnter ? "0.7rem" : "0.5rem",
      left: isEnter ? "0.7rem" : "-1.5rem",
      duration: 0.3,
      ease: "power1.out",
    });
  }, [isEnter]);

  return (
    <NavLink to={"/about"}>
      <div className="flex items-center justify-center gap-2 w-full md:w-full md:gap-3 xl:gap-1 relative overflow-hidden">
        <div onMouseEnter={() => setPfpHover(true) } onMouseLeave={() => setPfpHover(false)} className={`hidden md:block w-[33%] md:w-[29vw] md:h-[29.4vw] h-[14.4rem]  object-cover rounded-[6vw] md:rounded-[4vw] lg:w-[23vw] xl:w-[18vw] xl:h-[15.4rem] xl:rounded-[2.3vw] 2xl:w-[17.3vw]  overflow-hidden`} >
          {/* <InnerImageZoom
            src={dpp}
            zoomSrc={dpp}
            alt="naaa"
            className="w-[33%] md:w-[29vw] md:h-[29.4vw] h-[14.4rem]  object-cover rounded-[6vw] md:rounded-[4vw] lg:w-[23vw] xl:w-[18vw] xl:h-[15.4rem] xl:rounded-[2.3vw] 2xl:w-[17.3vw] bg-cover bg-center"
            zoomType="hover"
            hideHint="false"
            fadeDuration={0}
            zoomScale={0.1}
          />
          <img /> */}
          <div className={`bg-cover bg-center transition-all duration-1000  w-full h-full ${pfpHover ? 'scale-[1.9]' : ''}`} style={{backgroundImage:`url('${dpp}')`}}></div>
        </div>
        <div
          className="rounded-[6vw] md:rounded-[4vw] xs:border-[#e5e5e5] border-[#d2d2d2]  dark:border-[#292929]  w-full h-[210px] border-[1px] relative overflow-hidden md:h-[29.7vw] xl:w-[34.3vw] xl:h-[250px] xl:rounded-[2vw] 2xl:w-[35.4w] lg:rounded-[3vw] text-white px-7 py-6 xs:py-5 xs:px-6 md:w-[70%] xl:px-7 xl:py-7 lg:w-[71vw] xl:mr-0 xl:ml-2 2xl:mr-4 2xl:ml-0  dark:bg-zinc-900 dark:bg-transparent xs:h-[190px]"
          onMouseEnter={() => setIsEnter(true)}
          onMouseLeave={() => setIsEnter(false)}
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

          <h2
            className={`font-[real] uppercase tracking-[0.6vw] text-[1rem] dark:text-[#4e4e4e] text-gray-500 font-semibold  xs:text-[0.9rem] xs:tracking-[0.4vw] md:tracking-[0.3vw] md:text-[0.9rem] xl:text-[1rem] xl:tracking-[0.2vw] relative z-[1] ${
              isTransitioning ? "opacity-0" : "opacity-1"
            }  ${!textL && "text-right rtl"} transition-all duration-700 `}
          >
            {t("aboutTitle")}
          </h2>
          <p
            className={`font-[pop2]  mt-[5vw] text-[1.25rem] text-[#2a2a2a] dark:text-[#cbcbcb]  xs:text-[1.1rem] xs:mt-[5.7vw] xl:text-[1.3rem] xl:mt-[2vw] md:mt-[3vw]  relative z-[2]  ${
              isTransitioning ? "opacity-0 mt-[2rem]" : "opacity-1"
            } transition-opacity duration-700 ${!textL && "text-right rtl"} ${
              currentTa && "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem]"
            }`}
          >
            {/* Passionate about web development and enjoy solving problems. */}
            {t("aboutHomeText")}
          </p>
          <div className="icon border-[1px] dark:border-[2px] p-[2.2vw] rounded-full w-fit dark:border-[#333333] border-[#00000038] dark:text-[#bdbdbd] text-[#636363] text-[3.4vw] flex items-center justify-center absolute right-[3%] bottom-[5%] rotate-[-50deg] xs:text-[0.6rem] xs:p-[2.5vw] xs:right-[4%] xs:bottom-[6%] md:text-[1rem] md:p-5   md:right-[1.8%] xl:right-[5%] xl:bottom-[7%]  z-[10] bg-[#ffffff] dark:bg-zinc-900 xl:p-5 overflow-hidden">
            <FaArrowRight className={`arroww1 md:absolute`} />
            <FaArrowRight className="arroww2 md:block hidden md:absolute" />
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default AboutHome;
