"use client"
import ProdNavbar from "@/app/components/productScreen/ProdNavbar";
import React, { useState } from "react";

const ProdNavBarClr = () => {
  const [navColor, setNavColor] = useState(false);

  const changeNavColor = () => {
    // console.log("object", window.scrollY)
    if (window.innerWidth >= 1024) {
      if (window.scrollY >= 509) {
        // console.log("object changed")
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    } else {
      if (window.scrollY >= 374) {
        // console.log("object changed")
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    }
  };

  window.addEventListener("scroll", changeNavColor);
  const navBar = [
    { id: 1, name: "Decking", pathUrl: "decking" },
    { id: 2, name: "Pergola", pathUrl: "pergola" },
    { id: 3, name: "Fence", pathUrl: "fence" },
    { id: 4, name: "Facade", pathUrl: "facade" },
    { id: 5, name: "Hybrid", pathUrl: "hybrid" },
  ];
  return (
    <div
      className={`w-[100%] px-[7vw] xl:px-[10vw] 2xl:px-[10vw] sticky top-[12.5vw] sm:top-[12vw] md:top-[9vw] lg:top-[93.9px] z-20 ${
        navColor ? "bg-[#344054] text-white" : "bg-white"
      }`}
    >
      <ProdNavbar navBar={navBar} navColor={navColor} />
    </div>
  );
};

export default ProdNavBarClr;
