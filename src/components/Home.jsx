import React from "react";
import ReUse from "./ReUse";
import ProjectTab from "./ProjectTab";
import Onixstore from "./HomeProjects/Onixstore";
import Blog from "./HomeProjects/Blog";
import Game from "./HomeProjects/Game";
import AboutHome from "./AboutHome";
import Socials from "./Socials";
import Github from "./Github";
import ToolsHome from "./ToolsHome";
import Copy from "./Copy";
import CV from "./CV";
import Lang from "./Lang";
import tweed from '../assets/tweed.webp'
import seamless_paper_texture from '../assets/seamless_paper_texture.webp'

const Home = () => {
  return (
    <>
      <div className=" mt-[-1.7rem]  py-6  px-3">
        <div className="border-[2px]  dark:border-[#292929] border-[#cdcdcd] min-h-screen rounded-[5vw]  px-[2vw] xs:px-3 xs:py-3 lg:rounded-[4vw] lg:py-4 lg:px-0 xl:flex items-center justify-center gap-4 xl:py-0 md:hidden hidden relative overflow-hidden dark:bg-zinc-900  xl:rounded-[3vw] flex-col  ">
          <div
            style={{
              backgroundImage: `url('${seamless_paper_texture}')`,
            }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.05] opacity-[0.9] dark:hidden"
          ></div>
          <div
            style={{ backgroundImage: `url('${tweed}')` }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.35] opacity-[0.9] hidden dark:block"
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
                <Game />
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
      <div className="w-full md:flex items-center justify-center xl:hidden hidden ">
        <div className="  items-center justify-center w-[97%] py-4 md:flex    border-[2px]  dark:border-[#292929] border-[#cdcdcd] min-h-screen  flex-col gap-4 relative overflow-hidden rounded-[5vw] px-4  ">
        <div
          style={{
            backgroundImage: `url('./src/assets/seamless_paper_texture.webp')`,
          }}
          className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.07] opacity-[0.9] dark:hidden"
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
                <Game />
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
          </div>
        </div>
      </div>

      <div className=" items-center justify-center gap-3  w-full flex md:hidden min-h-screen   relative px-2 py-2 xs:mt-[-1rem] mt-[-1rem] ">
       
        <div className="flex items-center gap-4 justify-between p-2 rounded-[6vw] w-[100%] flex-col md:gap-5 border-[2px]  dark:border-[#292929] border-[#cdcdcd] relative overflow-hidden">
        <div
          style={{
            backgroundImage: `url('./src/assets/seamless_paper_texture.webp')`,
          }}
          className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.07] opacity-[0.9] dark:hidden"
        ></div>
        <div
          style={{ backgroundImage: `url('./src/assets/tweed.webp')` }}
          className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.35] opacity-[0.9] hidden dark:block"
        ></div>
          <ReUse />
          <AboutHome />
          <Onixstore />
          <Blog />
          <Game />
          <Github />
          <div className="flex items-center gap-3 relative flex-col w-full">
            <ToolsHome />
          </div>
          <div className="flex items-center justify-center gap-3 xs:gap-2 w-full">
            <CV />
            <Lang />
          </div>
          <Copy />
        </div>
      </div>
    </>
  );
};

export default Home;
