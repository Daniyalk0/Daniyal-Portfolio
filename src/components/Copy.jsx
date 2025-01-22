import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { useMyContext } from "../MyContext";
import { useTranslation } from "react-i18next";
import tweed from "../assets/tweed.webp";
import nayaLight from "../assets/nayaLight.webp";

const Copy = ({ classNamee = "", textClass = "", btnClass = "" }) => {
  const [copyState, setCopyState] = useState(false);
  const email = "getdaniyalkhan@gmail.com";
  const { isTransitioning, currentLang, textL, currentTa, currentUr } =
    useMyContext();
  const { t, i18n } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopyState(true);
        setTimeout(() => setCopyState(false), 2000); // Revert text after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className={` rounded-[6vw] md:rounded-[4vw] xs:border-[#e5e5e5] border-[#d2d2d2] dark:border-[#292929] xs:w-[100%] w-full h-[200px]  border-[1px] relative overflow-hidden md:h-[29.7vw]  xl:w-[19vw] xl:h-[220px] xl:rounded-[2vw] 2xl:w-[35.4w] lg:rounded-[3vw] text-white px-7 py-7 xs:py-5 xs:px-6 md:w-[34vw] xl:px-8 xl:py-8 lg:w-[30vw]  2xl:mr-4 2xl:ml-0   bg-[rgb(238,238,238)] dark:bg-transparent  flex items-start justify-between flex-col  z-[6] xs:h-[190px] xs:justify-center xs:gap-14 ${classNamee} `}>
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
        className={`font-[pop2] mt-[0rem] text-[#2a2a2a] dark:text-[#cbcbcb]   xs:mt-[1vw] xl:text-[1.3rem] xl:mt-[-0.5vw] md:mt-[0vw] xl:left-[2vw] z-[4] md:text-[1.4rem]  xs:left-[7vw] xs:text-[1.1rem]  text-[1.15rem]  ${
          isTransitioning ? "opacity-0" : "opacity-1"
        }  ${
          !textL && "text-right rtl"
        } transition-opacity duration-700 w-[100%] ${
          currentTa &&
          "xl:text-[1.17vw]  text-[0.8rem] md:text-[0.6rem] lg:text-[0.8rem]"
        }  ${textClass}  ` }
      >
        {/* Have something in mind? */}
        {t("copyTitle")}
      </p>
      <button
        onClick={handleCopy}
        className={`flex items-center w-[100%] gap-2 md:w-[100%] xl:rounded-[1.4vw] h-[43%]   relative overflow-hidden xl:h-[37%] rounded-[4vw] md:rounded-[2vw] md:h-[10vw] md:text-[2.5vw]  xs:w-[100%] xs:h-[15vw] xs:text-[5vw] text-[1rem] lg:text-[1rem] xl:text-[0.9rem] lg:h-[30%] ${btnClass}`}
      >
        <div className="w-full h-full flex items-center justify-center relative z-[4] text-[#363636] bg-gray-100  lg:dark:bg-transparent  dark:bg-zinc-900 dark:text-[#cbcbcb]  gap-2 ">
          {copyState ? (
            "Copied!"
          ) : (
            <>
              <h2
                className={`${
                  currentTa &&
                  "xl:text-[0.5rem] xs:text-[3vw] text-[0.8rem] md:text-[0.6rem] lg:text-[0.8rem]"
                } ${
                  currentUr &&
                  "xl:text-[0.7rem] xs:text-[4vw] text-[0.9rem] md:text-[0.7rem] lg:text-[0.9rem]"
                } xs:text-[4vw] ${
                  isTransitioning ? "opacity-0" : "opacity-1"
                }  ${
                  !textL && "text-right rtl"
                } transition-opacity duration-700`}
              >
                {t("copy")}
              </h2>
              <FaRegCopy className="" />
            </>
          )}{" "}
        </div>
        {/* <div
          style={{
            backgroundImage: `url('./src/assets/seamless_paper_texture.webp')`,
          }}
          className="absolute left-0 top-0 w-full h-full z-[2] brightness-[1]  opacity-[1]  dark:hidden lg:block "
        ></div> */}
        <div
          style={{ backgroundImage: `url('./src/assets/tweed.webp')` }}
          className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.4]  hidden dark:opacity-[0.9] opacity-0 dark:block lg:block"
        ></div>
      </button>
    </div>
  );
};

export default Copy;
