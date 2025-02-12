import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

import img1 from "../assets/logo/js.png";
import img2 from "../assets/logo/ts.png";
import img3 from "../assets/logo/github.png";
import img4 from "../assets/logo/appwrite.png";
import img5 from "../assets/logo/react.png";
import img6 from "../assets/logo/redux.png";
import img7 from "../assets/logo/tailwind.png";
import img8 from "../assets/logo/next.png";
import img9 from "../assets/logo/git.png";
import img10 from "../assets/logo/vscode.png";
import { useMyContext } from "../MyContext";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import tweed from "../assets/tweed.webp";
import nayaLight from "../assets/nayaLight.webp";
import Slider from "react-infinite-logo-slider";
import { useNavigate } from "react-router-dom";

const ToolsHome = () => {
  const { isTransitioning, currentLang, textL, currentTa, currentUr } =
    useMyContext();
  const { t, i18n } = useTranslation();
  const [isEnter, setIsEnter] = useState(false);

  const icons = [
    { icon: img1, key: 1 },
    { icon: img2, key: 2 },
    { icon: img3, key: 3 },
    { icon: img4, key: 4 },
    { icon: img5, key: 5 },
    { icon: img6, key: 6 },
    { icon: img7, key: 7 },
    { icon: img8, key: 8 },
    { icon: img9, key: 9 },
    { icon: img10, key: 10 },
  ];

  useGSAP(() => {
    gsap.to(".arrowt1", {
      bottom: isEnter ? "1rem" : "0.7rem",
      left: isEnter ? "3rem" : "0.7rem",
      duration: 0.3,
      ease: "power1.out",
    });
  }, [isEnter]);
  useGSAP(() => {
    gsap.to(".arrowt2", {
      bottom: isEnter ? "0.7rem" : "0.5rem",
      left: isEnter ? "0.7rem" : "-1.5rem",
      duration: 0.3,
      ease: "power1.out",
    });
  }, [isEnter]);
  const navigate = useNavigate()

  const navigateTools = () => {
navigate('./tools')
  }

  return (
    <div
      onMouseEnter={() => setIsEnter(true)}
      onMouseLeave={() => setIsEnter(false)}
      onClick={navigateTools}
      className="rounded-[6vw] md:rounded-[4vw] xs:border-[#e5e5e5] border-[#d2d2d2]  dark:border-[#292929] xs:w-[100%] w-[100%] h-[200px] border-[1px] relative  md:h-[29.7vw] xl:w-[28vw] xl:h-[250px] xl:rounded-[2vw] 2xl:w-[35.4w] lg:rounded-[3vw] text-white px-7 py-6 xs:py-5 xs:px-6 md:w-[61vw] xl:px-0 xl:py-7  lg:w-[65vw]  2xl:mr-4 2xl:ml-0 bg-transparent lg:bg-[#ececec] dark:bg-transparent xs:h-[190px] overflow-hidden "
    >
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
        className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.08] xs:brightness-[1.13] opacity-[1] dark:hidden"
      ></div>

      <div
        style={{ backgroundImage: `url('${tweed}')` }}
        className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.30] opacity-[0.9] hidden dark:block"
      ></div>

      <p
        className={`font-[pop2]  mt-[-0.3vw]  text-[1.15rem] text-[#2a2a2a] dark:text-[#cbcbcb] left-[7vw] xs:text-[1.1rem] xs:mt-[-0vw] xs:left-[7vw] xl:text-[1.3rem] xl:mt-[-0.5vw] md:mt-[0vw] xl:left-[2vw]  absolute z-[4] md:text-[1.4rem] w-[83%]  ${
          isTransitioning ? "opacity-0" : "opacity-1"
        }  ${!textL && "text-right rtl"} ${
          currentTa && "xl:text-[1.14vw] xs:text-[3.5vw] text-[0.8rem]"
        } ${
          currentUr && "xl:text-[1.19vw] xs:text-[3.9vw] text-[0.8rem]"
        } transition-opacity duration-700`}
      >
        {t("toolsTitle")}
      </p>
      <div className="flex items-center justify-center h-full overflow-hidden">
        <Slider
          width="80px"
          duration={10}
          blurBorders={false}
          blurBorderColor={"#fff"}
        >
          {icons.map((item) => (
            <Slider.Slide key={item.key}>
              <div className="slider-item  w-[4rem] h-[4rem] flex items-center justify-center bg-[#eaeaea] xl:bg-zinc-200  dark:border-transparent rounded-2xl lg:rounded-xl shadow-md dark:bg-[#222222] overflow-hidden mx-0">
                <img
                  src={item.icon}
                  alt={`Icon ${item.key}`}
                  className="w-[2.3rem] h-[2.3rem] object-contain"
                />
              </div>
            </Slider.Slide>
          ))}
        </Slider>
      </div>

      <div className="icon border-[1px] dark:border-[2px] p-[2.2vw] rounded-full w-fit dark:border-[#333333] border-[#00000038] dark:text-[#bdbdbd] text-[#636363] text-[3.4vw] flex items-center justify-center absolute right-[3%] bottom-[5%] rotate-[-50deg] xs:text-[0.6rem] xs:p-[2.5vw] xs:right-[4%] xs:bottom-[6%] md:text-[1rem] md:p-5   md:right-[1.8%] xl:right-[5%] xl:bottom-[7%]  z-[10] bg-[#ffffff] dark:bg-zinc-900 xl:p-5 overflow-hidden">
        <FaArrowRight className={`arrowt1 md:absolute`} />
        <FaArrowRight className="arrowt2 md:block hidden md:absolute" />
      </div>

      <div className="absolute bg-[#ffffff] left-[-10%] z-[3] w-[30%] top-0 h-full opacity-[1] blur-xl block dark:hidden xs:w-[40%]"></div>
      <div className="absolute bg-[#ffffff] right-[-10%] z-[3] w-[30%] top-0 h-full opacity-[1] blur-xl block dark:hidden xs:w-[40%]"></div>

      <div
        className={`absolute  left-[-18%] z-[3] w-[36%] top-0 h-full opacity-1 blur-xl hidden dark:block brightness-[0.3] xs:w-[48%]`}
        style={{ backgroundImage: `url(${tweed})` }}
      ></div>
      <div
        className="absolute bg-[#000000] right-[-15%] z-[3] w-[36%] top-0 h-full opacity-1 blur-xl hidden dark:block brightness-[0.3] xs:w-[48%]"
        style={{ backgroundImage: `url(${tweed})` }}
      ></div>
    </div>
  );
};

export default ToolsHome;
