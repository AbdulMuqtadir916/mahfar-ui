import React from "react";
import Image from "next/image";

function ProjDelivered() {
  return (
    <div
      className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] 
  w-full pt-[95px] pb-[95px] bg-neutral-100"
    >
      <div className="text-[#019DC2] font-bold text-[6.3vw] sm:text-[5.3vw] md:text-[5vw] lg:text-[3.3vw] xl:text-[3vw] leading-[7vw] sm:leading-[6vw] lg:leading-[4vw] xl:leading-[3.8vw] pb-[32px]">
        Our Projects Delivered
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        <div>
          <Image
            className="w-full h-full"
            width="365"
            height="229"
            alt="project"
            src="/projectsDelivered/img3.svg"
          ></Image>
        </div>
        <div>
          <Image
            className="w-full h-full"
            width="365"
            height="229"
            alt="project"
            src="/projectsDelivered/img6.svg"
          ></Image>
        </div>
        <div className="block md:hidden lg:block">
          <Image
            className="w-full h-full"
            width="365"
            height="219"
            alt="project"
            src="/projectsDelivered/img7.svg"
          ></Image>
        </div>
        <div className="md:col-span-2">
          <Image
            className="w-[615px] md:w-[886px] h-full"
            width="365"
            height="229"
            alt="project"
            src="/projectsDelivered/img5.svg"
          ></Image>
        </div>
        <div className="hidden md:block lg:hidden">
          <Image
            className="w-full h-full"
            width="365"
            height="219"
            alt="project"
            src="/projectsDelivered/img7.svg"
          ></Image>
        </div>
        <div>
          <Image
            className="w-full h-full"
            width="365"
            height="229"
            alt="project"
            src="/projectsDelivered/img1.svg"
          ></Image>
        </div>
        <div>
          <Image
            className="w-full h-full"
            width="365"
            height="229"
            alt="project"
            src="/projectsDelivered/img2.svg"
          ></Image>
        </div>
        <div>
          <Image
            className="w-full h-full"
            width="365"
            height="229"
            alt="project"
            src="/projectsDelivered/img4.svg"
          ></Image>
        </div>

        <div className="group md:col-span-2 cursor-pointer lg:col-span-1 bg-gradient-to-br w-full h-full from-cyan-500 to-cyan-600 rounded-md flex items-center justify-center py-[25px] lg:py-[0px] px-[25px]">
          <div className=" justify-between sm:gap-[18vw] lg:gap-[0px] hover:duration-700 duration-700 mr-[20px] group-hover:mr-[0px] hover:ease-in-out cursor-pointer items-center flex ">
            <div className="text-white text-[5vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[2.4vw] xl:text-[2vw]  ">
              Lets Connect for your project
            </div>
            <div className="w-[42px] h-[42px] lg:w-[79px] lg:h-[34px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer  relative ">
              <Image
                alt="arrow"
                src="/icon-arrow-narrow-right-white.svg"
                height={42}
                width={42}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjDelivered;
