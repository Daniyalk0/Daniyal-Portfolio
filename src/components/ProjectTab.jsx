import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbBrandVercel } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectTab = ({
  image1,
  image2,
  link1,
  link2,
  classImage1,
  classImage2,
  wClass,
  parentClass
}) => {
  const [hoverState, setHoverState] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
  const [vercelHover, setVercelHover] = useState(false);

  useEffect(() => {
    console.log("github", githubHover);
  }, [githubHover]);


  // console.log(githubHover);

  const settings = {
    dots: true, // Pagination
    infinite: true, // Infinite looping
    speed: 700, // Speed of transition
    autoplay: true, // Autoplay functionality
    autoplaySpeed: 3000, // Autoplay delay
    slidesToShow: 1, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: false, // Show next/prev arrows
  };

  return (
   

    <div
      className={`w-[91.6vw] h-[240px] rounded-[6vw] border-[1px] relative  
      overflow-hidden border-[#c0c0c0]  dark:border-[#292929] md:h-[346px]  md:rounded-[4vw] xl:w-[20vw] xl:h-[250px] xl:rounded-[2vw] 2xl:w-[19vw] flex items-center justify-center ${wClass} xs:w-[91vw]`}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <Slider {...settings} className="w-full h-full">
        <div
          className={`w-[95vw] h-[240px] md:h-[346px] md:w-[49vw]  xl:w-[20vw] xl:h-[250px]  2xl:w-[19vw] overflow-hidden flex items-center justify-center`}
        >
          <img src={image1} alt="Image 1" className={`${classImage1}`} />
        </div>
        <div
          className={`w-[95vw] h-[240px] md:h-[346px] md:w-[49vw]  xl:w-[20vw] xl:h-[250px]  2xl:w-[19vw] `}
        >
          <img src={image2} alt="Image 2" className={` ${classImage2}`} />
        </div>
      </Slider>
      <div className="links hidden md:block ">
        <a href={`${link2}`} target="_blank">
          <div
            onMouseEnter={() => setVercelHover(true)}
            onMouseLeave={() => setVercelHover(false)}
            className={`vercel h-full ${
              hoverState ? "right-0" : "-right-[100vw]"
            } w-1/2  absolute  z-[5] transition-all duration-500 top-0 bg-[#eeeeee] dark:bg-zinc-900`}
          >
            <TbBrandVercel
              className={`  absolute z-[6] top-[40%] left-[30%] xl:text-[4vw] ${
                vercelHover ? "text-zinc-600" : "dark:text-zinc-800 text-zinc-400"
              } transition-all duration-300 md:text-[9vw] lg:top-[38%]`}
            />
          
          <div
            style={{ backgroundImage: `url('./src/assets/tweed.webp')` }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.35] opacity-[1] hidden dark:block"
          ></div>
          </div>
        </a>
        <a href={`${link1}`} target="_blank">
          <div
            onMouseEnter={() => setGithubHover(true)}
            onMouseLeave={() => setGithubHover(false)}
            className={`github  h-full ${
              hoverState ? "left-0" : "-left-[100vw]"
            } w-1/2  absolute  z-[5] transition-all duration-500 border-r-[1px] border-[#c0c0c0]  dark:border-[#292929] top-0 bg-[#eeeeee] dark:bg-zinc-900`}
          >
        
        <div
            style={{ backgroundImage: `url('./src/assets/tweed.webp')` }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.35] opacity-[1] hidden dark:block"
            ></div>
            <FiGithub
              className={`absolute z-[6] top-[40%] left-[30%] xl:text-[4vw]  ${
                githubHover ? "text-zinc-600" : "dark:text-zinc-800 text-zinc-400"
              } transition-all duration-300 md:text-[9vw] lg:top-[38%]`}
            />
          </div>
        
        </a>
      </div>

      <div className="bg-[#00000054] p-1 rounded-full  md:hidden  flex items-center justify-center absolute left-[2%] bottom-[4%]  text-zinc-500 xs:text-[1.1rem] xs:p-2 shadow-lg  shadow-zinc-800 ">
        <FiGithub  className=" text-[#c8c8c8]"/>
      </div>
      <div
        className="bg-[#00000054] p-1 rounded-full shadow-lg shadow-zinc-800 flex items-center justify-center md:hidden  absolute right-[2%] bottom-[4%] text-zinc-500 xs:text-[1.1rem] xs:p-2"
        onClick={() => console.log("clickedd")}
      >
        <TbBrandVercel className=" text-[#c8c8c8]" />
      </div>
    </div>
     
  );
};

export default ProjectTab;
