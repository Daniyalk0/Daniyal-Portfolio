import gsap from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

const StackCom = ({ icon, bg, nayaLight, tweed, progress, classname, barClass, imgClass, cont, textClass }) => {
    const progressRef = useRef(null);

    const [displayedProgress, setDisplayedProgress] = useState(0); // Syncs with animation

    useEffect(() => {
      if (progressRef.current) {
        gsap.killTweensOf(progressRef.current); // Prevent overlapping animations
  
        gsap.to(progressRef.current, {
          width: `${progress}%`, // Animate width smoothly
          duration: 0.4, // Transition duration
          ease: "power2.out",
          onUpdate: function () {
            // Sync displayed percentage with animation
            const newProgress = Math.round(parseFloat(progressRef.current.style.width));
            setDisplayedProgress(newProgress);
          },
        });
      }
    }, [progress]);
  return (
    <div className={`xs:mt-6 mt-4 ${cont}`}>
      <div className={`flex items-center  gap-3 relative ${classname}`}>
        <div className={`w-fit flex items-center justify-center p-4  relative rounded-[0.4rem] md:p-5 md:rounded-[0.7rem] overflow-hidden  xs:p-5 xs:rounded-[0.6rem] xs:border-[#e2e2e2]  border-[#cdcdcd]   border-[1px]  dark:border-transparent lg:rounded-[0.5rem] lg:p-6 ${imgClass}`}>
          <div
            style={{ backgroundImage: `url('${tweed}')` }}
            className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.5] lg:brightness-[0.44] opacity-[1] hidden dark:block"
          ></div>
          <img
            src={icon}
            alt="Centered Image"
            className={`absolute max-w-[70%] md:max-w-[60%] max-h-[70%] m-auto  xs:max-h-[60%] xs:max-w-[60%] lg:max-w-full }`}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
        <div className={`bar relative  xs:h-[10px] h-[12px] xs:rounded-[4rem] overflow-hidden flex items-center xs:border-[#e5e5e5] border-[#c6c6c6]  rounded-[4rem]  dark:border-[#363232] border-[1px] ${barClass}`}>
          <div
            style={{
              backgroundImage: `url('${nayaLight}')`,
            }}
            className="absolute left-0 top-0 w-full h-full z-[0] brightness-[1.05] md:brightness-[1.09] lg:brightness-[1] opacity-[1] dark:hidden  block"
          ></div>
          <div
            style={{ backgroundImage: `url('${tweed}')` }}
            className="absolute left-0 top-0 w-full h-full z-[0] xs:brightness-[0.5] brightness-[0.46] opacity-[1] hidden dark:block"
          ></div>
          <div
            className={` h-[80%] relative ${bg}  rounded-[4rem]  ml-[0.08rem] xl:ml-[0.09rem] xl:ounded-[5vw]`}
            ref={progressRef}
            style={{
                width: "0%", // Default width (GSAP will animate this)
              }}
          >
            <div className={`w-full h-full ${bg} blur-md  `}></div>
          </div>
        </div>
        <p className={`text-[#313131] dark:text-[#cbcbcb] font-[real] xs:text-[0.6rem] text-[0.65rem] absolute xs:right-4 xs:top-7 top-6 right-[10%] md:top-7 md:right-[11%] lg:text-[0.7] lg:top-8 lg:right-9 xl:right-14 xl:top-8 ${textClass}`}>
          {displayedProgress}%
        </p>
      </div>
    </div>
  );
};

export default StackCom;
