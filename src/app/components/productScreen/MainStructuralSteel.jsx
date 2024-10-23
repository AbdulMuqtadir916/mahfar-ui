"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ProdNavbar } from "@/app/components/productScreen/ProdNavbar";
import Image from "next/image";

const MainStructuralSteel = () => {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-[60px]">
            {[
              {
                src: "/structural-steel/image2.png",
                text: "Beams",
              },
              {
                src: "/structural-steel/image3.png",
                text: "Hollow Section (Tubes)",
              },
              {
                src: "/structural-steel/image4.png",
                text: "Angles",
              },
              {
                src: "/structural-steel/image5.png",
                text: "Corrugated Sheets",
              },
              {
                src: "/structural-steel/image6.png",
                text: "Corrugated Sheets",
              },
              {
                src: "/structural-steel/image7.png",
                text: "Decking Sheets",
              },
              {
                src: "/structural-steel/image8.png",
                text: "Decking Sheets",
              },
              {
                src: "/structural-steel/image9.png",
                text: "Steel Coils",
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
      </div>
    </>
  );
};

export default MainStructuralSteel;
