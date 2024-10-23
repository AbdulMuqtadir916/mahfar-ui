"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ProdNavbar } from "@/app/components/productScreen/ProdNavbar";
import Image from "next/image";

const MainHardwareTools = () => {
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
      <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] w-full">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-[60px]">
            {[
              {
                src: "/ironmongery/image3.png",
                text: "ZINC HANDLE",
              },
              {
                src: "/ironmongery/image4.png",
                text: "ALUMINIUM HANDLE",
              },
              {
                src: "/ironmongery/image5.png",
                text: "STEEL HANDLE ",
              },
              {
                src: "/ironmongery/image6.png",
                text: "ROSETTE HANDLE ",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full max-w-[240px] h-[180px] ">
                  <Image
                    src={item.src}
                    alt={item.text}
                    width={185}
                    height={123}
                    className="w-full h-full object-cover rounded-lg border shadow-sm"
                  />
                </div>
                <p className="mt-2 text-center font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-[#0C1C39] text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold mt-[60px]">
          Our Complete Door Hardware Solutions:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-[60px]">
            {[
              {
                src: "/ironmongery/image10.png",
                text: "",
              },
              {
                src: "/ironmongery/image12.png",
                text: "",
              },
              {
                src: "/ironmongery/image13.png",
                text: "",
              },
              {
                src: "/ironmongery/image14.png",
                text: " ",
              },
              {
                src: "/ironmongery/image15.png",
                text: "",
              },
              {
                src: "/ironmongery/image16.png",
                text: "",
              },
              {
                src: "/ironmongery/image18.png",
                text: "",
              },
              {
                src: "/ironmongery/image19.png",
                text: " ",
              },
              {
                src: "/ironmongery/image20.png",
                text: " ",
              },

              {
                src: "/ironmongery/image21.png",
                text: " ",
              },{
                src: "/ironmongery/image22.png",
                text: " ",
              },
              {
                src: "/ironmongery/image23.png",
                text: " ",
              },
              {
                src: "/ironmongery/image24.png",
                text: " ",
              },
              {
                src: "/ironmongery/image25.png",
                text: " ",
              },
              {
                src: "/ironmongery/image26.png",
                text: " ",
              },
              {
                src: "/ironmongery/image27.png",
                text: " ",
              },
              {
                src: "/ironmongery/image28.png",
                text: " ",
              },
              {
                src: "/ironmongery/image29.png",
                text: " ",
              },
              {
                src: "/ironmongery/image30.png",
                text: " ",
              },
              {
                src: "/ironmongery/image31.png",
                text: " ",
              },
              {
                src: "/ironmongery/image32.png",
                text: " ",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full max-w-[240px] h-[180px] ">
                  <Image
                    src={item.src}
                    alt={item.text}
                    width={185}
                    height={123}
                    className="w-full h-full object-cover rounded-lg border shadow-sm"
                  />
                </div>
                <p className="mt-2 text-center font-medium">{item.text}</p>
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export default MainHardwareTools;
