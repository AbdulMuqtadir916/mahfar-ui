import Image from "next/image";
import React from "react";

const MissionVisoin = () => {
  return (
    <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] pt-16 w-full pb-[80px] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2   gap-[85px]">
        <div
          className="w-auto 
    transition duration-700 ease-in-out hover:scale-105 cursor-pointer  p-3.5  flex flex-col  justify-start h-[260px]  "
        >
          <div>
            <Image
              className="w-[87px] h-[69px] "
              alt="targetIcon"
              src="/about/target.svg"
              width="0"
              height="0"
            />
          </div>
          <div className=" h-[42px] leading-5 pt-[41px] justify-between hover:duration-700 duration-700 mr-[20px] hover:mr-[0px] hover:ease-in-out cursor-pointer items-center flex ">
            <div className="text-zinc-800 text-[28px] font-semibold ">
              Mission
            </div>
          </div>
          <div className="w-auto h-[63.20px] text-zinc-600 text-sm pt-[7vw] sm:pt-[30px] font-normal ">
            To provide innovative, high-quality construction materials and
            solutions tailored to our customers needs, empowering them to build
            sustainable structures while fostering long-term industry
            relationships. Our expertise and commitment to customer satisfaction
            make us a trusted partner in construction.
          </div>
        </div>
        <div
          className="w-auto 
    transition duration-700 ease-in-out hover:scale-105 cursor-pointer  p-3.5  flex flex-col  justify-start   "
        >
          <div>
            <Image
              className="w-[87px] h-[69px] "
              alt="targetIcon"
              src="/about/target.svg"
              width="0"
              height="0"
            />
          </div>
          <div className=" h-[42px] leading-5 pt-[41px] justify-between hover:duration-700 duration-700 mr-[20px] hover:mr-[0px] hover:ease-in-out cursor-pointer items-center flex ">
            <div className="text-zinc-800 text-[28px] font-semibold ">
              Vision
            </div>
          </div>
          <div className="w-auto h-[63.20px] text-zinc-600 text-sm pt-[7vw] sm:pt-[30px] font-normal ">
            We strive to be the top provider of construction materials and
            solutions, known for our unwavering commitment to quality,
            innovation, and customer satisfaction. Our vision is to create
            sustainable, energy-efficient structures and become the preferred
            choice for construction professionals, setting new industry
            standards.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisoin;
