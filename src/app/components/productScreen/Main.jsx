"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ProdNavbar } from "./ProdNavbar";
// import IndvProdNavbar from "./IndvProdNavbar";
import { ProductSlideTabs } from "./ProductSlideTabs";

const Main = () => {
  const pName = usePathname();
  console.log("pName", pName);
  // const pathname = pName.split("/").pop();
  const searchParams = useSearchParams();
  const pathname = searchParams.get("pname");
  console.log("pathname", pathname);

  const [selectedProduct, setSelectedProduct] = useState("metal_shingles");
  const [selectedMetalShinglesProduct, setSelectedMetalShinglesProduct] =
    useState("classic");

  const [selectedItem, setSelectedItem] = useState({
    name: "CHARCOAL",
    url: `/Roofing/${selectedMetalShinglesProduct}/Roofng01.jpg`,
  });

  const prodNavBarList = [
    { id: 1, name: "Metal Shingles", prodName: "metal_shingles" },
    { id: 2, name: "Sandwich Panels", prodName: "sandwich_panels" },
  ];

  const metalShinglesNavBarList = [
    { id: 1, name: "Classic", pathUrl: "classic" },
    { id: 2, name: "Edge Profile", pathUrl: "edge_profile" },
    { id: 3, name: "Roman Profile", pathUrl: "roman_profile" },
    { id: 4, name: "Shake", pathUrl: "shake" },
    { id: 5, name: "Shingle", pathUrl: "shingle" },
    // { id: 6, name: "Roofing Accessories", pathUrl: "roofing_accessories" },
  ];

  const colors = [
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng01.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng02.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng03.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng04.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng05.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng06.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng07.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng08.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng09.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng10.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng11.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng12.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng13.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng14.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng15.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng16.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng17.jpg` },
    { url: `/Roofing/${selectedMetalShinglesProduct}/Roofng18.jpg` },
    
  ];

  // Function to handle product selection
  const handleProductSelect = (prodName) => {
    setSelectedProduct(prodName);
  };

  // Metal Shingles Items
  // Function to handle product selection
  const handleMetalShinglesSelect = (pathUrl) => {
    setSelectedMetalShinglesProduct(pathUrl);
  };

  return (
    <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] w-full">
      {/* Prod Navbar */}
      <div className="sticky top-[18.5vw] sm:top-[12vw] md:top-[11vw] lg:top-[100.9px] my-5 z-20 backdrop-blur-md bg-[#fffffff2]">
        {/* Pass the state and handler to ProdNavbar */}
        <ProdNavbar
          prodNavBarList={prodNavBarList}
          selectedProduct={selectedProduct}
          onSelect={handleProductSelect}
        />
      </div>
      <div className="relative">
        {/* Metal Shingles Container */}
        {selectedProduct === "metal_shingles" && (
          <div className="p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 sticky top-[200px] z-[21] bg-white">
            {/* Header */}
            <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between">
              <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                Metal Shingles
              </div>
              <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                <a
                  href="https://wa.me/97337778311?text=I%27m+interested+in+Metal+Shingles+Roofing+Solution"
                  rel="noopener ugc nofollow"
                  target="_blank"
                  className="grow px-[10px] shrink  h-11  py-2.5  rounded-lg shadow border  justify-center items-center gap-2 flex bg-[#00A8CF] text-white border-[#00A8CF] hover:bg-white hover:text-[#00A8CF]
                 
                transition duration-300 ease-in select-none 
                cursor-pointer
                text-base font-semibold text-center leading-none"
                >
                  Get Quote
                </a>
                <div className="grow px-[10px] shrink cursor-pointer h-11  py-2.5 bg-white  rounded-lg shadow border border-[#D0D5DD] text-black justify-center items-center gap-2 flex hover:bg-[#f5f5f5] leading-normal transition duration-300 ease-in select-none">
                  <a
                    href="/Mahfar-broucher.pdf"
                    download
                    className="text-black text-base flex items-center gap-2 font-semibold  "
                  >
                    <span>
                      <Image
                        className="w-auto h-auto"
                        height="20"
                        alt="downloadIcon"
                        width="20"
                        src="/downloadIcon.svg"
                      />
                    </span>{" "}
                    Download Broucher
                  </a>
                </div>
              </div>
            </div>
            {/* Navbar */}

            <div className="sticky top-[12.5vw] sm:top-[12vw] md:top-[9vw] lg:top-[93.9px] z-20 bg-white py-2 overflow-x-auto">
              {/* Pass the state and handler to ProdNavbar */}
              <ProductSlideTabs
                metalShinglesNavBarList={metalShinglesNavBarList}
                selectedMetalShinglesProduct={selectedMetalShinglesProduct}
                onSelect={handleMetalShinglesSelect}
              />
            </div>
            {/* Main */}
            <div>
              {/* Images */}
              <div className="grid grid-cols-2 items-center gap-[15px] justify-items-center justify-center mt-[40px] sm:w-[500px] lg:w-full sm:m-auto lg:m-0 lg:mt-[40px] lg:ml-[40px]">
                <Image
                  className="w-full col-span-2 lg:col-span-1 lg:row-span-2 h-auto "
                  src={`/Roofing/${selectedMetalShinglesProduct}/RoofngSheet1.jpg`}
                  width="350"
                  height="350"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/${selectedMetalShinglesProduct}/RoofngSheet2.jpg`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/${selectedMetalShinglesProduct}/RoofngSheet3.jpg`}
                  width="250"
                  height="250"
                  alt=""
                />
                {/* More Main Images*/}
              </div>
              <div className="mt-[50px] flex flex-col md:items-center lg:flex-row gap-0 lg:gap-[45px] xl:gap-[25px]">
                <div className="lg:w-[60%] m-auto">
                  <Image
                    className="w-auto h-auto mb-[35px]"
                    src={selectedItem.url}
                    width="478"
                    height="318"
                    alt=""
                  />
                </div>
                <div className="lg:w-[40%]">
                  <div className="text-slate-900 text-[20px] md:text-[22px] font-medium ">
                    Select Color
                  </div>
                  {/* More Main */}
                  <div
                    className={`flex gap-[20px] justify-center md:gap-[10px] lg:gap-[16px] flex-wrap mt-[20px] `}
                  >
                    {colors.map((e, i) => (
                      <div
                        key={i}
                        className="flex flex-col cursor-pointer items-center "
                      >
                        <div>
                          <Image
                            priority={false}
                            onClick={() => {
                              setSelectedItem(e);
                            }}
                            className={`w-[90px] h-[75px] rounded-lg hover:border-4 hover:border-[#00a9cfe5] ${
                              e.url == selectedItem.url
                                ? "border-[#00a8cf8a]  border-4  shadow-md shadow-[#00000040]"
                                : ""
                            }`}
                            src={e.url}
                            width="90"
                            height="75"
                            alt=""
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sandwich Panels Container */}

        {selectedProduct === "sandwich_panels" && (
          <div className="p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 sticky top-[220px] z-[21] bg-white">
            <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between">
              <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                Sandwich Panels
              </div>
              <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                <a
                  href="https://wa.me/97337778311?text=I%27m+interested+in+Sandwich+Panels+Roofing+Solution"
                  rel="noopener ugc nofollow"
                  target="_blank"
                  className="grow px-[10px] shrink  h-11  py-2.5  rounded-lg shadow border  justify-center items-center gap-2 flex bg-[#00A8CF] text-white border-[#00A8CF] hover:bg-white hover:text-[#00A8CF]
                 
                transition duration-300 ease-in select-none 
                cursor-pointer
                text-base font-semibold text-center leading-none"
                >
                  Get Quote
                </a>
                <div className="grow px-[10px] shrink cursor-pointer h-11  py-2.5 bg-white  rounded-lg shadow border border-[#D0D5DD] text-black justify-center items-center gap-2 flex hover:bg-[#f5f5f5]  leading-normal transition duration-300 ease-in select-none">
                  <a
                    href="/Mahfar-broucher.pdf"
                    download
                    className="text-black text-base flex items-center gap-2 font-semibold  leading-normal"
                  >
                    <span>
                      <Image
                        className="w-auto h-auto"
                        height="20"
                        alt="downloadIcon"
                        width="20"
                        src="/downloadIcon.svg"
                      />
                    </span>{" "}
                    Download Broucher
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-[50px] flex flex-col md:items-center lg:flex-row gap-0 lg:gap-[45px] xl:gap-[25px]">
              <div
                className={`flex gap-[10px] justify-center md:gap-[10px] lg:gap-[10px] flex-wrap  `}
              >
                <Image
                  src="/Roofing/sandwich_panels/emar1.jpeg"
                  width="252"
                  height="252"
                  alt=""
                />
                <Image
                  src="/Roofing/sandwich_panels/emar2.jpeg"
                  width="252"
                  height="252"
                  alt=""
                />
                <Image
                  src="/Roofing/sandwich_panels/emar3.jpeg"
                  width="252"
                  height="252"
                  alt=""
                />
                <Image
                  src="/Roofing/sandwich_panels/emar4.jpeg"
                  width="252"
                  height="252"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
