import React, { useEffect, useState } from "react";
import ReUse from "./ReUse";
import ProjectTab from "./ProjectTab";
import Onixstore from "./HomeProjects/Onixstore";
import Blog from "./HomeProjects/Blog";
import Clone from "./HomeProjects/Clone";
import AboutHome from "./AboutHome";
import Socials from "./Socials";
import Github from "./Github";
import ToolsHome from "./ToolsHome";
import Copy from "./Copy";
import CV from "./CV";
import Lang from "./Lang";
import tweed from "../assets/tweed.webp";
import nayaLight from "../assets/nayaLight.webp";
import seamless_paper_texture from "../assets/seamless_paper_texture.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    requestAnimationFrame(() => {
      gsap.fromTo(
        ".reuse",
        { opacity: 0, y: -100 },
        { opacity: 1, duration: 1.5, y: 0 }
      );

      gsap.fromTo(
        ".reuse2",
        { opacity: 0, x: -100 },
        { opacity: 1, duration: 1.3, x: 0, stagger: 0.5 }
      );
    });
  }, []); // Empty dependency array ensures it runs onl
  return (
    <>
      <div className="   py-4  px-3">
        <div className="reuse border-[2px]  dark:border-[#292929] border-[#cdcdcd] min-h-screen rounded-[5vw]  px-[2vw] xs:px-3 xs:py-3 lg:rounded-[4vw] lg:py-4 lg:px-0 xl:flex items-center justify-center gap-4 xl:py-0 md:hidden hidden relative   overflow-hidden   xl:rounded-[3vw] flex-col   z-[999] mt-12">
          <div
            style={{
              backgroundImage: `url('${nayaLight}')`,
            }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.02] opacity-[1] dark:hidden  block"
          ></div>
          <div
            style={{ backgroundImage: `url('${tweed}')` }}
            className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.35] brightness-[0.37] opacity-[1] hidden dark:block"
          ></div>

          <div className="flex items-center justify-center gap-3 py-3">
            <div className=" flex-wrap items-center justify-center gap-3  w-[78%]  xl:flex ">
              <div className="flex items-center nowrap justify-between w-full 2xl:justify-center 2xl:gap-5">
                <ReUse />
                <Onixstore />
                <Blog />
              </div>
              <div className="flex items-center xl:gap-3 ">
                <AboutHome />
                <Clone />
              </div>
              <div className="w-full flex items-start gap-4 ">
                {/* <ExperienceHome /> */}
                <Lang />
                <CV />
                <ToolsHome />
              </div>
            </div>
            <div className="flex items-center flex-col gap-5">
              <Socials />
              <Github />
              <Copy />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:flex items-center justify-center xl:hidden hidden reuse">
        <div className="  items-center justify-center w-[97%] py-4 md:flex    border-[2px]  dark:border-[#292929] border-[#cdcdcd] min-h-screen  flex-col gap-4 relative overflow-hidden rounded-[5vw] px-4 mt-[2rem]">
          <div
            style={{
              backgroundImage: `url('./src/assets/seamless_paper_texture.webp')`,
            }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.09] opacity-[1] dark:hidden"
          ></div>
          <div
            style={{ backgroundImage: `url('./src/assets/tweed.webp')` }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.35] opacity-[0.9] hidden dark:block"
          ></div>
          <div className="flex items-center  justify-between w-full flex-col gap-4">
            <ReUse />
            <AboutHome />
          </div>
          <div className="flex flex-col items-center gap-4 w-full ">
            <div className="flex items-center flex-col w-full gap-4 ">
              <div className="flex items-center justify-center w-full gap-3  ">
                <Onixstore />
                <Blog />
              </div>
              <div className="flex items-center justify-between w-full gap-4 flex-col ">
                <Clone />
              </div>
            </div>
            <div className="w-full flex items-center justify-center px-0">
              <Github />
            </div>
            <div className="flex items-center gap-3 w-full">
              <ToolsHome />
              <Copy />
            </div>
            <div className="flex items-center justify-center gap-3 w-full">
              <CV />
              <Lang />
            </div>
            <Socials />
          </div>
        </div>
      </div>

      <div className="reuse2 items-center justify-center gap-3  w-full flex md:hidden min-h-screen   relative px-2 py-2 mt-[1rem]  ">
        <div className="flex items-center gap-4 justify-between p-2 rounded-[6vw] w-[100%] flex-col md:gap-5 border-[2px]  dark:border-[#292929] border-[#e3e3e3] bg-gray-300 dark:bg-zinc-900 relative overflow-hidden ">
          <div
            style={{
              backgroundImage: `url('${nayaLight}')`,
            }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.13] opacity-[0.9] dark:hidden"
          ></div>
          <div
            style={{ backgroundImage: `url('${tweed}')` }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.32] opacity-[0.9] hidden dark:block"
          ></div>
          <ReUse />
          <AboutHome />
          <Onixstore />
          <Blog />
          <Clone />
          <Github />
          <div className="flex items-center gap-3 relative flex-col w-full">
            <ToolsHome />
          </div>
          <div className="flex items-center justify-center gap-3 xs:gap-2 w-full">
            <CV />
            <Lang />
          </div>
          <Copy />
          <Socials />
        </div>
      </div>
    </>
  );
};

export default Home;
