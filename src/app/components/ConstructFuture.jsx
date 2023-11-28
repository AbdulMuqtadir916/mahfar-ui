import Image from "next/image";
import React from "react";

function ConstructFuture() {
  return (
    <div className="pt-[97px] pl-[7vw] xl:pl-[10vw] 2xl:pl-[10vw] bg-gradient-to-br from-cyan-500 to-cyan-600">
      <div className="text-white text-[4.3vw] sm:text-[2.3vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw] font-medium ">
        Why Choose us?
      </div>
      <div className="text-white font-bold text-[6.3vw] sm:text-[5.3vw] md:text-[5vw] lg:text-[3.3vw] xl:text-[3vw] leading-[7vw] sm:leading-[6vw] lg:leading-[4vw] xl:leading-[3.8vw]  ">
        Construct Future with
        <br />
        Excellence
      </div>
      <div className="pt-[81px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[30px]">
        <div className="pr-[7vw] xr:pl-[10vw] 2xl:pr-[10vw]  col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <div className="flex flex-col gap-[15px]">
            <div className="w-20 h-20 relative">
              <Image
                className="w-20 h-20"
                alt="icon1"
                src="/const-icon1.svg"
                width="0"
                height="0"
              />
              <div
                className="w-[66px] h-[66px] absolute top-[8px] left-[26px] bg-white bg-opacity-10
              ease-in-out transition hover:bg-opacity-20  
              hover:scale-125
             transition-duration-1000 rounded-full"
              />
            </div>

            <div className="text-white text-[5.3vw] sm:text-[3.3vw] md:text-[3vw] lg:text-[2.3vw] xl:text-[2vw] leading-8 font-medium ">
              Extensive Global Network
            </div>
            <div className=" text-white  text-[3.6vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw] ">
              Global trusted manufacturers provide diverse high-quality building
              materials. Direct sourcing ensures competitive prices and reliable
              delivery.
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="w-20 h-20 relative">
              <Image
                className="w-20 h-20"
                alt="icon1"
                src="/const-icon2.svg"
                width="0"
                height="0"
              />
              <div
                className="w-[66px] h-[66px] absolute top-[13px] left-[26px] bg-white bg-opacity-10
              ease-in-out transition hover:bg-opacity-20  
              hover:scale-125
             transition-duration-1000  rounded-full"
              />
            </div>
            <div className="text-white text-[5.3vw] sm:text-[3.3vw] md:text-[3vw] lg:text-[2.3vw] xl:text-[2vw] leading-8 font-medium ">
              Quality Assurance
            </div>
            <div className=" text-white text-[3.6vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw]  ">
              Quality is our core at Mahfar Trading Co W.L.L - partnering with
              top-tier manufacturers for exceeding customer expectations in both
              products and service.
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="w-20 h-20 relative">
              <Image
                className="w-20 h-20"
                alt="icon3"
                src="/const-icon3.svg"
                width="0"
                height="0"
              />
              <div
                className="w-[66px] h-[66px] absolute top-[13px] left-[26px] bg-white bg-opacity-10 ease-in-out transition hover:bg-opacity-20  
              hover:scale-125
             transition-duration-1000 rounded-full"
              />
            </div>

            <div className="text-white text-[5.3vw] sm:text-[3.3vw] md:text-[3vw] lg:text-[2.3vw] xl:text-[2vw] leading-8 font-medium ">
              Unparalled Expertise
            </div>
            <div className=" text-white  text-[3.6vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw] ">
              
              20 years of industry expertise empowers us with market insights to
            offer tailored solutions for diverse project needs.
            </div>
          </div>

          <div className="flex lg:hidden  flex-col gap-[15px]">
            <div className="w-20 h-20 relative">
              <Image
                className="w-20 h-20"
                alt="icon4"
                src="/const-icon4.svg"
                width="0"
                height="0"
              />
              <div
                className="w-[66px] h-[66px] absolute top-[13px] left-[26px] bg-white bg-opacity-10 ease-in-out transition hover:bg-opacity-20  
              hover:scale-125
             transition-duration-1000 rounded-full"
              />
            </div>

            <div className="text-white text-[5.3vw] sm:text-[3.3vw] md:text-[3vw] lg:text-[2.3vw] xl:text-[2vw] leading-8 font-medium ">
            Comprehensive Product Range
            </div>
            <div className=" text-white text-[3.6vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw]  ">
            From essentials like Blocks, Steel, Plywood to specialized
              products such as tiles, sanitary ware, and more - discover
              comprehensive solutions at one convenient destination.
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-[15px]">
          <div className="w-20 h-20 relative">
            <Image
              className="w-20 h-20"
              alt="icon4"
              src="/const-icon4.svg"
              width="0"
              height="0"
            />
            <div
              className="w-[66px] h-[66px] absolute top-[13px] left-[26px] bg-white bg-opacity-10
            ease-in-out transition hover:bg-opacity-20  
            hover:scale-125
           transition-duration-1000  rounded-full"
            />
          </div>

          <div className="text-white text-[5.3vw] sm:text-[3.3vw] md:text-[3vw] lg:text-[2.3vw] xl:text-[2vw] leading-8 font-medium ">
          Comprehensive Product Range
          </div>
          <div className=" text-white  text-[3.6vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw] ">
          From essentials like Blocks, Steel, Plywood to specialized
              products such as tiles, sanitary ware, and more - discover
              comprehensive solutions at one convenient destination.
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 ">
          <Image
            className="w-full h-full"
            alt="buildings"
            src="/buildings.svg"
            height="0"
            width="0"
          />
        </div>
      </div>
    </div>
  );
}

export default ConstructFuture;
