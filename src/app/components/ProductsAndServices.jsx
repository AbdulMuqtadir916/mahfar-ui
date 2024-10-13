import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductsAndServices() {
  return (
    <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] pt-28 w-full pb-[49px] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-[117px] gap-[30px]">
        <Link
          href="/products"
          className="group cursor-pointer w-auto lg:h-[270px] flex-col justify-start items-start gap-3 inline-flex"
        >
          <div className="leading-[46px]">
            <span className="text-zinc-800 text-[42px] font-normal ">
              Our Extensive <br />
            </span>
            <span className="text-green-500 text-[42px] font-semibold ">
              Product Range
            </span>
          </div>
          <div className="justify-start items-center gap-1 inline-flex  group-hover:gap-4 group-hover:duration-700 duration-700 group-hover:ease-in-out cursor-pointer">
            <div className="ViewAll text-cyan-500 text-[22px]  ">View All</div>
            <div className="w-[42px] h-[42px] relative ">
              <Image
                alt="arrow"
                src="/icon-arrow-narrow-right.svg"
                height={42}
                width={42}
              ></Image>
            </div>
          </div>
        </Link>
        <Link href="/products/roofing-solution/">
          <div
            className='group w-auto h-[270px] sm:h-[442px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex-col justify-start items-center gap-2.5 inline-flex" '
          >
            <Image
              className="w-full h-[200px] sm:h-[378px] md:h-[200px]"
              alt="roofing"
              src="/roofSol.svg"
              width="0"
              height="0"
            />
            <div className=" h-[42px]  pt-[6px] justify-between group-hover:duration-700 duration-700 mr-[20px] group-hover:mr-[0px] group-hover:ease-in-out cursor-pointer items-center flex">
              <div className="text-zinc-800 text-[22px]  ">
                Roofing Solution
              </div>
              <div className="w-[42px]  cursor-pointer h-[42px] relative ">
                <Image
                  alt="arrow"
                  src="/icon-arrow-narrow-right.svg"
                  height={42}
                  width={42}
                ></Image>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/products/composite-wood/">
          <div
            className=' group w-auto h-[270px] sm:h-[442px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex-col justify-start items-center gap-2.5 inline-flex" '
          >
            <Image
              className="w-full h-[200px] sm:h-[378px] md:h-[200px]"
              alt="roofing"
              src="/compositeWood.svg"
              width="0"
              height="0"
            />
            <div className=" h-[42px]  pt-[6px] justify-between group-hover:duration-700 duration-700 mr-[20px] group-hover:mr-[0px] group-hover:ease-in-out cursor-pointer items-center flex">
              <div className="text-zinc-800 text-[22px]  ">Composite Wood</div>
              <div className="w-[42px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer h-[42px] relative ">
                <Image
                  alt="arrow"
                  src="/icon-arrow-narrow-right.svg"
                  height={42}
                  width={42}
                ></Image>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/products/thermal-insulation">
          <div
            className='group w-auto h-[270px] sm:h-[442px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex-col justify-start items-center gap-2.5 inline-flex" '
          >
            <Image
              className="w-full h-[200px] sm:h-[378px] md:h-[200px]"
              alt="roofing"
              src="/thermalInsulation.svg"
              width="0"
              height="0"
            />
            <div className=" h-[42px]  pt-[6px] justify-between group-hover:duration-700 duration-700 mr-[20px] group-hover:mr-[0px] group-hover:ease-in-out cursor-pointer items-center flex">
              <div className="text-zinc-800 text-[22px]  ">
                Thermal Insulation
              </div>
              <div className="w-[42px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer h-[42px] relative ">
                <Image
                  alt="arrow"
                  src="/icon-arrow-narrow-right.svg"
                  height={42}
                  width={42}
                ></Image>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/products/acoustic-insulation">
          <div
            className='group w-auto h-[270px] sm:h-[442px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex-col justify-start items-center gap-2.5 inline-flex" '
          >
            <Image
              className="w-full h-[200px] sm:h-[378px] md:h-[200px]"
              alt="roofing"
              src="/AcoustucInsul.svg"
              width="0"
              height="0"
            />
            <div className=" h-[42px]  pt-[6px] justify-between group-hover:duration-700 duration-700 mr-[20px] group-hover:mr-[0px] group-hover:ease-in-out cursor-pointer items-center flex">
              <div className="text-zinc-800 text-[22px]  ">
                Acoustic Insulation
              </div>
              <div className="w-[42px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer h-[42px] relative ">
                <Image
                  alt="arrow"
                  src="/icon-arrow-narrow-right.svg"
                  height={42}
                  width={42}
                ></Image>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/products/water-proofing">
          <div
            className='group w-auto h-[270px] sm:h-[442px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex-col justify-start items-center gap-2.5 inline-flex" '
          >
            <Image
              className="w-full h-[200px] sm:h-[378px] md:h-[200px]"
              alt="roofing"
              src="/waterProofing.svg"
              width="0"
              height="0"
            />
            <div className=" h-[42px]  pt-[6px] justify-between group-hover:duration-700 duration-700 mr-[20px] group-hover:mr-[0px] group-hover:ease-in-out cursor-pointer items-center flex">
              <div className="text-zinc-800 text-[22px]  ">Water Proofing</div>
              <div className="w-[42px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer h-[42px] relative ">
                <Image
                  alt="arrow"
                  src="/icon-arrow-narrow-right.svg"
                  height={42}
                  width={42}
                ></Image>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ********Services******** */}
      {/* <div>
        <div className="pb-[46px]">
          <span className="text-zinc-800 text-[42px] font-normal ">
            Our Extensive{" "}
          </span>
          <span className="text-green-500 text-[42px] font-semibold ">
            Services
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[30px]">
          <div
            className="w-auto h-[270px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex flex-col  justify-start   "
          >
            <div>
              <Image
                className="w-[87px] h-[69px] "
                alt="designingicon"
                src="/designingIcon.svg"
                width="0"
                height="0"
              />
            </div>
            <div className=" h-[42px] leading-5 pt-[41px] justify-between hover:duration-700 duration-700 mr-[20px] hover:mr-[0px] hover:ease-in-out cursor-pointer items-center flex ">
              <div className="text-zinc-800 text-[22px]  ">Interior Design</div>
              <div className="w-[42px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer h-[42px] relative ">
                <Image
                  alt="arrow"
                  src="/icon-arrow-narrow-right.svg"
                  height={42}
                  width={42}
                ></Image>
              </div>
            </div>
            <div className="w-auto h-[63.20px] text-zinc-600 text-sm pt-[7vw] sm:pt-[30px] font-normal ">
              Lorem ipsum dolor sit amet consectetur. Sed tempus lorem mattis
              vitae pellentesque ornare. Tortor rhoncus nec massa blandit.
            </div>
          </div>
          <div
            className="w-auto h-[270px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex flex-col  justify-start   "
          >
            <div>
              <Image
                className="w-[87px] h-[69px] "
                alt="designingicon"
                src="/designingIcon.svg"
                width="0"
                height="0"
              />
            </div>
            <div className=" h-[42px] leading-5 pt-[41px] justify-between hover:duration-700 duration-700 mr-[20px] hover:mr-[0px] hover:ease-in-out cursor-pointer items-center flex ">
              <div className="text-zinc-800 text-[22px]  ">Interior Design</div>
              <div className="w-[42px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer h-[42px] relative ">
                <Image
                  alt="arrow"
                  src="/icon-arrow-narrow-right.svg"
                  height={42}
                  width={42}
                ></Image>
              </div>
            </div>
            <div className="w-auto h-[63.20px] text-zinc-600 text-sm pt-[7vw] sm:pt-[30px] font-normal ">
              Lorem ipsum dolor sit amet consectetur. Sed tempus lorem mattis
              vitae pellentesque ornare. Tortor rhoncus nec massa blandit.
            </div>
          </div>
          <div
            className="w-auto h-[270px]
        transition duration-700 ease-in-out hover:scale-105 cursor-pointer md:h-[270px] p-3.5 rounded-xl border border-stone-300 flex flex-col  justify-start   "
          >
            <div>
              <Image
                className="w-[87px] h-[69px] "
                alt="designingicon"
                src="/designingIcon.svg"
                width="0"
                height="0"
              />
            </div>
            <div className=" h-[42px] leading-5 pt-[41px] justify-between hover:duration-700 duration-700 mr-[20px] hover:mr-[0px] hover:ease-in-out cursor-pointer items-center flex ">
              <div className="text-zinc-800 text-[22px]  ">Interior Design</div>
              <div className="w-[42px] hover:duration-700 duration-700 hover:ease-in-out cursor-pointer h-[42px] relative ">
                <Image
                  alt="arrow"
                  src="/icon-arrow-narrow-right.svg"
                  height={42}
                  width={42}
                ></Image>
              </div>
            </div>
            <div className="w-auto h-[63.20px] text-zinc-600 text-sm pt-[7vw] sm:pt-[30px] font-normal ">
              Lorem ipsum dolor sit amet consectetur. Sed tempus lorem mattis
              vitae pellentesque ornare. Tortor rhoncus nec massa blandit.
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ProductsAndServices;
