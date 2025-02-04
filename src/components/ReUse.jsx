import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMyContext } from "../MyContext";
import tweed from "../assets/tweed.webp";
import seamless_paper_texture from "../assets/seamless_paper_texture.webp";
import nayaLight from "../assets/nayaLight.webp";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";

const ReUse = () => {
  const { isTransitioning, currentLang, textL, currentTa, currentUr } =
    useMyContext();
  const [greeting, setGreeting] = useState("");
  const [isEntered, setIsEntered] = useState(false);
  const { t, i18n } = useTranslation();


  return (
    <div
      className=" w-full h-[210px] rounded-[6vw] md:rounded-[4vw] md:w-full border-[1px] relative overflow-hidden xs:border-[#e5e5e5] border-[#d2d2d2]    dark:border-[#292929] md:h-[230px] xl:w-[34vw] xl:h-[250px] xl:rounded-[2vw] 2xl:w-[35vw] lg:rounded-[3vw] xs:h-[190px] "
      onMouseEnter={() => setIsEntered(true)}
      onMouseLeave={() => setIsEntered(false)}
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
          className={`px-9 py-[9vw] md:py-12 flex xs:px-6  gap-4 flex-col relative z-[10]  justify-center lg:py-[6.2vw] lg:px-14 xl:py-14 xl:px-10 2xl:py-14 ${
            !textL && "text-right rtl"
          }  transition-all duration-700 `}
        >
          <h1
            className={`capitalize text-[1.5rem] font-semibold font-[real] dark:text-[#ffffffb1] text-zinc-700 md:text-[1.9rem] lg:text-[2rem] xl:text-[1.6rem] 2xl:text-[2.1rem] ${
              isTransitioning ? "opacity-0" : "opacity-1"
            } transition-opacity duration-700 ${
              currentTa && "xl:text-[1.5vw] xs:text-[5vw] text-[0.8rem]"
            } ${currentTa && "xl:text-[1.5vw] xs:text-[5vw] text-[1rem]"}`}
          >
            {t("name")}
          </h1>

          <span
            className={`dark:text-[#4e4e4e] text-gray-400 text-[1.04rem]   font-[real2] md:text-[1.3rem] xl:text-[1.1rem] 2xl:text-[1.3rem] ${
              isTransitioning ? "opacity-0" : "opacity-1"
            } transition-opacity duration-700  ${
              currentTa && "xl:text-[1vw] xs:text-[3.1vw] text-[0.79rem] "
            } xs:text-[0.9rem]`}
          >
            {/* Frontend Developer, currently seeking opportunities to create
          impactful web applications. */}
            <h1>{t("title")}</h1>
          </span>
        </div>
      </div>
    
  );
};

export default ReUse;
