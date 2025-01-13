import React from 'react'
import ProjectTab from '../ProjectTab'
import image1 from '../../assets/blogphone.jpg'
import image2 from '../../assets/blogLaptop.jpg'

function Blog() {
  return (
    <div>
      <ProjectTab image1={image1} image2={image2} link1={'https://github.com/Daniyalk0/Appwrite_Blog'} link2={'https://appwrite-blog-pi-one.vercel.app/'} classImage2={' w-full xs:h-[190%] md:h-[100%]  h-[220%] xs:-translate-y-[40vw] -translate-y-[50vw] md:-translate-y-[20vw] xl:-translate-y-[8vw]   md:h-[160%] xl:h-[156%] '} classImage1={`-translate-y-10 md:-translate-y-0 w-full object-cover md:h-[100%] xs:h-[125%] h-[120%]`} wClass={'md:w-[45.5vw] md:h-[330px] xs:h-[230px]'}/>
    </div>
  )
}

export default Blog