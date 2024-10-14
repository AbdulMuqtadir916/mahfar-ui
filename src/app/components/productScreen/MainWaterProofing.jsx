"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ProdNavbar } from "./ProdNavbar";
// import IndvProdNavbar from "./IndvProdNavbar";
import { ProductSlideTabs } from "./ProductSlideTabs";

const MainWaterProofing = () => {
  const pName = usePathname();
  console.log("pName", pName);
  // const pathname = pName.split("/").pop();
  const searchParams = useSearchParams();
  const pathname = searchParams.get("pname");
  console.log("pathname", pathname);

  const [selectedProduct, setSelectedProduct] = useState("filler_boards");

  const prodNavBarList = [
    {
      id: 1,
      name: "Filler Boards",
      prodName: "filler_boards",
    },
    {
      id: 2,
      name: "Concrete Primer",
      prodName: "concrete_primer",
    },
    { id: 3, name: "Polyflame", prodName: "polyflame" },
    {
      id: 4,
      name: "Polyurethane & Water Repellent coatings",
      prodName: "polyurethane_water_coatings",
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
        <div className="p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 sticky top-[200px] z-0 bg-white">
          {/* filler_boards  */}
          {selectedProduct === "filler_boards" && (
            <div>
              {/* Header */}
              <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between">
                <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Filler Boards
                </div>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href={`https://wa.me/97337778311?text=I%27m+interested+in+Filler+Boards`}
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
                        src={`/water-proofing/filler-boards/image1.png`}
                        alt={`${selectedProduct.replace("_", " ")} Main Image`}
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
                          src={`/water-proofing/filler-boards/image2.png`}
                          alt={`${selectedProduct.replace(
                            "_",
                            " "
                          )} Second Image`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="w-1/2 md:w-full h-[165px] md:h-[215px] bg-gray-200 rounded-lg relative">
                        {/* Third image */}
                        <Image
                          src={`/water-proofing/filler-boards/image3.png`}
                          alt={`${selectedProduct.replace(
                            "_",
                            " "
                          )} Third Image`}
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
                  <p className="text-base text-gray-700">
                    Polyethylene Filler Board is a non-extruding, non-absorbent,
                    UV resistant, semi-rigid, highly resilient, bitumen free,
                    closed cell polyethylene board designed as a joint filler
                    material for expansion and movement joints in concrete,
                    brick work, block work and masonry.
                    <br />
                    Polyethylene Filler Board is bitumen free, rot proof and has
                    high compression & recovery therefore accommodating thermal
                    and other structural movements, without the risk of load
                    transfer or reflective cracking through the designed joint.
                    It also provides support and accurate depth measurement for
                    subsequent joint sealant materials.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* filler_boards  */}
          {selectedProduct === "concrete_primer" && (
            <div>
              {/* Header */}
              <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between">
                <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Concrete Primer
                </div>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href={`https://wa.me/97337778311?text=I%27m+interested+in+Concrete+Primer`}
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
                <div className="mt-[30px] flex flex-col-reverse  lg:flex-row gap-[10px]">
                  <div className="w-full lg:w-[50%]">
                    <p className="text-base ">
                      Concrete primer improves adhesion, reduces absorbency and
                      prepare the surface ensuring the longevity and
                      effectiveness of the final coating. Concrete primers are
                      essential for preparing concrete surfaces before applying
                      paint, coatings, or other finishing materials. They help
                      to ensure better adhesion, durability, and overall
                      performance of the topcoat.
                    </p>
                    <div className="mt-[30px] ">
                      <h3 className="text-slate-900 text-xl mb-2 font-bold">
                        Key Features:
                      </h3>
                      <ul className="list-disc pl-6 mb-6 space-y-1 text-base">
                        <li>
                          Surface Preparation: Concrete primers penetrate the
                          surface, filling in pores and imperfections. This
                          creates a smooth, even base that enhances the adhesion
                          of subsequent layers.
                        </li>
                        <li>
                          Moisture Barrier: They act as a moisture barrier,
                          preventing water from seeping through the concrete and
                          affecting the topcoat. This is particularly important
                          in areas prone to dampness.
                        </li>
                        <li>
                          Improved Adhesion: Primers improve the bond between
                          the concrete and the finishing material, ensuring that
                          the topcoat adheres properly and lasts longer.
                        </li>
                        <li>
                          Enhanced Durability: By providing a stable base,
                          primers help to increase the durability and longevity
                          of the finishing material, reducing the need for
                          frequent maintenance.
                        </li>
                        <li>
                          Improved Bonding: Concrete primers create a strong
                          bond between the concrete surface and the finishing
                          material, ensuring that the topcoat adheres properly
                          and lasts longer
                        </li>
                        <li>
                          Protection Against Moisture: Primers act as a moisture
                          barrier, preventing water from seeping through the
                          concrete and affecting the topcoat.
                        </li>
                        <li>
                          Resistance to Environmental Factors: They protect the
                          concrete from harsh weather conditions, chemicals, and
                          UV radiation, reducing instances of cracking and
                          spalling
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <Image
                      src="/water-proofing/primer/image1.png"
                      alt={"primer"}
                      width={185}
                      height={123}
                      className="w-full lg:h-[500px] object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* polyflame */}
          {selectedProduct === "polyflame" && (
            <div>
              {/* Header */}
              <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between">
                <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Polyflame
                </div>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href={`https://wa.me/97337778311?text=I%27m+interested+in+Polyflame`}
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

              <div className="flex flex-col md:flex-row gap-4">
                {/* Increased height of main image */}
                <div className="w-full md:w-2/3 h-[350px] md:h-[450px] bg-gray-200 rounded-lg relative">
                  {/* Main image */}
                  <Image
                    src={`/water-proofing/polyflame/image1.png`}
                    alt={`${selectedProduct.replace("_", " ")} Main Image`}
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
                      src={`/water-proofing/polyflame/image2.png`}
                      alt={`${selectedProduct.replace("_", " ")} Second Image`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 md:w-full h-[165px] md:h-[215px] bg-gray-200 rounded-lg relative">
                    {/* Third image */}
                    <Image
                      src={`/water-proofing/polyflame/image3.png`}
                      alt={`${selectedProduct.replace("_", " ")} Third Image`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              {/* About */}
              <div className="mt-[30px] ">
                <h3 className="text-slate-900 text-xl mb-2 font-bold">
                  Self Adhesive Membrane
                </h3>
                <p>
                  APP (Atactic Polypropylene) modified bitumen waterproofing
                  membranes with non-woven polyester reinforcement are highly
                  effective solutions for protecting structures from water
                  ingress. Here’s a detailed description:
                </p>
              </div>
              {/* Key Features */}
              <div className="mt-[30px] ">
                <h3 className="text-slate-900 text-xl mb-2 font-bold">
                  Key Features:
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-1 text-base">
                  <li>
                    Composition: These membranes are made from bitumen modified
                    with APP, which enhances the bitumen’s elasticity and
                    flexibility. The addition of non-woven polyester
                    reinforcement provides extra strength and dimensional
                    stability.
                  </li>
                  <li>
                    Waterproofing: The primary function of these membranes is to
                    provide a waterproof barrier, preventing water from
                    penetrating into the structure. They are highly effective in
                    eliminating leakages and moisture insulation.
                  </li>
                  <li>
                    Reinforcement: The non-woven polyester reinforcement adds
                    robustness to the membrane, making it resistant to tearing
                    and punctures. This reinforcement ensures the membrane can
                    withstand mechanical stresses and environmental conditions.
                  </li>
                  <li>
                    Thermal Stability: APP modified bitumen membranes exhibit
                    excellent thermal stability, maintaining their properties
                    across a wide range of temperatures. They remain flexible at
                    low temperatures and stable at high temperatures.
                  </li>
                  <li>
                    UV and Chemical Resistance: These membranes are resistant to
                    UV radiation and various chemicals, ensuring long-term
                    durability and performance even in harsh environmental
                    conditions.
                  </li>
                </ul>
              </div>
              {/* Images */}
              <div className="mt-[30px] flex flex-col md:flex-row gap-4">
                {/* Increased height of main image */}
                <div className="w-full md:w-2/3 h-[350px] md:h-[450px] bg-gray-200 rounded-lg relative">
                  {/* Main image */}
                  <Image
                    src={`/water-proofing/polyflame/self-membrane/image1.png`}
                    alt={`${selectedProduct.replace("_", " ")} Main Image`}
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
                      src={`/water-proofing/polyflame/self-membrane/image2.png`}
                      alt={`${selectedProduct.replace("_", " ")} Second Image`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 md:w-full h-[165px] md:h-[215px] bg-gray-200 rounded-lg relative">
                    {/* Third image */}
                    <Image
                      src={`/water-proofing/polyflame/self-membrane/image3.png`}
                      alt={`${selectedProduct.replace("_", " ")} Third Image`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-[30px] ">
                <h3 className="text-slate-900 text-xl mb-2 font-bold">
                  Advantages
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-1 text-base">
                  <li>High mechanical resistance.</li>
                  <li>Resistance to UV rays &amp; Weathering.</li>
                  <li>High resistance to puncturing.</li>
                  <li>Resistant to root penetration.</li>
                  <li>High resistance to hot-cold temperature cycles.</li>
                  <li>
                    Various RAL colors available on demand to aid architectural
                    designs.
                  </li>
                  <li>High aging resistance, well proven formula.</li>
                  <li>Fast application,</li>
                  <li>Specific thicknesses: on demand.</li>
                  <li>Full range of complimentary accessories available.</li>
                  <li>Customized sheet sizes available for any project.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Coating */}
          {selectedProduct === "polyurethane_water_coatings" && (
            <div>
              {/* Header */}
              <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between">
                <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Polyurethane & Water Repellent coatings
                </div>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href={`https://wa.me/97337778311?text=I%27m+interested+in+Polyurethane+&+Water+Repellent+coatings`}
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
                        src={`/water-proofing/coating/image1.png`}
                        alt={`${selectedProduct.replace("_", " ")} Main Image`}
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
                          src={`/water-proofing/coating/image2.png`}
                          alt={`${selectedProduct.replace(
                            "_",
                            " "
                          )} Second Image`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="w-1/2 md:w-full h-[165px] md:h-[215px] bg-gray-200 rounded-lg relative">
                        {/* Third image */}
                        <Image
                          src={`/water-proofing/coating/image3.png`}
                          alt={`${selectedProduct.replace(
                            "_",
                            " "
                          )} Third Image`}
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
                  <p className="text-base text-gray-700">
                    Polyurethane coatings are a liquid applied waterproofing
                    membrane that provides durable protection from abrasion,
                    corrosion, weathering or any other type of deterioration
                    that could happen on pedestrian traffic surfaces
                    <br />
                    - Excellent UV resistance. <br />
                    - Excellent resistance to splashes of a variety of chemicals
                    and sewage water. <br />
                    - Exhibits good mechanical properties. <br />
                    - Available in different colors including clear color.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainWaterProofing;
