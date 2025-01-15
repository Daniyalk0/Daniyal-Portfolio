import React from 'react'
import ProjectTab from '../ProjectTab'
import image1 from "../../assets/dicePhone.jpg";
import image2 from "../../assets/diceLaptop.jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Game() {

  useGSAP(() => {
    gsap.fromTo(
      ".game",
      { scale: "0",
        translateY:"-100%"
        }, // Starting state
      { scale: "1",
        translateY:"0%", duration: 1.6, delay:0.3 } // Ending state with animation duration
    );
  }, []);
  return (
    <div>
      <ProjectTab image1={image1} image2={image2} link1={'https://github.com/Daniyalk0/Dice-game'} link2={'https://dice-game-six-blond.vercel.app/'} classImage2={' w-full object-fill md:h-[100%]  h-[210%] -translate-y-[28vw] lg:-translate-y-10 lg:h-[150%]'} classImage1={`-translate-y-10 md:-translate-y-0 w-full h-[120%] object-cover md:h-[100%] xs:h-[125%]`} wClass={'game xl:w-[21.1vw] md:w-[93vw] md:h-[320px] 2xl:w-[20.3vw] xs:h-[230px]'}/>
    </div>
  )
}

export default Game