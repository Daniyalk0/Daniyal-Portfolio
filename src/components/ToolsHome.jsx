import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { FaArrowRight } from "react-icons/fa6";
// import { FaReact } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { FaJs } from "react-icons/fa";
// import { SiRedux } from "react-icons/si";
// import { useGSAP } from "@gsap/react";
// import { SiAppwrite } from "react-icons/si";
// import gsap from "gsap/all";
// import { FaGitAlt } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import img1 from "../assets/logo/html.png";
import img2 from "../assets/logo/css.png";
import img3 from "../assets/logo/github.png";
import img4 from "../assets/logo/appwrite.png";
import img5 from "../assets/logo/react.png";
import img6 from "../assets/logo/redux.png";
import img7 from "../assets/logo/tailwind.png";
import img8 from "../assets/logo/js.png";
import img9 from "../assets/logo/git.png";
import { useMyContext } from "../MyContext";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import tweed from '../assets/tweed.webp'

const ToolsHome = () => {
  const sliderRef = useRef(null);
  const { isTransitioning, currentLang, textL, currentTa, currentUr } = useMyContext();
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
  ];
  useEffect(() => {
    const slider = sliderRef.current;
    let start = 0;

    const step = () => {
      start -= 1; // Adjust speed by changing the decrement value
      if (Math.abs(start) >= slider.scrollWidth / 2) {
        start = 0; // Reset position for seamless effect
      }
      slider.style.transform = `translateX(${start}px)`;
      requestAnimationFrame(step);
    };

    step(); // Start animation
  }, []);

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

  return (
    <div 
    onMouseEnter={() => setIsEnter(true)}
    onMouseLeave={() => setIsEnter(false)} className="rounded-[6vw] md:rounded-[4vw] border-[#c0c0c0]  dark:border-[#292929] xs:w-[100%] w-[100%] h-[200px] border-[1px] relative overflow-hidden  md:h-[29.7vw] xl:w-[28vw] xl:h-[250px] xl:rounded-[2vw] 2xl:w-[35.4w] lg:rounded-[3vw] text-white px-7 py-6 xs:py-5 xs:px-6 md:w-[61vw] xl:px-0 xl:py-7  lg:w-[65vw]  2xl:mr-4 2xl:ml-0 bg-transparent lg:bg-[#ececec] dark:bg-transparent xs:h-[190px]">


      <p
        className={`font-[pop2]  mt-[-0.3vw]  text-[1.15rem] text-[#2a2a2a] dark:text-[#cbcbcb] left-[7vw] xs:text-[1.1rem] xs:mt-[-0vw] xs:left-[7vw] xl:text-[1.3rem] xl:mt-[-0.5vw] md:mt-[0vw] xl:left-[2vw]  absolute z-[4] md:text-[1.4rem] w-[83%]  ${
          isTransitioning ? "opacity-0" : "opacity-1"
        }  ${!textL && "text-right rtl"} ${currentTa && "xl:text-[1.14vw] xs:text-[3.5vw] text-[0.8rem]" } ${currentUr && "xl:text-[1.19vw] xs:text-[3.9vw] text-[0.8rem]" } transition-opacity duration-700`}
      >
        {t("toolsTitle")}
      </p>
      <div className="slider flex items-center justify-center w-full h-full  relative z-[2]">
        <div className="slider-track " ref={sliderRef}>
          {icons.concat(icons).map((src, index) => (
            <div
              className="slide m-2 xs:m-[2.5vw] xl:w-[10%] w-[9%] flex items-center justify-center "
              key={index}
            >
              {/* {src.icon && <src.icon  className="bg-zinc-700 inline-block m-2 p-2 rounded-[2vw] md:rounded-[1.5vw] xl:rounded-[0.8vw]"/>} */}
              <img
                src={src.icon}
                alt=""
                className=" p-3 bg-zinc-300 dark:bg-zinc-800  rounded-[2vw] md:rounded-[1.5vw] xl:rounded-[0.8vw] xs:rounded-[5vw]"
              />

              {/* {console.log(src.icon.name)} */}
            </div>
          ))}
        </div>
      </div>
        <div className="icon border-[1px] dark:border-[2px] p-[2.2vw] rounded-full w-fit dark:border-[#333333] border-[#00000038] dark:text-[#bdbdbd] text-[#636363] text-[3.4vw] flex items-center justify-center absolute right-[3%] bottom-[5%] rotate-[-50deg] xs:text-[0.6rem] xs:p-[2.5vw] xs:right-[4%] xs:bottom-[6%] md:text-[1rem] md:p-5   md:right-[1.8%] xl:right-[5%] xl:bottom-[7%]  z-[10] bg-[#eeeeee] dark:bg-zinc-900 xl:p-5 overflow-hidden">
          <FaArrowRight className={`arrowt1 md:absolute`} />
          <FaArrowRight className="arrowt2 md:block hidden md:absolute" />
        </div>

      <div className="absolute bg-[#ececec] left-[-10%] z-[3] w-[30%] top-0 h-full opacity-[1] blur-xl block dark:hidden "></div>
      <div className="absolute bg-[#ececec] right-[-10%] z-[3] w-[30%] top-0 h-full opacity-[1] blur-xl block dark:hidden"></div>

      <div className={`absolute  left-[-18%] z-[3] w-[36%] top-0 h-full opacity-1 blur-xl hidden dark:block brightness-[0.3] xs:w-[42%]`} style={{backgroundImage:`url(${tweed})`}}></div>
      <div className="absolute bg-[#000000] right-[-15%] z-[3] w-[36%] top-0 h-full opacity-1 blur-xl hidden dark:block brightness-[0.3] xs:w-[42%]" style={{backgroundImage:`url(${tweed})`}}></div>
    </div>
  );
};

export default ToolsHome;
