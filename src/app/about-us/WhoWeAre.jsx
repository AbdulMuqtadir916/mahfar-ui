import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div
      className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] 
w-full pt-[100px] pb-[150px] "
    >
      <div className="w-[100%]  bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex flex-col-reverse md:flex-row items-center">
        <div className="pr-[5px] md:pr-0 p-8 pb-0">
          <div className="">
            <Image
              className="w-[80px] h-[80px] md:w-[90px] lg:w-[100px] md:h-[90px] lg:h-[100px]"
              src="/about/settingIcon.svg"
              width="0"
              height="0"
              alt="settingIcon"
            />
          </div>
          <div className="relative -top-[50px] md:top-[-60px] -left-[5px] px-[30px] md:px-[50px]">
            <h5 className="text-white text-[3.3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.3vw] xl:text-[1vw] font-medium ">
              WHO WE ARE?
            </h5>
            <h3 className="font-semibold text-white text-lg md:text-2xl">
              Pulvinar elementum integer enim neque volutpat ac. Amet dictum sit
              amet justo donec enim diam vulputate ut. Egestas sed sed risus
              pretium quam. Viverra accumsan in nisl nisi scelerisque eu
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
