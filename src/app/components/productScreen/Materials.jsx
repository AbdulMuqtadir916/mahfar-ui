import React from "react";
import Image from "next/image";

const Materials = () => {
  const nav = [
    "Metal Shingles",
    "Natural Slate Tile",
    "Sandwich Panels",
    " Bitumen Shingles",
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
      <div
        className=" mt-[50px]
     border-b border-zinc-300 justify-start items-start inline-flex flex-wrap"
      >
        {/* {nav.map((e, i) => (
        <div
          key={i}
          className="px-6 py-[18px] border-b-2 border-cyan-500 justify-center items-center gap-2.5 flex"
        >
          <div className="text-cyan-500 text-lg font-medium ">{e}</div>
        </div>
      ))} */}
        <div className="px-6 py-[18px] border-b-2 border-cyan-500 justify-center items-center gap-2.5 flex ">
          <div className="text-cyan-500 text-lg font-medium ">
            Metal Shingles
          </div>
        </div>
        <div className="px-6 py-[18px] justify-center items-center gap-2.5 flex">
          <div className="text-slate-900 text-opacity-50 text-lg font-medium ">
            Natural Slate Tile
          </div>
        </div>
        <div className="px-6 py-[18px] justify-center items-center gap-2.5 flex">
          <div className="text-slate-900 text-opacity-50 text-lg font-medium ">
            Sandwich Panels
          </div>
        </div>
        <div className="px-6 py-[18px] justify-center items-center gap-2.5 flex">
          <div className="text-slate-900 text-opacity-50 text-lg font-medium ">
            Bitumen Shingles
          </div>
        </div>
      </div>
      {/* Nav Completed */}

      <div className="mt-[35px] p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300  flex flex-col md:items-center md:flex-row">
        <div className="md:w-[60%]">
          <Image
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
                  <Image src={e.url} width="90" height="75" alt="" />
                </div>
                <div className="text-slate-900 text-sm font-medium">
                  {e.name}
                </div>
              </div>
            ))}
            {/* <div className="flex flex-col items-center ">
              <div>
                <Image
                  src="/roofingMaterails/img2.svg"
                  width="90"
                  height="75"
                  alt=""
                />
              </div>
              <div className="text-slate-900 text-sm font-medium">CHARCOAL</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
