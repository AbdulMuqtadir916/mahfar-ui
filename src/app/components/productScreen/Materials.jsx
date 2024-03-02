"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Materials = () => {
  const pName = usePathname();
  console.log("pName", pName);
  const pathname = pName.split("/").pop();

  const navBar = [
    { id: 1, name: "Classic", pathUrl: "classic" },
    { id: 2, name: "Edge Profile", pathUrl: "edge_profile" },
    { id: 3, name: "Roman Profile", pathUrl: "roman_profile" },
    { id: 4, name: "Roofing Accessories", pathUrl: "roofing_accessories" },
    { id: 5, name: "Shake", pathUrl: "shake" },
    { id: 6, name: "Shingle", pathUrl: "shingle" },
  ];

  const colors = [
    { name: "CHARCOAL", url: "/roofingMaterails/img2.svg" },
    { name: "CHARCOAL", url: "/roofingMaterails/img2.svg" },
    { name: "CHARCOAL", url: "/roofingMaterails/img2.svg" },
    { name: "CHARCOAL", url: "/roofingMaterails/img2.svg" },
    { name: "CHARCOAL", url: "/roofingMaterails/img2.svg" },
    { name: "CHARCOAL", url: "/roofingMaterails/img2.svg" },
    { name: "CHARCOAL", url: "/roofingMaterails/img2.svg" },
    { name: "CHARCOAL", url: "/roofingMaterails/img2.svg" },
    { name: "CHARCOAL", url: "/roofingMaterails/img2.svg" },
  ];
  return (
    <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] w-full">
      <div className=" mt-[50px] w-full border-b border-zinc-300 justify-start items-start inline-flex relative overflow-x-auto">
        {/* {nav.map((e, i) => (
        <div
          key={i}
          className="px-6 py-[18px] border-b-2 border-cyan-500 justify-center items-center gap-2.5 flex"
        >
          <div className="text-cyan-500 text-lg font-medium ">{e}</div>
        </div>
      ))} */}

        <div className=" flex">
          {navBar.map((e, i) => (
            <Link key={i} href={`/product/roofing-solution/${e.pathUrl}`}>
              <div
                className={`cursor-pointer whitespace-nowrap px-6 py-[18px] justify-center items-center gap-2.5 flex ${
                  pathname === e.pathUrl ? "border-b-2 border-cyan-500" : ""
                }`}
              >
                <div className="text-cyan-500 text-lg font-medium ">
                  {e.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Nav Completed */}

      <div className="mt-[35px] p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300  flex flex-col md:items-center md:flex-row">
        <div className="md:w-[60%]">
          <Image
            className="w-auto h-auto"
            src="/roofingMaterails/img1.svg"
            width="478"
            height="318"
            alt=""
          />
        </div>
        <div className="md:w-[40%]">
          <div className="flex  items-center justify-between">
            <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
              Metal Shingles
            </div>
            <div className="w-40 h-11 rounded-lg justify-start items-start inline-flex">
              <div className="grow shrink basis-0 h-11 px-[10px] md:px-[18px] py-2.5 bg-cyan-500 rounded-lg shadow border border-cyan-500 justify-center items-center gap-2 flex">
                <div className="text-white text-base font-semibold  leading-normal">
                  Get Quote
                </div>
              </div>
            </div>
          </div>

          <div className="text-slate-900 text-[20px] md:text-[22px] font-medium mt-[36px]">
            Select Colour
          </div>
          {/* More Materials */}
          <div className="flex gap-[20px] md:gap-[10px] lg:gap-[16px] flex-wrap mt-[20px]">
            {colors.map((e, i) => (
              <div key={i} className="flex flex-col items-center ">
                <div>
                  <Image
                    className="w-auto h-auto"
                    src={e.url}
                    width="90"
                    height="75"
                    alt=""
                  />
                </div>
                <div className="text-slate-900 text-sm font-medium">
                  {e.name}
                </div>
              </div>
            ))}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
