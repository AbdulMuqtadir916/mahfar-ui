import React from "react";
import Image from "next/image";
import Link from "next/link";

function IdeasAndInivation() {
  return (
    <div className="pl-[7vw] xl:pl-[10vw] 2xl:pl-[10vw] bg-neutral-100 py-[35px] md:pt-[97px] pb-[60px] w-full flex flex-col lg:flex-row">
      <div className="flex flex-col gap-[21px] md:pt-[52px] pb-[30px] sm:pb-[60px]">
        <div className="text-slate-900     font-bold text-[6.3vw] sm:text-[5.3vw] md:text-[5vw] lg:text-[3.3vw] xl:text-[3vw] leading-[7vw] sm:leading-[6vw] lg:leading-[4vw] xl:leading-[3.8vw] pr-[7vw] lg:pr-0">
          Bringing Your Ideas and Innovations to Life
        </div>
        <div className=" lg:w-[544px] text-slate-900 text-justify md:text-left text-sm pr-[7vw] lg:pr-0 font-normal">
          Mahfar Trading Co. W.L.L is one of the leading suppliers of
          construction materials in the region. We pride ourselves on our
          extensive knowledge, strong global connections with quality
          manufacturers, and commitment to providing the best products and
          services to our customers. At Mahfar Trading Co W.L.L, we understand
          that durability and reliability are essential when it comes to
          construction. That is why we offer a comprehensive selection of
          premium quality and innovative building materials to meet the diverse
          needs of construction projects in region. With our extensive range of
          products and commitment to excellence, we are your trusted partner for
          all your building material requirements.
        </div>
        <div>
          <Link
            href="/about-us"
            className="block py-1  rounded pb-[10px] sm:pb[0px]  mt-1"
          >
            <button
              // onClick={modal}
              className=" px-[10vw] lg:px-[7vw] xl:px-[5vw] py-2 border border-[#00A8CF] text-[16px] bg-[#fff] text-[#00A8CF] rounded-md hover:border-[#fff] hover:border hover:bg-[#00A8CF] hover:text-[#fff] transition duration-300 ease-in select-none cursor-pointer"
            >
              About Us
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          className="w-[667px] float-right h-[400px] sm:h-[499px]"
          src="/ideaAndIno.svg"
          width="0"
          height="0"
          alt="buildingHouse"
        />
      </div>
    </div>
  );
}

export default IdeasAndInivation;
