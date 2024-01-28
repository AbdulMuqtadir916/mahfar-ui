import Image from "next/image";

const HeroSec = () => {
  return (
    <div>
      <div className="w-[100%] px-[7vw] xl:px-[10vw] 2xl:px-[10vw] py-[35px] md:py-[50px] lg:py-[86px] bg-neutral-100 justify-start items-center gap-[131px] inline-flex">
        <div className="grow shrink basis-0  justify-start md:items-center gap-[50px] lg:gap-[131px] flex flex-col md:flex-row">
          <div className="flex-col w-[100%] justify-start items-start gap-[22px] inline-flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-zinc-800 text-[40px] font-semibold  ">
                Roofing Solution
              </div>
              <div className="w-[100%] text-slate-900 text-sm font-normal  ">
                Tile offers a unique elegance to any home, adding the beauty and
                style of Mediterranean Tile.A long-standing reputation
                established for its performance, longevity and versatility, Tile
                is an ideal alternative to traditional tile products.
              </div>
            </div>
            <div className="justify-start items-start gap-8 inline-flex">
              <div className="h-11 rounded-lg justify-start items-start flex">
                <div className="grow shrink basis-0 h-11 px-[18px] py-2.5 bg-cyan-500 rounded-lg shadow border border-cyan-500 justify-center items-center gap-2 flex">
                  <div className="text-white text-base font-semibold   leading-normal">
                    Get Quote
                  </div>
                </div>
              </div>
              <div className="h-11 rounded-lg justify-start items-start flex">
                <div className="grow shrink basis-0 h-11 px-[18px] py-2.5 bg-cyan-500 bg-opacity-10 rounded-lg shadow border border-cyan-500 border-opacity-10 justify-center items-center gap-2 flex">
                  <div className="text-cyan-500 text-base font-semibold   leading-normal">
                    Inquire Now
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%]">
            <Image
              width="0"
              height="0"
              className="w-[100%] rounded-lg"
              alt="roofing"
              src="/roofSol.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
