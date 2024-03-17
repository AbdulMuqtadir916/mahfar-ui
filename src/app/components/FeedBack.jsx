import Image from "next/image";
import React from "react";

function FeedBack() {
  let feedBack = [
    {
      clientId: 1,
      clientName: "Joe Root",
      clientType: "Interior Designer",
      clinetComment:
        "I love Dwelling! They make it super easy and safe to find a room for rent. Customer service is vary quick and helpful. Highly recommend this platform. Really a great and wonderful platform to find rooms and houses in quick time.",
        clientImg:"profile.svg"
    },
  ];

  return (
    <div
      className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] 
    w-full pt-[95px] pb-[95px] md:pb-[0px] bg-gradient-to-br from-cyan-500 to-cyan-600  "
    >
      <div className="text-[#fff] font-bold text-[6.3vw] sm:text-[5.3vw] md:text-[5vw] lg:text-[3.3vw] xl:text-[3vw] leading-[7vw] sm:leading-[6vw] lg:leading-[4vw] xl:leading-[3.8vw] pb-[32px]">
        What client says
      </div>
      <div className="flex w-full flex-col-reverse md:flex-row gap-[55px] md:gap-0">
        <div className="w-full md:w-[50%] flex items-center justify-center md:block">
          <div className="w-24 h-1.5 relative">
          
            <div className="w-6 h-1.5 left-0 top-0 absolute rounded-[3px] border border-white" />
            <div className="w-6 h-1.5 left-[36px] top-0 absolute rounded-[3px] border bg-green-400 border-green-400" />
            <div className="w-6 h-1.5 left-[72px] top-0 absolute rounded-[3px] border border-white" />
          </div>
        </div>
        <div className="relative w-full md:w-[50%] top-0 md:top-[-120px]">
          <div className="flex">
            {/* Slide 1 */}
            <div>
              <div className=" relative">
                <div className="w-[42px] h-[42px] md:w-[56px] flex items-center justify-center  md:h-[56px] left-0 top-0 absolute bg-gray-700 rounded-full">
                  <Image
                    className="w-[23px] h-[23px] md:w-[30px] md:h-[30px]"
                    alt=""
                    src="/commentCo.svg"
                    width="0"
                    height="0"
                  />
                </div>
              </div>
              <div className=" text-white  text-[3.6vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw] pl-[60px] pt-[10px] md:pt-[53px] ld:pt-[10px] ">
                I love Dwelling! They make it super easy and safe to find a room
                for rent. Customer service is vary quick and helpful. Highly
                recommend this platform. Really a great and wonderful platform
                to find rooms and houses in quick time.
              </div>
              <div className="flex items-center pl-[60px] pt-[15px] ">
                <div>
                  <Image
                    width="0"
                    height="0"
                    alt=""
                    className="w-16 h-16 rounded-full"
                    src=""
                  />
                </div>
                <div className="pl-[8px] ">
                  <div className="text-white text-lg font-normal leading-7">
                    Joe Root
                  </div>
                  <div className="text-neutral-300 text-base font-normal leading-relaxed">
                    UI/UX designer
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div>
              <div className=" relative">
                <div className="w-[42px] h-[42px] md:w-[56px] flex items-center justify-center  md:h-[56px] left-0 top-0 absolute bg-gray-700 rounded-full">
                  <Image
                    className="w-[23px] h-[23px] md:w-[30px] md:h-[30px]"
                    alt=""
                    src="/commentCo.svg"
                    width="0"
                    height="0"
                  />
                </div>
              </div>
              <div className=" text-white  text-[3.6vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw] pl-[60px] pt-[10px] md:pt-[53px] ld:pt-[10px] ">
                I love Dwelling! They make it super easy and safe to find a room
                for rent. Customer service is vary quick and helpful. Highly
                recommend this platform. Really a great and wonderful platform
                to find rooms and houses in quick time.
              </div>
              <div className="flex items-center pl-[60px] pt-[15px] ">
                <div>
                  <Image
                    width="0"
                    height="0"
                    alt=""
                    className="w-16 h-16 rounded-full"
                    src=""
                  />
                </div>
                <div className="pl-[8px] ">
                  <div className="text-white text-lg font-normal leading-7">
                    Joe Root
                  </div>
                  <div className="text-neutral-300 text-base font-normal leading-relaxed">
                    UI/UX designer
                  </div>
                </div>
              </div>
            </div>
            {/* Side 3  */}
            <div>
              <div className=" relative">
                <div className="w-[42px] h-[42px] md:w-[56px] flex items-center justify-center  md:h-[56px] left-0 top-0 absolute bg-gray-700 rounded-full">
                  <Image
                    className="w-[23px] h-[23px] md:w-[30px] md:h-[30px]"
                    alt=""
                    src="/commentCo.svg"
                    width="0"
                    height="0"
                  />
                </div>
              </div>
              <div className=" text-white  text-[3.6vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1vw] pl-[60px] pt-[10px] md:pt-[53px] ld:pt-[10px] ">
                I love Dwelling! They make it super easy and safe to find a room
                for rent. Customer service is vary quick and helpful. Highly
                recommend this platform. Really a great and wonderful platform
                to find rooms and houses in quick time.
              </div>
              <div className="flex items-center pl-[60px] pt-[15px] ">
                <div>
                  <Image
                    width="0"
                    height="0"
                    alt=""
                    className="w-16 h-16 rounded-full"
                    src=""
                  />
                </div>
                <div className="pl-[8px] ">
                  <div className="text-white text-lg font-normal leading-7">
                    Joe Root
                  </div>
                  <div className="text-neutral-300 text-base font-normal leading-relaxed">
                    UI/UX designer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
