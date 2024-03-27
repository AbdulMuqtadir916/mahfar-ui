import Image from "next/image";
import Link from "next/link";

const HeroSec = ({ productName, productDetail, productImage }) => {
  console.log("productName", productName);
  return (
    <div>
      <div className="w-[100%] px-[7vw] xl:px-[10vw] 2xl:px-[10vw] py-[35px] md:py-[50px] lg:py-[86px] bg-neutral-100 justify-start items-center gap-[131px] inline-flex">
        <div className="grow shrink basis-0  justify-start md:items-center gap-[50px] lg:gap-[131px] flex flex-col md:flex-row">
          <div className="flex-col w-[100%] justify-start items-start gap-[22px] inline-flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-zinc-800 text-[40px] font-semibold  ">
                {productName}
              </div>
              <div className="w-[100%] text-slate-900 text-sm font-normal  ">
                {productDetail}
              </div>
            </div>
            <div className="justify-start items-start gap-8 inline-flex">
              <div className="h-11 rounded-lg justify-start items-start flex">
                <a
                  href={`https://wa.me/97337778311?text=I%27m+looking+for+${productName}`}
                  rel="noopener ugc nofollow"
                  target="_blank"
                  className="grow shrink basis-0 h-11 px-[18px] py-2.5 rounded-lg shadow border justify-center items-center gap-2 flex
                bg-[#00A8CF] text-white border-[#00A8CF] hover:bg-white hover:text-[rgb(0,168,207)]
                text-base font-semibold  
                transition duration-300 ease-in select-none 
                cursor-pointer"
                >
                  Get Quote
                </a>
              </div>
              <div className="h-11 rounded-lg justify-start items-start flex">
                <Link
                  href="/contact-us"
                  className="grow shrink basis-0 h-11 px-[18px] py-2.5 bg-opacity-10 rounded-lg shadow border border-opacity-10 justify-center items-center gap-2 flex 
                   text-base font-semibold   leading-normal
                  bg-cyan-500  text-cyan-500 border-cyan-500  hover:bg-white hover:text-[rgb(0,168,207)
      ]
                   transition duration-300 ease-in select-none 
                   cursor-pointer
                  "
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[100%]">
            <Image
              width="0"
              height="0"
              className="w-[100%] rounded-lg"
              alt="roofing"
              src={productImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
