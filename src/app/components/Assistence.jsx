import Image from "next/image";
import React from "react";

function Assistence() {
  return (
    <div
      className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] 
  w-full pt-[120px] md:pt-[150px] lg:pt-[200px] pb-[150px] "
    >
      <div className="w-[100%] h-[484px] md:h-[312px] lg:h-[484px] bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex flex-col-reverse md:flex-row items-center">
        <div className="flex flex-col justify-center w-full h-[50%] md:h-full md:w-6/12 flex-wrap content-center">
          <div className="text-white text-[4.3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.3vw] xl:text-[1vw] font-medium ">
            Need Assistance?
          </div>
          <div className="text-white font-bold text-[6.3vw] sm:text-[5.3vw] md:text-[3vw] lg:text-[3.3vw] xl:text-[3vw] leading-[7vw] sm:leading-[5.1vw] lg:leading-[3vw] xl:leading-[3vw]  ">
            Do You Have Custom
            <br />
            Requirement for
            <br />
            your project
          </div>
          <div className="mt-[20px] lg:mt-[40px]">
            <button className=" px-[6vw] md:px-[3vw] lg:px-[7vw] xl:px-[5vw] py-2 border border-[#00A8CF] text-[16px] bg-[#fff] text-[#00A8CF] rounded-md hover:border-[#fff] hover:border hover:bg-[#00A8CF] hover:text-[#fff] transition duration-300 ease-in select-none cursor-pointer">
              Get In Touch
            </button>
          </div>
        </div>
        <div className="w-full h-[50%] md:w-6/12 md:h-full  relative flex justify-center">
          <div className="absolute bottom-[20px] md:bottom-[38px] lg:bottom-[93px]">
            <Image src="/bahrinTower3.svg" className="md:w-[250px] lg:w-[355px]" width={200} height={740} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assistence;
