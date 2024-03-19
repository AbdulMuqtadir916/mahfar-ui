"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProdNavbar = ({ navBar, navColor }) => {
  const pName = usePathname();
//   console.log("pName", pName);
  const productName = pName.split("/")[2];
  const pathname = pName.split("/").pop();
//   console.log("pathname", pathname);
  return (
    <div className={` mt-[10px] w-full ${navColor?"":"border-b border-zinc-300"} justify-start items-start inline-flex relative overflow-x-auto`}>
      <div className=" flex">
        {navBar.map((e, i) => (
          <Link key={i} href={`/product/${productName}/${e.pathUrl}`}>
            <div
              className={`group cursor-pointer whitespace-nowrap px-6 py-[11px] md:py-[18px] justify-center items-center gap-2.5 flex hover:border-b-2 hover:border-cyan-300 ${
                pathname === e.pathUrl ? "border-b-2 border-cyan-500" : ""
              }`}
            >
              <div
                className={`${
                  navColor
                    ? "text-white group-hover:text-cyan-400"
                    : "text-cyan-500"
                }  text-lg font-medium `}
              >
                {e.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProdNavbar;
