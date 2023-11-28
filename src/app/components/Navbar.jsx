"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  // let [showmenu, setShowMenu] = useState("hidden");
  // const onClickMenu = () => {
  //   showmenu === "hidden" ? setShowMenu("block") : setShowMenu("hidden");
  // };
  const [showMenu, setShowMenu] = useState(false);

  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {/* <div>
          <Image alt="logo" src='/logo.svg' height="56" width='256'/>
        </div>
        <div>
          
        </div> */}
      <nav className="h-auto py-4 lg:py-0  bg-gradient-to-br from-cyan-500 to-cyan-600 flex flex-col lg:flex-row px-[7vw] xl:px-[10vw] 2xl:px-[10vw] lg:h-[121px] sticky top-0 z-40  sm:flex sm:items-center sm:justify-between transition-all duration-500 ease-in-out">
        <div className="flex h-auto w-full lg:w-auto items-center justify-between">
          <div className=" ">
            <Link href="/">
              <Image
                priority={true}
                className="  w-[28vw] h-[10vw] md:w-[20vw] md:h-[8vw] lg:w-[246px] lg:h-[56px]"
                src="/logo1.svg"
                alt="logo"
                quality={100}
                width={0}
                height={0}
              />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden  ">
            <button
              onClick={onClickMenu}
              className="block hover:text-white focus:text-white focus:outline-none"
            >
              {/* <i class="fa-sharp fa-solid fa-bars" style={{ color: "#2c2c2c" }}></i> */}
              <Image
                className="w-[24px] text-white h-[24px]"
                alt="menubar"
                src="/menu.svg"
                width="10"
                height="10"
              />
            </button>
          </div>
        </div>
        <div
          className={`${
            showMenu ? 'block' : 'hidden'
          } transition-all duration-500 ease-in-out w-full gap-5 items-baseline text-[4vw] md:text-[3.5vw] lg:text-[1.2vw] 2xl:text-[1.2vw] lg:flex lg:gap-[23px] lg:justify-end  px-5 py-4 `}
        >
          <Link
            className={`block py-1 rounded  mt-1 transition-colors duration-300 ${
              pathname.length === 1
                ? "text-gray-800 hover:text-[#fff]"
                : "text-[#fff] hover:text-gray-800"
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`block py-1 rounded  mt-1  transition-colors duration-300 ${
              pathname.includes("products")
                ? "text-gray-800 hover:text-[#fff]"
                : "text-[#fff] hover:text-gray-800"
            }`}
            href="/products"
          >
            Products
          </Link>
          <Link
            className={`block py-1 rounded  mt-1  transition-colors duration-300 ${
              pathname.includes("services")
                ? "text-gray-800 hover:text-[#fff]"
                : "text-[#fff] hover:text-gray-800"
            }`}
            href="/services"
          >
            Services
          </Link>
          <Link
            className={`block py-1 rounded  mt-1  transition-colors duration-300 ${
              pathname.includes("about-us")
                ? "text-gray-800 hover:text-[#fff]"
                : "text-[#fff] hover:text-gray-800"
            }`}
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            className={`block py-1 rounded  mt-1 transition-colors duration-300 ${
              pathname.includes("contact-us")
                ? "text-gray-800 hover:text-[#fff]"
                : "text-[#fff] hover:text-gray-800"
            }`}
            href="/contact-us"
          >
            Contact Us
          </Link>

          <Link
            href="/contact-us"
            className="block py-1  rounded pb-[10px] sm:pb[0px]  mt-1"
          >
            <button
              // onClick={modal}
              className="px-4 py-2 border border-[#fff] text-[4vw] md:text-[3.5vw] lg:text-[1.2vw] 2xl:text-[1.2vw] bg-[#fff] text-[#00A8CF] rounded-md shadow-sm hover:bg-inherit hover:border-[#fff] hover:border hover:text-[#fff] transition duration-300 ease-in select-none"
            >
              Get Quote
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
