import React from "react";
import ProjectTab from "../ProjectTab";
import image1 from "../../assets/sunPhone.png";
import image2 from "../../assets/sunLaptop1.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Clone() {

  return (
    <div>
      <ProjectTab
        image1={image1}
        image2={image2}
        link2={"https://github.com/Daniyalk0/sundown-studio"}
        link1={"https://sundown-studio-five.vercel.app/"}
        classImage2={
          "lg:scale-[1.4] xs:scale-[1.5] scale-[1.4] -translate-y-7 lg:translate-y-5 xs:translate-y-[-1rem]"
        }
        classImage1={`-translate-y-5 md:-translate-y-0 w-full h-[120%] object-cover md:h-[100%] xs:h-[125%] lg:scale-[1.3] scale-[1.4]`}
        wClass={
          " xl:w-[21.1vw] md:w-[93vw] md:h-[320px] 2xl:w-[20.3vw] xs:h-[230px]"
        }
      />
    </div>
  );
}

export default Clone;
