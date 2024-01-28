
import Image from "next/image";

const Patners = () => {
  return (
    <div>
       <div
      className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] 
    w-full pt-[95px] pb-[36px] "
    >
      <div className="text-[#0C1C39] font-bold text-[6.3vw] sm:text-[5.3vw] md:text-[5vw] lg:text-[3.3vw] xl:text-[3vw] leading-[7vw] sm:leading-[6vw] lg:leading-[4vw] xl:leading-[3.8vw] pb-[32px]">
        Our Roofing Solution Patners
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-stretch gap-[30px]">
        <div className="w-auto h-[79px] bg-zinc-100 rounded-md p-5">
          <Image
            className="w-full h-full"
            alt="brand-patner"
            src="/brandPatners/tactile.svg"
            width="0"
            height="0"
          ></Image>
        </div>
        <div className="w-auto h-[79px] bg-zinc-100 rounded-md p-5">
          
          <Image
            className="w-full h-full"
            alt="brand-patner"
            src="/brandPatners/dsr.svg"
            width="0"
            height="0"
          ></Image>
        </div>
        
        <div className="w-auto h-[79px] bg-zinc-100 rounded-md p-5">
          
          <Image
            className="w-full h-full"
            alt="brand-patner"
            src="/brandPatners/Rectangle-6.svg"
            width="0"
            height="0"
          ></Image>
        </div>
        
        <div className="w-auto h-[79px] bg-zinc-100 rounded-md p-5">
          
          <Image
            className="w-full h-full"
            alt="brand-patner"
            src="/brandPatners/Rectangle-10.svg"
            width="0"
            height="0"
          ></Image>
        </div>
       
        
      </div>
    </div>
    </div>
  )
}

export default Patners
