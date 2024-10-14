"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div
      className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] 
  w-full pt-[95px] pb-[55px] bg-gray-800"
    >
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div>
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
        <div>
          <div className="flex items-center gap-6">
            <div className="text-white text-[22px] font-normal ">
              Ready to get started?
            </div>
            <Link
              href="/"
              className="block py-1  rounded pb-[10px] sm:pb[0px]  mt-1"
            >
              <button
                // onClick={modal}
                className="px-4 py-2 border border-[#00A8CF] text-[4vw] md:text-[2vw] lg:text-[1.2vw] 2xl:text-[1.2vw] bg-[#00A8CF] text-[#fff] rounded-md shadow-sm hover:bg-inherit hover:border-[#00A8CF] hover:border hover:text-[#00A8CF] transition duration-300 ease-in select-none"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[100%] mt-10 h-px opacity-10 bg-white" />

      <div className="flex justify-around py-[45px] ">
        <div className="flex flex-col gap-[15px]">
          <div className=" text-cyan-500 text-[17px] font-normal ">
            Products
          </div>
          <Link href="/products/roofing-solution/">
            <div className="text-white hover:text-cyan-500 text-[15px] font-normal ">
              Roofing Solution
            </div>
          </Link>
          <Link href="/products/composite-wood/">
            <div className="text-white  hover:text-cyan-500 text-[15px] font-normal ">
              Composite Wood
            </div>
          </Link>
          <Link href="/products/thermal_acoustic_insulation-insulation">
            <div className="text-white  hover:text-cyan-500 text-[15px] font-normal ">
              Thermal & Acoustic Insulation
            </div>
          </Link>
          <Link href="/products/finishing-materials">
            <div className=" text-white hover:text-cyan-500  text-[15px] font-normal ">
              Finishing Materials
            </div>
          </Link>
          <Link href="/products/water-proofing">
            <div className=" text-white hover:text-cyan-500 text-[15px] font-normal ">
              Water Proofing
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className=" text-cyan-500 text-[17px] hover:text-cyan-500 font-normal ">
            Pages
          </div>
          <Link href="/">
            <div className="text-white text-[15px] hover:text-cyan-500 font-normal ">
              Home
            </div>
          </Link>
          <Link href="/prodcuts">
            <div className="  text-white text-[15px] font-normal ">
              Products
            </div>
          </Link>
          <Link href="/about-us">
            <div className="text-white text-[15px] hover:text-cyan-500 font-normal ">
              About
            </div>
          </Link>
          <Link href="/contact-us">
            <div className=" text-white hover:text-cyan-500 text-[15px] font-normal ">
              Contact
            </div>
          </Link>
        </div>
        {/* <div className="flex flex-col gap-[15px]">
          <div className=" text-cyan-500 text-[17px] font-normal ">
            Services
          </div>
          <div className="text-white text-[15px] font-normal ">Our Story</div>
          <div className="  text-white text-[15px] font-normal ">Benefits</div>
          <div className="text-white text-[15px] font-normal ">Team</div>
          <div className=" text-white text-[15px] font-normal ">Careers</div>
        </div> */}
        <div className="flex flex-col gap-[15px]">
          <Link href="/about-us">
            <div className=" text-cyan-500 text-[17px] font-normal ">
              About Us
            </div>
          </Link>
          <Link href="/contact-us">
            <div className="text-white hover:text-cyan-500 text-[15px] font-normal ">
              Contact Us
            </div>
          </Link>
        </div>
      </div>

      <div className="left-0  flex gap-4 text-white text-[15px] font-normal ">
        <div className=" ">Terms & Conditions</div>

        <div> Privacy Policy</div>
        <div className="w-[133.96px] h-[22px] ">
          {/* <div className="w-[22px] h-[22px] left-[111.96px] top-0 absolute">
            <Image alt="" width="0" height="0"
              className="w-[22px] h-[22px] left-0 top-0 absolute"
              src="https://via.placeholder.com/22x22"
            />
            <Image alt="" width="0" height="0"
              className="w-[11px] h-[11px] left-[5.50px] top-[5.50px] absolute"
              src="https://via.placeholder.com/11x11"
            />
            <div className="w-[1.47px] h-[1.47px] left-[16.18px] top-[4.35px] absolute bg-white rounded-full" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
