"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MainSec = () => {
  const pName = usePathname();
  console.log("pName", pName);
  const categorie = pName.split("/").pop();
  console.log("categorie", categorie);

  const images = [];

  return (
    <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] w-full">
      {/* Top Section */}
      <div className="py-14 pl-8 md:py-15 md:pl-12 lg:py-16 lg:pl-20">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold capitalize ">
          {categorie}
        </h1>
        <p className="font-normal text-base md:text-lg mt-4 lg:mt-8 w-[90%] md:w-[85%] lg:w-[75%] text-[#0C1C39B2]">
          Elevate your outdoor space with our premium composite decking—sourced
          from trusted manufacturers. Durable, cost-effective, and
          safety-focused, our decking offers a perfect blend of style and
          resilience. Explore a range of styles for a beautiful, long-lasting
          outdoor flooring solution.
        </p>
        <div className="mt-6 w-[85%] md:w-[50%] lg:w-[40%] rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
          <div className="grow px-[4px] shrink cursor-pointer h-11  py-2.5 bg-cyan-500 rounded-lg shadow border border-cyan-500 justify-center items-center gap-2 flex">
            <div className="text-white text-base font-semibold text-center leading-none">
              Get Quote
            </div>
          </div>
          <div className="grow px-[4px] shrink cursor-pointer h-11  py-2.5 bg-white  rounded-lg shadow border border-[#D0D5DD] text-black justify-center items-center gap-2 flex">
            <div className="text-black text-base flex items-center gap-2 font-semibold  leading-normal">
              <span>
                <Image
                  className="w-auto h-auto"
                  height="20"
                  alt="downloadIcon"
                  width="20"
                  src="/downloadIcon.svg"
                />
              </span>{" "}
              Download Broucher
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="w-full lg:w-[90%] object-cover h-[250px] sm:h-[340px]  md:h-[410px] lg:h-[490px] rounded-3xl"
          src={`/compositeWood/${categorie}/hero1.jpg`}
          width="200"
          height="200"
          alt=""
        />
      </div>
      {/* Main-Section */}
      {/* Schema */}
      <div className="py-16 pl-8 md:py-16 md:pl-12 lg:py-20 lg:pl-20">
        {/* Schema */}
        <div>
          <h3 className="uppercase text-xs sm:text-base md:text-lg lg:text-xl font-medium text-[#00A8CF]">
            {categorie} STRUCTURE
          </h3>
          <h2 className="text-[#0C1C39] text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold">
            {categorie} Schema
          </h2>
        </div>
        <div className="flex items-center justify-center mt-12 md:mt-28 lg:mt-32">
          <Image
            className="w-[80%] md:h-[350px] lg:h-[450px] object-cover"
            src={`/compositeWood/${categorie}/schema.jpg`}
            width="540"
            height="440"
            alt="schema"
          />
        </div>
      </div>
      {/* colors & texture */}
      <div className="py-2 pl-8 md:py-16 md:pl-12 lg:py-20 lg:pl-20">
        {/* Schema */}
        <div>
          <h2 className="text-[#0C1C39] text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold">
            Colors & Texture
          </h2>
        </div>
        <div className="flex items-center justify-center mt-6 md:mt-20 lg:mt-28">
          <Image
            // className="w-[100%] md:h-[350px] lg:h-[450px] "
            src={`/compositeWood/${categorie}/texture-col.jpg`}
            width="924"
            height="438"
            alt="ColorTexture"
          />
        </div>
      </div>
      {/* Profile & accsessories */}
      <div className="py-6 pl-8 md:py-16 md:pl-12 lg:py-20 lg:pl-20">
        {/* Schema */}
        <div>
          <h2 className="text-[#0C1C39] text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold">
            {categorie} Profiles & Accessories
          </h2>
        </div>
        <div className="flex items-center justify-center mt-6 md:mt-20 lg:mt-28">
          <Image
            // className="w-[100%] md:h-[350px] lg:h-[450px] "
            src={`/compositeWood/${categorie}/profile.jpg`}
            width="924"
            height="438"
            alt="accessories"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSec;
