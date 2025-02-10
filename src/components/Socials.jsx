import React, { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import tweed from "../assets/tweed.webp";
import nayaLight from "../assets/nayaLight.webp";

const Socials = () => {
  const [insta, setInsta] = useState(false);
  const [email, setEmail] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [X, setX] = useState(false);

  return (
    <div className="social w-full  xl:w-[18.5vw] flex xl:flex-col items-center justify-center gap-2 relative ">
      <div className="flex items-center justify-between w-full ">
        <a
        href="https://www.linkedin.com/in/daniyal-khan-648107263/"
        target="_blank"
          onMouseEnter={() => setLinkedin(true)}
          onMouseLeave={() => setLinkedin(false)}
          className={`p-5 w-[23%] xl:w-auto bg-[#eeeeee] dark:bg-zinc-900 flex items-center justify-center rounded-[1.2rem] border-[1px] xs:border-[#e5e5e5] border-[#d2d2d2]  dark:border-[#292929]  dark:text-white text-[6vw] xl:text-[2.2vw] xl:p-[1.7vw]  relative overflow-hidden xl:rounded-[1.5rem] lg:text-[4vw] `}
        >
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
          <div
            className={`absolute inset-0  bg-[#0a66c2] transition-direction duration-500  ${
              linkedin ? "bottom-[0]" : "bottom-[100%]"
            }`}
          ></div>
          <PiLinkedinLogo className="relative" />
        </a>

        <a
        href="https://x.com/ll0sts0ull_"
        target="_blank"
          onMouseEnter={() => setX(true)}
          onMouseLeave={() => setX(false)}
          className={`p-5 flex items-center justify-center rounded-[1.2rem] border-[1px] xs:border-[#e5e5e5] border-[#d2d2d2]  dark:border-[#292929]  dark:text-white text-[6vw] xl:text-[2.2vw] xl:p-[1.7vw]     xl:rounded-[1.5rem] w-[23%] xl:w-auto lg:text-[4vw] relative overflow-hidden
       `}
        >
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
          <div
            className={`absolute inset-0  bg-[#1DA1F2] transition-direction duration-500  ${
              X ? "bottom-0" : "bottom-[100%]"
            }`}
          ></div>
          <FaXTwitter className="relative" />
        </a>
        <a
        href="https://www.instagram.com/ll0sts0ull/?hl=en"
        target="_blank"
          onMouseEnter={() => setInsta(true)}
          onMouseLeave={() => setInsta(false)}
          className={`p-5 flex items-center justify-center border-[1px]   text-[6vw] xl:text-[2.1vw] xl:p-[1.7vw]    transition-opacity duration-500 xl:rounded-[1.5rem] lg:text-[4vw] relative overflow-hidden  bg-[#eeeeee] dark:bg-zinc-900   rounded-[1.2rem]  xs:border-[#e5e5e5] border-[#d2d2d2]  dark:border-[#292929] w-[23%] xl:w-auto  dark:text-white`}
        >
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
          <div
            className={` absolute opacity-100 inset-0 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] transition-direction duration-500  ${
              insta ? "bottom-[0]" : "bottom-[100%]"
            }`}
          ></div>
          <IoLogoInstagram className="relative z-[3]" />
        </a>
        <a
        onMouseEnter={() => setEmail(true)}
        onMouseLeave={() => setEmail(false)}
        href="mailto:getdaniyalkhan@gmail.com"
        className={`  p-5 flex items-center justify-center rounded-[1.2rem] border-[1px]  dark:text-white text-black text-[6vw] xl:text-[2.1vw] xl:p-[1.4vw]    xl:rounded-[1.5rem] lg:text-[4vw] xs:border-[#e5e5e5] border-[#d2d2d2] w-[23%] xl:w-auto dark:border-[#292929] bg-[#eeeeee] dark:bg-zinc-900 relative overflow-hidden xl:hidden`}
      >
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
       <div
          className={`absolute inset-0  bg-[#D34034] transition-direction duration-500  ${
            email ? "bottom-[0]" : "bottom-[100%]"
          }`}
        ></div>
        <TfiEmail className="relative" />
      </a>
      </div>

      <a
        onMouseEnter={() => setEmail(true)}
        onMouseLeave={() => setEmail(false)}
        href="mailto:getdaniyalkhan@gmail.com"
        className={`xl:w-full  p-5  items-center justify-center rounded-[1.2rem] border-[1px]  dark:text-white text-black text-[6vw] xl:text-[2.1vw] xl:p-[1.4vw]    xl:rounded-[1.5rem] lg:text-[4vw] border-[#c0c0c0]  dark:border-[#292929] bg-[#eeeeee] dark:bg-zinc-900 relative overflow-hidden xl:flex hidden`}
      >
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
        <div
          className={`absolute inset-0  bg-[#D34034] transition-direction duration-500  ${
            email ? "bottom-[0]" : "bottom-[100%]"
          }`}
        ></div>
        <TfiEmail className="relative" />
      </a>
    </div>
  );
};

export default Socials;
