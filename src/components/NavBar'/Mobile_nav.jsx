import React, { useEffect, useRef, useState } from "react";
import { GoHome } from "react-icons/go";
import { RiToolsLine } from "react-icons/ri";
import { LuFolder } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import nayaLight from "../../assets/nayaLight.webp";
import tweed from "../../assets/tweed.webp";


function Mobile_nav() {
  const [hoveredIcon, setHoveredIcon] = useState("");
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(true);

  const icons = [
    { id: "first", Icon: GoHome, text: "Home" },
    { id: "two", Icon: RiToolsLine, text: "Tools" },
    { id: "three", Icon: LuFolder, text: "Projects" },
    { id: "four", Icon: IoMdInformationCircleOutline, text: "About" },
  ];
  const changeRoute = (route) => {
    if (route === "Home") {
      navigate(`/`);
    } else {
      navigate(`/${route}`);
    }
    setHoveredIcon(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpacity(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`w-full pt-7 pb-3 relative  xl:pt-4  transition-opacity duration-200`}
    >
      <div className="flex items-center justify-center xs:gap-4 w-full ">
        <div className="flex gap-3 p-3 md:gap-6 xl:gap-4 g items-center bg-gray-400 dark:bg-transparent xs:gap-2 xl:p-3 rounded-full  w-fit z-[999] relative ">
          <div
            style={{
              backgroundImage: `url('${nayaLight}')`,
            }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.09] opacity-[1] dark:hidden rounded-full"
          ></div>
          <div
            style={{ backgroundImage: `url('${tweed}')` }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[0.42] opacity-[0.9] hidden dark:block rounded-full"
          ></div>

          {icons.map(({ id, Icon, text }) => (
            <div
              onClick={() => changeRoute(text)}
              key={id}
              className="dark:text-white text-[5vw] md:text-[3vw] font-bold relative group xl:text-[1.8vw] xs:text-[7vw]"
              onMouseEnter={() => setHoveredIcon(id)}
              onMouseLeave={() => setHoveredIcon("")}
            >
              <Icon />

              {/* Text */}
              <h2
                className={`font-[anzo5] dark:bg-[#ffffff33] bg-[#46464628] px-2 rounded-md absolute xl:text-[0.9vw] text-[2vw] xl:left-[-1vw] md:left-[-1.2vw] left-[-1.2vw] xs:left-[-2.7vw] xs:text-[2.5vw] md:text-[1.5vw] transition-all duration-300 pointer-events-none 
                ${
                  hoveredIcon === id
                    ? "top-[2.3vw] opacity-100"
                    : "top-[-0.3vw] opacity-0"
                } ${id === "four" ? "ml-[0.5vw]" : ""} ${
                  id === "two" ? "ml-[0.3vw]" : ""
                }`}
              >
                {text}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mobile_nav;
