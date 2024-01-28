import Image from "next/image";

const Project = () => {
  return (
    <div
      className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] 
  w-full pt-[95px] pb-[25px] "
    >
      <div className="text-[#0C1C39] font-bold text-[6.3vw] sm:text-[5.3vw] md:text-[5vw] lg:text-[3.3vw] xl:text-[3vw] leading-[7vw] sm:leading-[6vw] lg:leading-[4vw] xl:leading-[3.8vw] pb-[32px]">
        Our Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        <div>
          <Image
            className="w-full h-full"
            width="365"
            height="229"
            alt="project"
            src="/projectsDelivered/img3.svg"
          ></Image>
        </div>
        <div>
          <Image
            className="w-full h-full"
            width="365"
            height="229"
            alt="project"
            src="/projectsDelivered/img6.svg"
          ></Image>
        </div>
        <div className="block md:hidden lg:block">
          <Image
            className="w-full h-full"
            width="365"
            height="219"
            alt="project"
            src="/projectsDelivered/img7.svg"
          ></Image>
        </div>
        
        
      </div>
    </div>
  );
};

export default Project;
