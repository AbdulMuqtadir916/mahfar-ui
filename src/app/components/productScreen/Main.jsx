"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProdNavbar from "./ProdNavbar";

const Main = () => {
  const pName = usePathname();
  console.log("pName", pName);
  const pathname = pName.split("/").pop();
  console.log("pathname", pathname);
  const [selectedItem, setSelectedItem] = useState({
    name: "CHARCOAL",
    url: `/Roofing/${pathname}/Roofng01.jpg`,
  });

  const navBar = [
    { id: 1, name: "Classic", pathUrl: "classic" },
    { id: 2, name: "Edge Profile", pathUrl: "edge_profile" },
    { id: 3, name: "Roman Profile", pathUrl: "roman_profile" },
    { id: 4, name: "Roofing Accessories", pathUrl: "roofing_accessories" },
    { id: 5, name: "Shake", pathUrl: "shake" },
    { id: 6, name: "Shingle", pathUrl: "shingle" },
  ];

  const colors = [
    { url: `/Roofing/${pathname}/Roofng01.jpg` },
    { url: `/Roofing/${pathname}/Roofng02.jpg` },
    { url: `/Roofing/${pathname}/Roofng03.jpg` },
    { url: `/Roofing/${pathname}/Roofng04.jpg` },
    { url: `/Roofing/${pathname}/Roofng05.jpg` },
    { url: `/Roofing/${pathname}/Roofng06.jpg` },
    { url: `/Roofing/${pathname}/Roofng07.jpg` },
    { url: `/Roofing/${pathname}/Roofng08.jpg` },
    { url: `/Roofing/${pathname}/Roofng09.jpg` },
    { url: `/Roofing/${pathname}/Roofng10.jpg` },
    { url: `/Roofing/${pathname}/Roofng11.jpg` },
    { url: `/Roofing/${pathname}/Roofng12.jpg` },
    { url: `/Roofing/${pathname}/Roofng13.jpg` },
    { url: `/Roofing/${pathname}/Roofng14.jpg` },
    { url: `/Roofing/${pathname}/Roofng15.jpg` },
    { url: `/Roofing/${pathname}/Roofng16.jpg` },
    { url: `/Roofing/${pathname}/Roofng17.jpg` },
    { url: `/Roofing/${pathname}/Roofng18.jpg` },
  ];
  return (
    <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] w-full">
      <ProdNavbar navBar={navBar} />

      {/* Nav Completed */}

      <div className="mt-[35px] p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 ">
        <div className="flex flex-wrap gap-[15px] justify-between">
          <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
            Metal Shingles
          </div>
          <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
            <div className="grow px-[10px] shrink cursor-pointer h-11  py-2.5 bg-cyan-500 rounded-lg shadow border border-cyan-500 justify-center items-center gap-2 flex">
              <a
                href="https://wa.me/97337778311?text=I%27m+interested+in+Metal+Shingle+Roofing+Solution"
                rel="noopener ugc nofollow"
                target="_blank"
                className="text-white text-base font-semibold text-center leading-none"
              >
                Get Quote
              </a>
            </div>
            <div className="grow px-[10px] shrink cursor-pointer h-11  py-2.5 bg-white  rounded-lg shadow border border-[#D0D5DD] text-black justify-center items-center gap-2 flex">
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
        <div className="mt-[50px] flex flex-col md:items-center lg:flex-row gap-0 lg:gap-[45px] xl:gap-[25px]">
          <div className="lg:w-[60%] m-auto">
            <Image
              className="w-auto h-auto mb-[35px]"
              src={selectedItem.url}
              width="478"
              height="318"
              alt=""
            />
          </div>
          <div className="lg:w-[40%]">
            <div className="text-slate-900 text-[20px] md:text-[22px] font-medium ">
              Select Colour
            </div>
            {/* More Main */}
            <div
              className={`flex gap-[20px] justify-center md:gap-[10px] lg:gap-[16px] flex-wrap mt-[20px] `}
            >
              {colors.map((e, i) => (
                <div
                  key={i}
                  className="flex flex-col cursor-pointer items-center "
                >
                  <div>
                    <Image
                      priority={false}
                      onClick={() => {
                        setSelectedItem(e);
                      }}
                      className={`w-[90px] h-[75px] rounded-lg ${
                        e.url == selectedItem.url
                          ? "border-[#00a8cf8a]  border-4  shadow-md shadow-[#00000040]"
                          : ""
                      }`}
                      src={e.url}
                      width="90"
                      height="75"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
