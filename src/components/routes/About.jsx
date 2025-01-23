import React, { useEffect, useState } from "react";
import nayaLight from "../../assets/nayaLight.webp";
import tweed from "../../assets/tweed.webp";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { RxCross2 } from "react-icons/rx";
import { useMyContext } from "../../MyContext";
import { useTranslation } from "react-i18next";
import Lang from "../Lang";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const About = () => {
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

  const settings = {
    customPaging: function (i) {
      return (
        <div className="w-[0.45rem] h-[0.45rem] bg-zinc-500 rounded-full ml-[30%] mt-[35%]"></div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  return (
    <div className="   py-4  px-3 w-full h-full ">
      <div className="about border-[2px] xs:border-[#e3e3e3] rounded-[6vw] dark:border-[#292929] border-[#cdcdcd] min-h-screen   px-[2vw] xs:px-2 xs:py-3 lg:rounded-[4vw] lg:py-4 lg:px-0 xl:flex items-center gap-4   relative   overflow-hidden   xl:rounded-[3vw] flex-col lg:mt-[3rem]   z-[999] xl:mt-[3rem] xl:py-4 md:mt-[3rem] md:py-6 mt-[2.5rem] ">
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
          <NavLink to={'/'}>

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
        <div className="w-full h-full flex items-center justify-center gap-4 flex-col lg:flex-row xs:mt-4">
          <div className=" w-full  rounded-[6vw] md:rounded-[4vw]  md:w-full border-[1px] relative overflow-hidden xs:border-[#e5e5e5] border-[#d2d2d2]    dark:border-[#292929]  xl:w-[40vw] xl:h-[610px]  2xl:w-[35vw] lg:rounded-[2vw]  xl:px-9 xl:py-2 lg:w-[45vw] lg:h-[620px] lg:px-8 md:px-7  h-auto md:py-8 px-6 py-7 xs:px-6 xs:py-8 xl:rounded-[2vw]">
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
                className={`font-[pop2]  text-[1.5rem] text-[#383838] dark:text-[#cbcbcb] md:text-[1.7rem] lg:text-[1.5rem] xs:text-[1.3rem] xs:mt-[2vw] xl:text-[1.6rem] xl:mt-[2vw]  relative z-[2]  ${
                  isTransitioning ? "opacity-0 " : "opacity-1"
                } transition-opacity duration-700 ${
                  !textL && "text-right rtl"
                } ${
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
                className={` lg:text-[0.7rem] font-[real] uppercase tracking-[0.6vw] text-[0.7rem] dark:text-[#4e4e4e] text-gray-400 font-semibold  xs:text-[0.6rem] xs:tracking-[0.4vw] md:tracking-[0.3vw] md:text-[0.8rem] xl:text-[0.8rem] xl:tracking-[0.2vw] relative z-[1] ${
                  isTransitioning ? "opacity-0" : "opacity-1"
                }  ${!textL && "text-right rtl"} transition-all duration-700 `}
              >
                {t("myStory")}
              </h2>
              <p
                className={`font-[real] md:text-[1.2rem] lg:text-[1.08rem]  text-[1.15rem] leading-8  text-[#434343] md:leading-8 dark:text-[#cbcbcb] xl:leading-[2.2rem] xs:text-[1rem]  xl:text-[1.15rem]  relative z-[2]  ${
                  isTransitioning ? "opacity-0 " : "opacity-1"
                } transition-opacity duration-700 ${
                  !textL && "text-right rtl"
                } ${
                  currentTa && "xl:text-[1vw] lg:text-[1.1vw] xs:text-[4vw] text-[0.8rem] "
                }`}
              >
                {/* Passionate about web development and enjoy solving problems. */}
                {t("aboutText1")}
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <h2
                className={`lg:text-[0.7rem]  font-[real] uppercase tracking-[0.6vw] text-[0.7rem] dark:text-[#4e4e4e] text-gray-400 font-semibold  xs:text-[0.6rem] xs:tracking-[0.4vw] md:tracking-[0.3vw] md:text-[0.8rem] xl:text-[0.8rem] xl:tracking-[0.2vw] relative z-[1] ${
                  isTransitioning ? "opacity-0" : "opacity-1"
                }  ${!textL && "text-right rtl"} transition-all duration-700 `}
              >
                {t("whatIdo")}
              </h2>
              <p
                className={`font-[real] md:text-[1.2rem] lg:text-[1.08rem]  text-[1.15rem] leading-8  text-[#434343] md:leading-8 dark:text-[#cbcbcb] xl:leading-[2.2rem] xs:text-[1rem]  xl:text-[1.15rem]  relative z-[2]  ${
                  isTransitioning ? "opacity-0 " : "opacity-1"
                } transition-opacity duration-700 ${
                  !textL && "text-right rtl"
                } ${
                  currentTa && "xl:text-[1vw] xs:text-[4vw]  lg:text-[1.1vw]  text-[0.8rem] "
                }`}
              >
                {/* Passionate about web development and enjoy solving problems. */}
                {t("aboutText2")}
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-4 flex-col md:flex-row lg:flex-col xs:w-full w-full lg:w-[45vw] relative xl:w-[40vw] ">
            <div
              className={` rounded-[6vw] md:rounded-[4vw] xs:border-[#e5e5e5] border-[#d2d2d2]  dark:border-[#292929]  w-full  h-auto border-[1px] relative overflow-hidden xl:w-[40vw] xl:h-[330px] xl:rounded-[2vw] 2xl:w-[35.4w] lg:rounded-[3vw]  px-6 py-9   xl:px-9 xl:py-7  2xl:mr-4 2xl:ml-0  bg-[#ececec] dark:bg-transparent  md:items-center  flex-col  lg:h-[312px]  lg:px-8 lg:py-8 lg:w-[100%] md:h-[262px]  md:w-[70%]  md:px-7 md:py-8 xs:w-full xs:px-6 xs:py-8 xs:pb-14`}
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

              <h2
                className={`lg:text-[0.7rem]  font-[real] uppercase tracking-[0.6vw] text-[0.7rem] dark:text-[#4e4e4e] text-gray-500 font-semibold  xs:text-[0.6rem] xs:tracking-[0.4vw] md:tracking-[0.3vw] md:text-[0.8rem] xl:text-[0.8rem] xl:tracking-[0.2vw] relative z-[1] ${
                  isTransitioning ? "opacity-0" : "opacity-1"
                }  ${
                  !textL && "text-right rtl"
                } transition-all duration-700  mb-1 `}
              >
                {t("best")}
              </h2>

              <Slider {...settings} className="custom-slider h-full w-full ">
                <div className=" ">
                  <p
                    className={`font-[pop2] lg:mt-[1.1rem] mt-[1rem] text-[1.25rem] text-[#313131] dark:text-[#cbcbcb]  xs:text-[1.1rem] xs:mt-[4vw] xl:text-[1.4rem] xl:mt-[2vw] md:mt-[2vw]  relative z-[2]  ${
                      isTransitioning ? "opacity-0 " : "opacity-1"
                    } transition-opacity duration-700 ${
                      !textL && "text-right rtl"
                    } ${
                      currentTa &&
                      "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                    }`}
                  >
                    {/* Passionate about web development and enjoy solving problems. */}
                    {t("responsive")}
                  </p>
                  <div className=" mt-3 xs:mt-2">
                    <p
                      className={`font-[real] md:text-[1.1rem] lg:text-[1.08rem]  text-[1.15rem] leading-8 xs:leading-7  text-[#434343] md:leading-8 dark:text-[#cbcbcb] xl:leading-[2.2rem] xs:text-[1rem]  xl:text-[1.15rem]  relative z-[2]  ${
                        isTransitioning ? "opacity-0 " : "opacity-1"
                      } transition-opacity duration-700 ${
                        !textL && "text-right rtl"
                      } ${
                        currentTa &&
                        "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                      }`}
                    >
                      {/* Passionate about web development and enjoy solving problems. */}
                      {t("responsiveText")}
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    className={`font-[pop2] lg:mt-[1.2rem] mt-[1rem]  text-[1.25rem] text-[#313131] dark:text-[#cbcbcb]  xs:text-[1.1rem] xs:mt-[4vw] xl:text-[1.4rem] xl:mt-[2vw] md:mt-[2vw]   relative z-[2]  ${
                      isTransitioning ? "opacity-0 " : "opacity-1"
                    } transition-opacity duration-700 ${
                      !textL && "text-right rtl"
                    } ${
                      currentTa &&
                      "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                    }`}
                  >
                    {/* Passionate about web development and enjoy solving problems. */}
                    {t("UIUX")}
                  </p>
                  <div className=" mt-3  xs:mt-2">
                    <p
                      className={`font-[real] md:text-[1.1rem] lg:text-[1.08rem]  text-[1.15rem] leading-8 xs:leading-7  text-[#434343] md:leading-8 dark:text-[#cbcbcb] xl:leading-[2.2rem] xs:text-[1rem]  xl:text-[1.15rem]  relative z-[2]  ${
                        isTransitioning ? "opacity-0 " : "opacity-1"
                      } transition-opacity duration-700 ${
                        !textL && "text-right rtl"
                      } ${
                        currentTa &&
                        "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                      }`}
                    >
                      {/* Passionate about web development and enjoy solving problems. */}
                      {t("UIUXtext")}
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    className={`font-[pop2]  lg:mt-[1.2rem] mt-[1rem] text-[1.25rem] text-[#313131] dark:text-[#cbcbcb]  xs:text-[1.1rem] xs:mt-[4vw] xl:text-[1.4rem] xl:mt-[2vw] md:mt-[2vw]  relative z-[2]  ${
                      isTransitioning ? "opacity-0 " : "opacity-1"
                    } transition-opacity duration-700 ${
                      !textL && "text-right rtl"
                    } ${
                      currentTa &&
                      "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                    }`}
                  >
                    {/* Passionate about web development and enjoy solving problems. */}
                    {t("vcs")}
                  </p>
                  <div className=" mt-3  xs:mt-2">
                    <p
                      className={`font-[real] md:text-[1.1rem] lg:text-[1.08rem]  text-[1.15rem] leading-8 xs:leading-7  text-[#434343] md:leading-8 dark:text-[#cbcbcb] xl:leading-[2.2rem] xs:text-[1rem]  xl:text-[1.15rem]  relative z-[2]  ${
                        isTransitioning ? "opacity-0 " : "opacity-1"
                      } transition-opacity duration-700 ${
                        !textL && "text-right rtl"
                      } ${
                        currentTa &&
                        "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                      }`}
                    >
                      {/* Passionate about web development and enjoy solving problems. */}
                      {t("vcsText")}
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    className={`font-[pop2] lg:mt-[1.2rem] mt-[1rem]  text-[1.25rem] text-[#313131] dark:text-[#cbcbcb]  xs:text-[1.1rem] xs:mt-[4vw] xl:text-[1.4rem] xl:mt-[2vw] md:mt-[2vw]  relative z-[2]  ${
                      isTransitioning ? "opacity-0 " : "opacity-1"
                    } transition-opacity duration-700 ${
                      !textL && "text-right rtl"
                    } ${
                      currentTa &&
                      "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                    }`}
                  >
                    {/* Passionate about web development and enjoy solving problems. */}
                    {t("api")}
                  </p>
                  <div className=" mt-3  xs:mt-2">
                    <p
                      className={`font-[real] md:text-[1.2rem] lg:text-[1.08rem]  text-[1.15rem] leading-8 xs:leading-7  text-[#434343] md:leading-8 dark:text-[#cbcbcb] xl:leading-[2.2rem] xs:text-[1rem]  xl:text-[1.15rem]  relative z-[2]  ${
                        isTransitioning ? "opacity-0 " : "opacity-1"
                      } transition-opacity duration-700 ${
                        !textL && "text-right rtl"
                      } ${
                        currentTa &&
                        "xl:text-[0.5rem] xs:text-[4vw] text-[0.8rem] "
                      }`}
                    >
                      {/* Passionate about web development and enjoy solving problems. */}
                      {t("apiText")}
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
            <Lang
              className={
                " xl:h-[260px] lg:w-[99%] lg:h-[290px] xl:w-full md:w-[37vw] md:h-[264px] md:py-3 w-full px-5 h-[236px] xs:w-full xs:px-6 xl:px-8 "
              }
              langClass={"md:h-[5rem] mb-2"}
              textClass={`left-7 top-7 xs:left-[1.8rem] xl:w-[87%] left-[2rem] top-8 md:top-3 xs:top-6 xs:text-[1.1rem] xl:left-[2.2rem]  ${
                !textL ? "text-right rtl" : "xs:text-start"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
