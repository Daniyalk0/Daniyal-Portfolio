import React, { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";

const Socials = () => {
  const [insta, setInsta] = useState(false);
  const [email, setEmail] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [X, setX] = useState(false);
  return (
    <div className="w-full  xl:w-[18.5vw] flex flex-col items-center justify-center gap-2 relative ">
      <div className="flex items-center justify-between w-full ">
        <div
          onMouseEnter={() => setLinkedin(true)}
          onMouseLeave={() => setLinkedin(false)}
          className={`p-5 bg-[#eeeeee] dark:bg-zinc-900 flex items-center justify-center rounded-[1.2rem] border-[1px] border-[#c0c0c0]  dark:border-[#292929]  dark:text-white text-[6vw] xl:text-[2.2vw] xl:p-[1.7vw]  relative overflow-hidden xl:rounded-[1.5rem] lg:text-[4vw] `}
        >
           <div
            className={`absolute inset-0  bg-[#0a66c2] transition-opacity duration-700  ${
              linkedin ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <PiLinkedinLogo className="relative" />
        </div>

        <div
          onMouseEnter={() => setX(true)}
          onMouseLeave={() => setX(false)}
          className={`p-5 flex items-center justify-center rounded-[1.2rem] border-[1px] border-[#c0c0c0]  dark:border-[#292929]  dark:text-white text-[6vw] xl:text-[2.2vw] xl:p-[1.7vw]     xl:rounded-[1.5rem] lg:text-[4vw] relative overflow-hidden
       `}
        >
          <div
            className={`absolute inset-0  bg-[#1DA1F2] transition-opacity duration-700  ${
              X ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <FaXTwitter className="relative" />
        </div>
        <div
          onMouseEnter={() => setInsta(true)}
          onMouseLeave={() => setInsta(false)}
          className={`p-5 flex items-center justify-center border-[1px]   text-[6vw] xl:text-[2.1vw] xl:p-[1.7vw]    transition-opacity duration-500 xl:rounded-[1.5rem] lg:text-[4vw] relative overflow-hidden  bg-[#eeeeee] dark:bg-zinc-900   rounded-[1.2rem]  border-[#c0c0c0]  dark:border-[#292929]  dark:text-white`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] transition-opacity duration-700  ${
              insta ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <IoLogoInstagram className="relative z-[3]" />
        </div>
      </div>

      <a
        onMouseEnter={() => setEmail(true)}
        onMouseLeave={() => setEmail(false)}
        href="mailto:getdaniyalkhan@gmail.com"
        className={`w-full p-5 flex items-center justify-center rounded-[1.2rem] border-[1px]  dark:text-white text-black text-[6vw] xl:text-[2.1vw] xl:p-[1.4vw]    xl:rounded-[1.5rem] lg:text-[4vw] border-[#c0c0c0]  dark:border-[#292929] bg-[#eeeeee] dark:bg-zinc-900 relative overflow-hidden`}
      >
         <div
            className={`absolute inset-0  bg-[#D34034] transition-opacity duration-700  ${
              email ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        <TfiEmail className="relative" />
      </a>
    </div>
  );
};

export default Socials;
