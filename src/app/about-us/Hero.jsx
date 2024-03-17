import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] w-full relative h-[74vw] sm:h-[62vw] md:h-[57vw] lg:h-[27vw]   bg-gradient-to-br from-cyan-500 to-cyan-600">
        <div className="pt-[8vw]  lg:static lg:top-0 xl:pt-[151px] ">
          <div className="w-[60%] sm:w-[50%] lg:w-[40%] xl:w-[33%] h-[27px] text-white text-[3vw] sm:text-[2.2vw] lg:text-[1.8vw] xl:text-[1.5vw] leading-[3.3vw] sm:leading-[2.5vw] lg:leading-[2.2vw] xl:leading-[1.5vw]  font-normal ">
            BUILDING COMMUNITIES
            <br />
          </div>
          <div className=" text-white text-[6.3vw] sm:text-[5.3vw] md:text-[5vw] lg:text-[3.3vw] xl:text-[3vw] leading-[7vw] sm:leading-[6vw] md:leading-[5vw] lg:leading-[4vw] xl:leading-[3.8vw] pb-[1.85vw]  xl:pb-[0.75vw] font-bold">
            About US
          </div>
        </div>

        <div className=" absolute bottom-0 md:right-[2vw]  right-0 lg:right-[6vw] xl:right-[127px] 2xl:right-[175px]">
          <Image
            priority={true}
            className="w-[730px] lg:w-[700px] xl:w-[850px] h-auto "
            src="/about/aboutHero.svg"
            alt="home-image"
            width="0"
            height="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
