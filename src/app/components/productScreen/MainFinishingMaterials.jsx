"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ProdNavbar } from "./ProdNavbar";
// import IndvProdNavbar from "./IndvProdNavbar";
import { ProductSlideTabs } from "./ProductSlideTabs";

const MainFinishingMaterials = () => {
  const pName = usePathname();
  console.log("pName", pName);
  // const pathname = pName.split("/").pop();
  const searchParams = useSearchParams();
  const pathname = searchParams.get("pname");
  console.log("pathname", pathname);

  const [selectedProduct, setSelectedProduct] = useState("ceramic_tiles");

  const prodNavBarList = [
    {
      id: 1,
      name: "Ceramic Tiles",
      prodName: "ceramic_tiles",
    },
    {
      id: 2,
      name: "Natural Stone Tiles",
      prodName: "natural_stone_tiles",
    },
    { id: 3, name: "FLOORING CARPETS", prodName: "flooring_carpets" },
    {
      id: 4,
      name: "Epoxy Floors",
      prodName: "epoxy_floors",
    },
    {
      id: 4,
      name: "Raised Floors",
      prodName: "raised_floors",
    },
    {
      id: 5,
      name: "Wood Flooring",
      prodName: "wood_flooring",
    },
  ];

  // Function to handle product selection
  const handleProductSelect = (prodName) => {
    setSelectedProduct(prodName);
  };

  return (
    <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] w-full">
      {/* Prod Navbar */}
      <div
        style={{ scrollbarWidth: "none" }}
        className="sticky top-[14vw] sm:top-[12.3vw] md:top-[10vw] lg:top-[94.9px] my-5 z-20 backdrop-blur-md bg-[#fffffff2]"
      >
        <ProdNavbar
          prodNavBarList={prodNavBarList}
          selectedProduct={selectedProduct}
          onSelect={handleProductSelect}
        />
      </div>
      <div className="relative">
        {/* thermal and acoustic key features */}

        <div className="p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 sticky top-[200px] z-0 bg-white">
          {/* Thermal Insulation  */}
          <div>
            {/* Header */}
            <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between">
              <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                {selectedProduct
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </div>
              <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                <a
                  href={`https://wa.me/97337778311?text=I%27m+interested+in+Finishing+Materials+${selectedProduct}`}
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
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
            {/* Materials */}
            <div>
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Increased height of main image */}
                  <div className="w-full md:w-2/3 h-[350px] md:h-[450px] bg-gray-200 rounded-lg relative">
                    {/* Main image */}
                    <Image
                      src={`/finishing-materials/${selectedProduct}/image1.png`}
                      alt={`${selectedProduct.replace('_', ' ')} Main Image`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-4">
                    {/* Increased height of secondary images */}
                    <div className="w-1/2 md:w-full h-[165px] md:h-[215px] bg-gray-200 rounded-lg relative">
                      {/* Second image */}
                      <Image
                        src={`/finishing-materials/${selectedProduct}/image2.png`}
                        alt={`${selectedProduct.replace('_', ' ')} Second Image`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="w-1/2 md:w-full h-[165px] md:h-[215px] bg-gray-200 rounded-lg relative">
                      {/* Third image */}
                      <Image
                        src={`/finishing-materials/${selectedProduct}/image3.png`}
                        alt={`${selectedProduct.replace('_', ' ')} Third Image`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-4">
                {selectedProduct === "ceramic_tiles" && (
                  <p className="text-base text-gray-700">
                    Discover the versatility and elegance of ceramic tiles.
                    Perfect for any room, these tiles offer a wide range of
                    designs and colors, making it easy to find the perfect match
                    for your style. Known for their durability and ease of
                    maintenance, ceramic tiles are an excellent choice for both
                    residential and commercial spaces. Transform your floors
                    with the timeless appeal of ceramic tiles.
                  </p>
                )}

                {selectedProduct === "natural_stone_tiles" && (
                  <p className="text-base text-gray-700">
                    Experience the natural beauty and unique textures of natural
                    stone tiles. Each tile is a piece of nature, offering
                    unmatched durability and a luxurious feel. Ideal for both
                    indoor and outdoor use, natural stone tiles bring a touch of
                    elegance and sophistication to any space. Choose from a
                    variety of stones, including marble, granite, and slate, to
                    create a truly unique and stunning floor.
                  </p>
                )}

                {selectedProduct === "flooring_carpets" && (
                  <p className="text-base text-gray-700">
                    Add warmth and comfort to your space with our premium carpet
                    tiles. These tiles are perfect for creating cozy, inviting
                    environments in both homes and offices. Easy to install and
                    replace, carpet tiles offer flexibility and convenience.
                    Available in a variety of colours and patterns, they provide
                    a stylish and practical flooring solution that enhances any
                    room’s ambiance.
                  </p>
                )}

                {selectedProduct === "epoxy_floors" && (
                  <p className="text-base text-gray-700">
                    For a sleek, modern look, consider epoxy floors. Known for
                    their high-gloss finish and exceptional durability, epoxy
                    floors are ideal for high-traffic areas. They are resistant
                    to stains, chemicals, and abrasions, making them perfect for
                    both industrial and residential applications. Enjoy a
                    seamless, easy-to-clean surface that stands up to the
                    demands of everyday life.
                  </p>
                )}

                {selectedProduct === "raised_floors" && (
                  <p className="text-base text-gray-700">
                    Innovate your space with raised floors, designed to provide
                    easy access to underfloor systems while maintaining a clean,
                    modern appearance. Perfect for offices and data centres,
                    raised floors offer flexibility and efficiency in managing
                    cables and utilities. Enhance your workspace with a flooring
                    solution that combines functionality with contemporary
                    design.
                  </p>
                )}

                {selectedProduct === "wood_flooring" && (
                  <p className="text-base text-gray-700">
                    Elevate your interiors with the timeless elegance of wood
                    flooring. Our collection features a variety of wood types,
                    finishes, and styles to suit any décor. Known for its
                    durability and natural beauty, wood flooring adds warmth and
                    sophistication to any space. Whether you prefer the classic
                    charm of oak or the rich tones of walnut, our wood flooring
                    options are designed to enhance your home or office.
                    Experience the perfect blend of style and functionality with
                    our premium wood flooring solutions
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFinishingMaterials;
