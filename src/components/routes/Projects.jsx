import React, { useEffect, useState } from "react";
import nayaLight from "../../assets/nayaLight.webp";
import tweed from "../../assets/tweed.webp";
import { useMyContext } from "../../MyContext";
import { useTranslation } from "react-i18next";
import appwrite from "../../assets/logo/appwrite.png";
import react from "../../assets/logo/react.png";
import tailwind from "../../assets/logo/tailwind.png";
import redux from "../../assets/logo/redux.png";
import gsapp from "../../assets/logo/gsap.png";
import html from "../../assets/logo/html.png";
import css from "../../assets/logo/css.png";
import js from "../../assets/logo/js.png";
import onix_1 from "../../assets/onixFad2.jpg";
import onix_3 from "../../assets/onixFad3.jpg";
import sundown_fad from "../../assets/sundownFad.jpg";
import sundown_fad2 from "../../assets/sundownFad2.jpg";
import blog_3 from "../../assets/blogFad3.jpg";
import blog_4 from "../../assets/blogFad4.jpg";
import blog_2 from "../../assets/blogFad2.jpg";
import blog_1 from "../../assets/blogFad.jpg";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Lang from "../Lang";
import Copy from "../Copy";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Projects = () => {
  const { isTransitioning, currentLang, textL, currentTa, currentFr } =
    useMyContext();
  const { t, i18n } = useTranslation();
  const [themeMode, setThemeMode] = useState("light");
  const [isEnter, setIsEnter] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".projectsss",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        duration: 1.3,
        y: 0,
      }
    );
  }, []);

  useEffect(() => {
    // Fetch the theme mode from local storage
    const themecheck = localStorage.getItem("themeMode") || "light";
    setThemeMode(themecheck); // Set the theme mode
  }, []);

  return (
    <div className="   py-4  px-3 w-full h-full ">
      <div className="projectsss about border-[2px] xs:border-[#e3e3e3] rounded-[6vw] dark:border-[#292929] border-[#cdcdcd] min-h-screen  px-2 py-3 lg:rounded-[4vw] lg:py-4  flex items-center gap-5 justify-center  relative   overflow-hidden   xl:rounded-[3vw] flex-col lg:mt-[3rem]   z-[999] xl:mt-[3rem] xl:py-4 md:mt-[3rem] mt-[2.5rem]  md:py-4 md:px-3 lg:px-4 ">
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
          </NavLink>
        </div>

        <div className="flex flex-col gap-4 w-full items-center justify-center lg:gap-3 lg:flex-row xl:gap-4">
          <div className="project1  xl:px-9   px-4 py-5 relative flex items-center xl:justify-between  w-full flex-col  justify-between rounded-[5vw] overflow-hidden md:rounded-[2rem] lg:w-[45%] lg:rounded-[3vw]  xl:py-10 xl:rounded-[2vw] border-[#d2d2d2]  border-[1px]  dark:border-[#292929]  xs:px-3 xs:py-4 md:px-5 md:py-6">
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
            <div className="w-full flex items-center justify-between h-[60%]">
              <div className="about w-[100%]  h-[100%] flex flex-col justify-between gap-3 py-2 md:gap-0 xl:py-0">
                <div className="w-full h-full flex flex-col gap-2 ">
                  <div className="w-full flex items-center justify-between   ">
                    <p
                      className={`font-[pop2]  text-[1.8rem] text-[#383838] dark:text-[#cbcbcb] md:text-[2rem] lg:text-[1.5rem] xs:text-[1.5rem]  xl:text-[1.6rem]  relative z-[2]  ${
                        isTransitioning ? "opacity-0 " : "opacity-1"
                      } transition-opacity duration-700 ${
                        !textL && "text-right rtl"
                      } ${
                        currentTa &&
                        "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                      } ${currentFr && " xs:text-[5.2vw] text-[0.8rem] "}`}
                    >
                      {t("onixTitle")}
                    </p>
                    <h2
                      className={` lg:text-[0.7rem] font-[real] uppercase  text-[0.7rem] dark:text-[#4e4e4e] text-gray-400 font-semibold  xs:text-[0.6rem]  md:text-[0.8rem] xl:text-[0.7rem] relative z-[1] ${
                        isTransitioning ? "opacity-0" : "opacity-1"
                      }  ${
                        !textL && "text-right rtl"
                      } transition-all duration-700 ${
                        currentFr && "xs:text-[0.43rem] text-[0.44rem] "
                      }`}
                    >
                      {t("ecommerce")}
                    </h2>
                  </div>
                  <div className="w-full h-[1px] xs:bg-[#e2e2e2]  bg-[#cdcdcd]     dark:bg-[#292929]  relative" />
                  <p
                    className={`font-[real] md:text-[1.2rem] lg:text-[1.02rem]  text-[1.1rem] xs:leading-5 leading-7  mt-1 text-[#434343] md:leading-8 dark:text-[#cbcbcb] xl:leading-[2rem] xs:text-[0.8rem]    relative z-[2]  ${
                      isTransitioning ? "opacity-0 " : "opacity-1"
                    } transition-opacity duration-700 ${
                      !textL && "text-right rtl"
                    } ${
                      currentTa ||
                      (currentFr &&
                        "xl:text-[1.1vw] lg:text-[1.1vw] xs:text-[4vw] text-[0.8rem] ")
                    }`}
                  >
                    {/* This e-commerce app features real-time data retrieval from
                    the Appwrite database, enabling an engaging web application
                    where users can authenticate using Appwrite, seamlessly
                    filter and save items to their cart, products, providing an
                    optimized shopping experience. */}
                    {t("onixAbout")}
                  </p>
                </div>
                <div className=" lg:py-2 xl:pb-3 md:py-2 flex items-center lg:gap-[0.4rem] gap-2 w-full justify-end">
                  <div className="w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent">
                    <div
                      style={{ backgroundImage: `url('${tweed}')` }}
                      className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
                    ></div>
                    <img
                      src={react}
                      alt="Centered Image"
                      className="absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto md:max-h-[60% xs:max-h-[60%] xs:max-w-[60%]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent">
                    <div
                      style={{ backgroundImage: `url('${tweed}')` }}
                      className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
                    ></div>
                    <img
                      src={tailwind}
                      alt="Centered Image"
                      className="absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto md:max-h-[60% xs:max-h-[60%] xs:max-w-[60%]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent">
                    <div
                      style={{ backgroundImage: `url('${tweed}')` }}
                      className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
                    ></div>
                    <img
                      src={appwrite}
                      alt="Centered Image"
                      className="absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto md:max-h-[60% xs:max-h-[60%] xs:max-w-[60%]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent">
                    <div
                      style={{ backgroundImage: `url('${tweed}')` }}
                      className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
                    ></div>
                    <img
                      src={gsapp}
                      alt="Centered Image"
                      className="absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto md:max-h-[60% xs:max-h-[60%] xs:max-w-[60%]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:px-5  xl:rounded-[1.4rem] px-3 xs:py-9 py-11  relative   flex items-center justify-center xs:rounded-[1.2rem] rounded-[1.3rem] md:rounded-[1.5rem] xl:py-10 overflow-hidden dark:border-[#292929] xs:border-[#e2e2e2]  border-[#cdcdcd] border-[1px]">
              <div
                style={{ backgroundImage: `url('${tweed}')` }}
                className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.33] brightness-[0.36] opacity-[1] hidden dark:block"
              ></div>

              <div
                style={{
                  backgroundImage: `url('${onix_1}')`,
                }}
                className=" xs:h-[72vw] h-[68vw] xs:w-[48%] w-[42%]  lg:h-[16rem] rounded-[0.7rem] md:h-[51vw] md:w-[30%] lg:w-[40%] bg-cover bg-center relative overflow-hidden shadow-lg xs:shadow-zinc-400 shadow-zinc-500 brightness-[1.09]  xs:top-[-5vw] left-[-1vw] top-[-1.3rem] xl:h-[27rem] xl:w-[42%] dark:shadow-zinc-900 dark:brightness-[1] "
              ></div>
              <div
                style={{
                  backgroundImage: `url('${onix_3}')`,
                }}
                className=" xs:h-[72vw] h-[68vw] xs:w-[48%] w-[42%] lg:h-[16rem] rounded-[0.7rem] md:h-[51vw] md:w-[30%] lg:w-[40%] bg-cover bg-center relative overflow-hidden shadow-lg xs:shadow-zinc-400 shadow-zinc-500
              dark:shadow-zinc-900 brightness-[1.14] dark:brightness-[1.05] right-[-1vw] xs:top-[4vw] top-[1.3rem] xl:h-[27rem] xl:w-[42%]"
              ></div>
            </div>
          </div>
          <div className="project2  px-4 py-5  xl:px-9  relative flex items-center xl:justify-between  w-full flex-col  justify-between rounded-[5vw] overflow-hidden md:rounded-[2rem] lg:w-[45%] lg:rounded-[3vw]  xl:py-10 xl:rounded-[2vw] border-[#d2d2d2]  border-[1px]  dark:border-[#292929]  xs:px-3 xs:py-4 md:px-5 md:py-6">
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
            <div className="w-full flex items-center justify-between h-[60%]">
              <div className="about w-[100%]  h-[100%] flex flex-col justify-between gap-3 py-2 md:gap-0 xl:py-0">
                <div className="w-full h-full flex flex-col gap-2 ">
                  <div className="w-full flex items-center justify-between   ">
                    <p
                      className={`font-[pop2]  text-[1.8rem] text-[#383838] dark:text-[#cbcbcb] md:text-[2rem] lg:text-[1.5rem] xs:text-[1.5rem]  xl:text-[1.6rem]  relative z-[2]  ${
                        isTransitioning ? "opacity-0 " : "opacity-1"
                      } transition-opacity duration-700 ${
                        !textL && "text-right rtl"
                      } ${
                        currentTa &&
                        "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                      }`}
                    >
                      {t("blogTitle")}
                    </p>
                    <h2
                      className={` lg:text-[0.7rem] font-[real] uppercase  text-[0.7rem] dark:text-[#4e4e4e] text-gray-400 font-semibold  xs:text-[0.6rem]  md:text-[0.8rem] xl:text-[0.7rem] relative z-[1] ${
                        isTransitioning ? "opacity-0" : "opacity-1"
                      }  ${
                        !textL && "text-right rtl"
                      } transition-all duration-700 `}
                    >
                      {t("blog")}
                    </h2>
                  </div>
                  <div className="w-full h-[1px] xs:bg-[#e2e2e2]  bg-[#cdcdcd]     dark:bg-[#292929]  relative" />
                  <p
                    className={`font-[real] md:text-[1.2rem] lg:text-[1.02rem]  text-[1.1rem] xs:leading-5 leading-7  mt-1 text-[#434343] md:leading-8 dark:text-[#cbcbcb] xl:leading-[2rem] xs:text-[0.8rem]    relative z-[2]  ${
                      isTransitioning ? "opacity-0 " : "opacity-1"
                    } transition-opacity duration-700 ${
                      !textL && "text-right rtl"
                    } ${
                      currentTa &&
                      "xl:text-[1vw] lg:text-[1.1vw] xs:text-[4vw] text-[0.8rem] "
                    }`}
                  >
                    {/* A full-featured blog application enabling users to register,
                    authenticate, view other users' profiles, like their posts,
                    and perform complete CRUD (Create, Read, Update, Delete)
                    operations on their own blog posts while seamlessly managing
                    their blogging experience. */}
                    {t("blogAbout")}
                  </p>
                </div>
                <div className=" lg:py-2 xl:pb-3 md:py-2 flex items-center lg:gap-[0.4rem] gap-2 w-full justify-end  relative">
                  <div className="w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent">
                    <div
                      style={{ backgroundImage: `url('${tweed}')` }}
                      className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
                    ></div>
                    <img
                      src={react}
                      alt="Centered Image"
                      className="absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto md:max-h-[60% xs:max-h-[60%] xs:max-w-[60%]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent">
                    <div
                      style={{ backgroundImage: `url('${tweed}')` }}
                      className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
                    ></div>
                    <img
                      src={tailwind}
                      alt="Centered Image"
                      className="absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto md:max-h-[60% xs:max-h-[60%] xs:max-w-[60%]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent">
                    <div
                      style={{ backgroundImage: `url('${tweed}')` }}
                      className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
                    ></div>
                    <img
                      src={appwrite}
                      alt="Centered Image"
                      className="absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto md:max-h-[60% xs:max-h-[60%] xs:max-w-[60%]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent">
                    <div
                      style={{ backgroundImage: `url('${tweed}')` }}
                      className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
                    ></div>
                    <img
                      src={redux}
                      alt="Centered Image"
                      className="absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto md:max-h-[60% xs:max-h-[60%] xs:max-w-[60%]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:px-5  xl:rounded-[1.4rem] px-3 xs:py-9 py-11  relative   flex items-center justify-center xs:rounded-[1.2rem] rounded-[1.3rem] md:rounded-[1.5rem] xl:py-10 overflow-hidden dark:border-[#292929] xs:border-[#e2e2e2]  border-[#cdcdcd] border-[1px]">
              <div
                style={{ backgroundImage: `url('${tweed}')` }}
                className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.33] brightness-[0.36] opacity-[1] hidden dark:block"
              ></div>

              <div
                style={{
                  backgroundImage: `url('${
                    themeMode === "dark" ? blog_1 : blog_4
                  }')`,
                }}
                className=" xs:h-[72vw] h-[68vw] xs:w-[48%] w-[42%]  lg:h-[16rem] rounded-[0.7rem] md:h-[51vw] md:w-[30%] lg:w-[40%] bg-cover bg-center relative overflow-hidden shadow-lg xs:shadow-zinc-400 shadow-zinc-500 brightness-[1.2]  xs:top-[-5vw] left-[-1vw] top-[-1.3rem] xl:h-[27rem] xl:w-[42%] dark:shadow-zinc-900 dark:brightness-[1] "
              ></div>
              <div
                style={{
                  backgroundImage: `url('${
                    themeMode === "dark" ? blog_2 : blog_3
                  }')`,
                }}
                className=" xs:h-[72vw] h-[68vw] xs:w-[48%] w-[42%] lg:h-[16rem] rounded-[0.7rem] md:h-[51vw] md:w-[30%] lg:w-[40%] bg-cover bg-center relative overflow-hidden shadow-lg xs:shadow-zinc-400 shadow-zinc-500
              dark:shadow-zinc-900 brightness-[1.14] dark:brightness-[1.05] right-[-1vw] xs:top-[4vw] top-[1.3rem] xl:h-[27rem] xl:w-[42%]"
              ></div>
            </div>
          </div>
        </div>

        <div className="relative lg:w-[92%] flex items-center flex-col lg:flex-row justify-between  lg:h-[56vh] lg:justify-start lg:gap-3 gap-4 xl:w-[92.3%] xl:gap-4">
          <div className="project3  px-4 py-5 relative flex items-center xl:justify-between  w-full flex-col  justify-between rounded-[5vw] overflow-hidden md:rounded-[2rem] lg:h-full lg:w-[60%] lg:rounded-[3vw] xl:px-7 xl:py-5 xl:rounded-[2vw] xl:w-[66%] border-[#d2d2d2]  border-[1px]  dark:border-[#292929]  xs:px-3 xs:py-4 md:px-5 md:py-6 lg:py-6 lg:flex-row lg:gap-2 ">
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

            <div className="w-full flex items-center justify-between h-[60%]">
              <div className="about w-[100%]  h-[100%] flex flex-col justify-between gap-3 py-2 md:gap-0 xl:py-0 lg:w-[96%]  relative lg:py-0  lg:h-[100%] xl:w-[94%]">
                <div className="w-full h-full flex flex-col gap-2 ">
                  <div className="w-full flex items-center justify-between  lg:mb-2 ">
                    <p
                      className={`font-[pop2]  text-[1.8rem] text-[#383838] dark:text-[#cbcbcb] md:text-[2rem] lg:text-[1.3rem] xs:text-[1.3rem]  xl:text-[1.3rem]  relative z-[2]  ${
                        isTransitioning ? "opacity-0 " : "opacity-1"
                      } transition-opacity duration-700 ${
                        !textL && "text-right rtl"
                      } ${
                        currentTa ||
                        (currentFr &&
                          "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] ")
                      }`}
                    >
                      {t("cloneTitle")}
                    </p>
                    <h2
                      className={` lg:text-[0.7rem] font-[real] uppercase  text-[0.7rem] dark:text-[#4e4e4e] text-gray-400 font-semibold  xs:text-[0.6rem]  md:text-[0.8rem] xl:text-[0.7rem] relative z-[1] ${
                        isTransitioning ? "opacity-0" : "opacity-1"
                      }  ${
                        !textL && "text-right rtl"
                      } transition-all duration-700 `}
                    >
                      {t("clone")}
                    </h2>
                  </div>
                  <div className="w-full h-[1px] xs:bg-[#e2e2e2]  bg-[#cdcdcd]     dark:bg-[#292929]  relative" />
                  <p
                    className={`font-[real] md:text-[1.2rem] lg:text-[1.02rem]  text-[1.1rem] xs:leading-5 leading-7 lg:leading-7 mt-1 text-[#434343] md:leading-8 dark:text-[#cbcbcb] xl:leading-[1.7rem] xs:text-[0.8rem] xl:text-[0.9rem]   relative z-[2]  ${
                      isTransitioning ? "opacity-0 " : "opacity-1"
                    } transition-opacity duration-700 ${
                      !textL && "text-right rtl"
                    } ${
                      currentTa &&
                      "xl:text-[1vw] lg:text-[1.1vw] xs:text-[4vw] text-[0.8rem] "
                    }`}
                  >
                    {/* A responsive and detailed clone of the Sundown Studio
                    website, recreating its dynamic design, interactivity, and
                    user experience to highlight front-end development skills. */}
                    {t("cloneAbout")}
                  </p>
                </div>
                <div className=" lg:py-2 xl:pb-3 md:py-2 flex items-center lg:gap-[0.3rem] gap-2 lg:mt-5 w-full justify-end lg:justify-start ">
                  <div className="w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent">
                    <div
                      style={{ backgroundImage: `url('${tweed}')` }}
                      className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
                    ></div>
                    <img
                      src={html}
                      alt="Centered Image"
                      className="absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto md:max-h-[60% xs:max-h-[60%] xs:max-w-[60%]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent">
                    <div
                      style={{ backgroundImage: `url('${tweed}')` }}
                      className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
                    ></div>
                    <img
                      src={css}
                      alt="Centered Image"
                      className="absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto md:max-h-[60% xs:max-h-[60%] xs:max-w-[60%]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent">
                    <div
                      style={{ backgroundImage: `url('${tweed}')` }}
                      className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
                    ></div>
                    <img
                      src={js}
                      alt="Centered Image"
                      className="absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto md:max-h-[60%] xs:max-h-[60%] xs:max-w-[60%]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:px-5  xl:rounded-[1.4rem] px-3 xs:py-7 py-11  relative   flex items-center justify-center xs:rounded-[1.2rem] rounded-[1.3rem] md:rounded-[1.5rem] xl:py-9 overflow-hidden dark:border-[#292929] xs:border-[#e2e2e2]  border-[#cdcdcd] border-[1px] gap-1 lg:h-[100%] lg:gap-0 ">
              <div
                style={{ backgroundImage: `url('${tweed}')` }}
                className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.33] brightness-[0.36] opacity-[1] hidden dark:block"
              ></div>

              <div
                style={{
                  backgroundImage: `url('${sundown_fad}')`,
                }}
                className=" xs:h-[60vw] h-[68vw] xs:w-[40%] w-[42%]  lg:h-[16.5rem]  rounded-[0.7rem] md:h-[43vw] md:w-[25%] lg:w-[45%]   bg-cover bg-center relative overflow-hidden shadow-lg xs:shadow-zinc-400 shadow-zinc-500  brightness-[1.12]  xs:top-[-5vw] left-[-1vw] top-[-1.3rem] xl:h-[16rem] xl:w-[40%] dark:shadow-zinc-900 dark:brightness-[1] "
              ></div>
              <div
                style={{
                  backgroundImage: `url('${sundown_fad2}')`,
                }}
                className=" xs:h-[60vw] h-[68vw] xs:w-[40%] w-[42%] lg:h-[16.5rem]  rounded-[0.7rem] md:h-[43vw] md:w-[25%] lg:w-[45%] bg-cover bg-center relative overflow-hidden shadow-lg xs:shadow-zinc-400 shadow-zinc-500
              dark:shadow-zinc-900 brightness-[1.12] dark:brightness-[1.05] right-[-1vw] xs:top-[4vw] top-[1.3rem] xl:h-[16.7rem] xl:w-[40%]  "
              ></div>
            </div>
          </div>
          <div className="w-full xl:w-[32vw] flex flex-col gap-4 md:flex-row lg:flex-col lg:h-full lg:mt-0 lg:w-[40%] md:h-[35vh] xl:h-full  ">
            <Lang
              className={
                "xs:w-full w-full md:w-[60%] md:h-full lg:w-[99.9%] lg:h-[70%] xl:w-full xl:h-[55%]"
              }
              textClass={`lg:hidden xs:left-4 xs:text-lg  xs:w-[89%] w-[94%]  ${
                !textL ? "text-right rtl" : "text-start xs:text-start"
              } md:w-[84%] md:left-14 md:text-xl lg:left-8 xl:mt-0 xl:text-lg`}
              langClass={"md:h-[85px] lg:w-[9vw] lg:h-[5.9vw]"}
              langOptCont={""}
            />
            <Copy
              classNamee={"xl:w-full lg:h-[36%] lg:w-[99.9%] lg:h-[150px]  md:h-full xl:h-[40%]"}
              textClass={"lg:text-lg xl:text-lg"}
              btnClass={"xl:h-[3vw]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
