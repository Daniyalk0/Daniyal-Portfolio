import React, { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";

const Socials = () => {

    const [insta, setInsta] = useState(false)
  return (
    <div className="w-full  xl:w-[18.5vw] flex flex-col items-center justify-center gap-2 relative ">
      <div className="flex items-center justify-between w-full ">
        <div
          className={`p-5 bg-[#eeeeee] dark:bg-zinc-900 flex items-center justify-center rounded-[1.2rem] border-[1px] border-[#c0c0c0]  dark:border-[#292929]  dark:text-white text-[6vw] xl:text-[2.2vw] xl:p-[1.7vw]  hover:dark:bg-[#0a66c2]  hover:bg-[#0a66c2]  transition-hover duration-500 xl:rounded-[1.5rem] lg:text-[4vw] `}
        >
          <PiLinkedinLogo />
        </div>
        <div
          className={`p-5 bg-[#eeeeee] dark:bg-zinc-900 flex items-center justify-center rounded-[1.2rem] border-[1px] border-[#c0c0c0]  dark:border-[#292929]  dark:text-white text-[6vw] xl:text-[2.2vw] xl:p-[1.7vw]  hover:dark:bg-[#1DA1F2]  hover:bg-[#1DA1F2]  transition-hover duration-500 xl:rounded-[1.5rem] lg:text-[4vw] `}
        >
          <FaXTwitter />
        </div>
        <div
        onMouseEnter={() => setInsta(true)}
        onMouseLeave={() => setInsta(false)}
          className={`p-5 flex items-center justify-center border-[1px]   text-[6vw] xl:text-[2.1vw] xl:p-[1.7vw]    transition-all duration-500 xl:rounded-[1.5rem] lg:text-[4vw] relative overflow-hidden  bg-[#eeeeee] dark:bg-zinc-900   rounded-[1.2rem]  border-[#c0c0c0]  dark:border-[#292929]  dark:text-white`}
        >
        <div className={`absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] transition-opacity duration-500  ${insta ? 'opacity-100' : 'opacity-0'}`}></div>
          <IoLogoInstagram className="relative z-[3]"/>
        </div>
      </div>

      <a
        href="mailto:getdaniyalkhan@gmail.com"
        className={`w-full p-5 flex items-center justify-center rounded-[1.2rem] border-[1px]  dark:text-white text-black text-[6vw] xl:text-[2.1vw] xl:p-[1.4vw]   hover:dark:bg-[#D34034] hover:bg-[#D34034] transition-all duration-500 xl:rounded-[1.5rem] lg:text-[4vw] border-[#c0c0c0]  dark:border-[#292929] bg-[#eeeeee] dark:bg-zinc-900 `}
        onMouseEnter={() => console.log('entereed')
        }
      >
        <TfiEmail className=""/>
      </a>
    </div>
  );
};

export default Socials;
