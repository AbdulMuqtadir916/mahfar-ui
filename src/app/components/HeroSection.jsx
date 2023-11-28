import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] w-full relative h-[112vw] sm:h-[90vw] md:h-[85vw] lg:h-[36vw] xl:h-[590px] pb-[80px]  bg-gradient-to-br from-cyan-500 to-cyan-600">
      <div className="pt-[8vw] sticky top-[82px] z-[10] lg:static lg:top-0 xl:pt-[151px] ">
        <div className=" text-white text-[6.3vw] sm:text-[5.3vw] md:text-[5vw] lg:text-[3.3vw] xl:text-[3vw] leading-[7vw] sm:leading-[6vw] md:leading-[5vw] lg:leading-[4vw] xl:leading-[3.8vw] pb-[1.85vw]  xl:pb-[0.75vw] font-bold">
          Your Vision, Our Materials,
          <br />
          Infinite Possibilities
        </div>
        <div className="w-[60%] sm:w-[50%] lg:w-[40%] xl:w-[33%] h-[51px] text-white text-[3vw] sm:text-[2.2vw] lg:text-[1.8vw] xl:text-[1.3vw] leading-[3.3vw] sm:leading-[2.5vw] lg:leading-[2.2vw] xl:leading-[1.5vw]  font-normal ">
          Our civil and structural team is committed to providing sustainable,
          creative & efficient engineering solutions for our communities
          <br />
        </div>
      </div>
      <div className=" absolute top-[42vw] md:top-[25vw] md:right-[2vw] lg:top-[2vw] xl:top-[50px] right-0 lg:right-[6vw] xl:right-[127px] 2xl:right-[175px]">
        <div className="absolute bg-white rounded-full w-auto h-auto py-2 px-3 top-0 right-[18vw] lg:right-[8vw] xl:right-[8vw] xl:top-[1.5vw]">
          <Image
            className="w-[15vw] md:w-[11vw] lg:w-[7vw] xl:w-[6.2vw] h-auto"
            src="/quality.svg"
            alt="quality"
            height={10}
            width={10}
          />
        </div>
        <Image
          className="w-[730px] lg:w-[551px] xl:w-[730px] h-auto xl:h-[440px]"
          src="/heroSec.svg"
          alt="homeImage"
          width="0"
          height="0"
        />
      </div>
    </div>
  );
}

export default HeroSection;
