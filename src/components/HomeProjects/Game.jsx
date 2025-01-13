import React from 'react'
import ProjectTab from '../ProjectTab'
import image1 from "../../assets/dicePhone.jpg";
import image2 from "../../assets/diceLaptop.jpg";

function Game() {
  return (
    <div>
      <ProjectTab image1={image1} image2={image2} link1={'https://github.com/Daniyalk0/Dice-game'} link2={'https://dice-game-six-blond.vercel.app/'} classImage2={' w-full object-fill md:h-[100%]  h-[210%] -translate-y-[28vw] lg:-translate-y-10 lg:h-[150%]'} classImage1={`-translate-y-10 md:-translate-y-0 w-full h-[120%] object-cover md:h-[100%] xs:h-[125%]`} wClass={'xl:w-[21.1vw] md:w-[93vw] md:h-[320px] 2xl:w-[20.3vw] xs:h-[230px]'}/>
    </div>
  )
}

export default Game