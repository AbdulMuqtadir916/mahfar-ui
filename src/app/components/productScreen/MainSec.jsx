"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ProdNavbar } from "@/app/components/productScreen/ProdNavbar";
import Image from "next/image";

const MainSec = () => {


  const [selectedProduct, setSelectedProduct] = useState("decking");

  const prodNavBarList = [
    { id: 1, name: "Decking", prodName: "decking" },
    { id: 2, name: "Pergola", prodName: "pergola" },
    { id: 3, name: "Fence", prodName: "fence" },
    { id: 4, name: "Facade", prodName: "facade" },
    { id: 5, name: "Hybrid", prodName: "hybrid" },
  ];

  const handleProductSelect = (prodName) => {
    setSelectedProduct(prodName);
  };

  const [schemaImageExists, setSchemaImageExists] = useState(false);

  useEffect(() => {
    const checkImageExists = async () => {
      try {
        const response = await fetch(
          `/compositeWood/${selectedProduct}/schema.jpg`
        );
        setSchemaImageExists(response.ok);
      } catch (error) {
        console.error("Error checking image:", error);
        setSchemaImageExists(false);
      }
    };

    checkImageExists();
  }, [selectedProduct]);

  return (
    <>
      <div className="sticky top-[12.5vw] sm:top-[12vw] md:top-[9vw] lg:top-[94.9px] my-5 z-20 py-5 px-[7vw] xl:px-[10vw] 2xl:px-[10vw] w-full bg-[#ffffffff]">
        <ProdNavbar
          prodNavBarList={prodNavBarList}
          selectedProduct={selectedProduct}
          onSelect={handleProductSelect}
        />
      </div>
      <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] w-full">
        {/* Top Section */}
        <div className="p-4 pb-14 pl-8 md:py-15 md:pl-12 lg:py-16 lg:pl-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold capitalize ">
            {selectedProduct}
          </h1>
          <p className="font-normal text-base md:text-lg mt-4 lg:mt-8 w-[90%] md:w-[85%] lg:w-[75%] text-[#0C1C39B2]">
            Elevate your outdoor space with our premium composite
            decking—sourced from trusted manufacturers. Durable, cost-effective,
            and safety-focused, our decking offers a perfect blend of style and
            resilience. Explore a range of styles for a beautiful, long-lasting
            outdoor flooring solution.
          </p>
          <div className="mt-6 w-[85%] md:w-[50%] lg:w-[40%] rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
            <a
              href={`https://wa.me/97337778311?text=I%27m+interested+in+${selectedProduct}`}
              rel="noopener ugc nofollow"
              target="_blank"
              className="grow px-[4px] shrink  h-11  py-2.5 
          rounded-lg shadow border  justify-center items-center gap-2 flex bg-[#00A8CF] text-white border-[#00A8CF] hover:bg-white hover:text-[#00A8CF]
                 
          transition duration-300 ease-in select-none 
          cursor-pointer
          text-base font-semibold text-center leading-none"
            >
              Get Quote
            </a>
            <div className="grow px-[4px] shrink cursor-pointer h-11  py-2.5 bg-white  rounded-lg shadow border border-[#D0D5DD] text-black justify-center items-center gap-2 flex">
              <div className="text-black text-base flex items-center gap-2 font-semibold  leading-normal">
                <span>
                  <Image
                    className="w-auto h-auto"
                    height="20"
                    alt="downloadIcon"
                    width="20"
                    src="/downloadIcon.svg"
                  />
                </span>{" "}
                Download Brochure
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="w-full lg:w-[90%] object-cover h-[250px] sm:h-[340px]  md:h-[410px] lg:h-[490px] rounded-3xl"
            src={`/compositeWood/${selectedProduct}/hero1.jpg`}
            width="200"
            height="200"
            alt=""
          />
        </div>
        {/* Main-Section */}
        {/* Schema */}
        {schemaImageExists && (
          <div className="py-16 pl-8 md:py-16 md:pl-12 lg:py-20 lg:pl-20">
            {/* Schema */}
            <div>
              <h3 className="uppercase text-xs sm:text-base md:text-lg lg:text-xl font-medium text-[#00A8CF]">
                {selectedProduct} STRUCTURE
              </h3>
              <h2 className="text-[#0C1C39] text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold">
                {selectedProduct} Schema
              </h2>
            </div>
            <div className="flex items-center justify-center mt-12 md:mt-28 lg:mt-32">
              <Image
                className="w-[80%] md:h-[350px] lg:h-[450px] object-cover"
                src={`/compositeWood/${selectedProduct}/schema.jpg`}
                width="540"
                height="440"
                alt="schema"
              />
            </div>
          </div>
        )}
        {/* colors & texture */}
        <div className="py-2 pl-8 md:py-16 md:pl-12 lg:py-20 lg:pl-20">
          {/* Schema */}
          <div>
            <h2 className="text-[#0C1C39] text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold">
              Colors & Texture
            </h2>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-20 lg:mt-28">
            <Image
              // className="w-[100%] md:h-[350px] lg:h-[450px] "
              src={`/compositeWood/${selectedProduct}/texture-col.jpg`}
              width="924"
              height="438"
              alt="ColorTexture"
            />
          </div>
        </div>
        {/* Profile & accsessories */}
        <div className="py-6 pl-8 md:py-16 md:pl-12 lg:py-20 lg:pl-20">
          {/* Schema */}
          <div>
            <h2 className="text-[#0C1C39] text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold">
              {selectedProduct} Profiles & Accessories
            </h2>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-20 lg:mt-28">
            <Image
              // className="w-[100%] md:h-[350px] lg:h-[450px] "
              src={`/compositeWood/${selectedProduct}/profile.jpg`}
              width="924"
              height="438"
              alt="accessories"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSec;
