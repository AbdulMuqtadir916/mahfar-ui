"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ProdNavbar } from "./ProdNavbar";
// import IndvProdNavbar from "./IndvProdNavbar";
import { ProductSlideTabs } from "./ProductSlideTabs";

const MainThermalAcoustic = () => {
  const pName = usePathname();
  console.log("pName", pName);
  // const pathname = pName.split("/").pop();
  const searchParams = useSearchParams();
  const pathname = searchParams.get("pname");
  console.log("pathname", pathname);

  const [selectedProduct, setSelectedProduct] = useState(
    "thermal_acoustic_key_features"
  );
  

  const prodNavBarList = [
    {
      id: 1,
      name: "Thermal And Acoustic Key Features",
      prodName: "thermal_acoustic_key_features",
    },
    { id: 2, name: "Rockwool", prodName: "rockwool" },
    {
      id: 3,
      name: "Extruded Polystyrene (XPS)",
      prodName: "extruded_polystyrene_xps",
    },
    {
      id: 4,
      name: "Expanded Polystyrene Boards (EPS)",
      prodName: "expanded_polystyrene_boards_eps",
    },
  ];

  // Function to handle product selection
  const handleProductSelect = (prodName) => {
    setSelectedProduct(prodName);
  };

 

  return (
    <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] w-full">
      {/* Prod Navbar */}
      <div style={{ scrollbarWidth: 'none' }} className="sticky top-[14vw] sm:top-[12.3vw] md:top-[10vw] lg:top-[94.9px] my-5 z-20 backdrop-blur-md bg-[#fffffff2]">
        <ProdNavbar
          prodNavBarList={prodNavBarList}
          selectedProduct={selectedProduct}
          onSelect={handleProductSelect}
        />
      </div>
      <div className="relative">
        {/* thermal and acoustic key features */}
        {selectedProduct === "thermal_acoustic_key_features" && (
          <div className="p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 sticky top-[200px] z-0 bg-white">
            {/* Thermal Insulation  */}
            <div>
              {/* Header */}
              <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between">
                <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Thermal Insulation:
                </div>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href="https://wa.me/97337778311?text=I%27m+interested+in+Thermal+Insulation"
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
              {/* Thermal Insulation Key Features */}
              <div>
                <h3 className="text-slate-900 text-xl mb-2 font-bold">
                  Key Features:
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-1 text-base">
                  <li>
                    Due to closed-cell and homogeneous structure high resistance
                    to water absorption thus ensuring that the product is not
                    only dimensionally stable but capable of maintaining its K
                    Value for long periods.
                  </li>
                  <li>
                    Desirable resistance to vapor diffusion so that
                    breathability is maintained.
                  </li>
                  <li>Sufficient strength against heavy loads.</li>
                  <li>Long-term high insulation efficiency.</li>
                  <li>Resistance to ageing and rotting.</li>
                  <li>High resistance to thermal cycling.</li>
                  <li>
                    Non-Toxic and non-hazardous to humans and environment.
                  </li>
                  <li>
                    Eliminates thermal bridging with its tongue and groove
                    edges.
                  </li>
                  <li>
                    Available in various types for roofs, slabs, and walls
                  </li>
                </ul>
              </div>
            </div>

            {/* Acoustic Insulation  */}
            <div>
              {/* Header */}
              <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between mt-[20px]">
                <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Acoustic Insulation:
                </div>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href="https://wa.me/97337778311?text=I%27m+interested+in+Acoustic+Insulation"
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
              {/* Acoustic Insulation Key Features */}
              <div>
                <h3 className="text-slate-900 text-xl mb-2 font-bold">
                  Key Features:
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-1 text-base">
                  <li>
                    Protection from external noise and absorb sound waves.
                  </li>
                  <li>Comfort and privacy, Insulate unwanted noise.</li>
                  <li>
                    Reduction of sound transmission and vibration passing
                    through building elements..
                  </li>
                  <li>
                    Applications for both renovation projects and new builds.
                  </li>
                  <li> Resistance to ageing and rotting.</li>
                  <li>Long-term high insulation efficiency.</li>
                  <li>
                    Non-Toxic and non-hazardous to humans and environment.
                  </li>
                </ul>
              </div>
            </div>
          
           
          </div>
        )}

        {/* Rockwool */}
        {selectedProduct === "rockwool" && (
          <div className="p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 sticky top-[200px] z-0 bg-white">
            {/* Rockwool  */}
            <div>
              {/* Header */}
              <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between">
                <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Rockwool:
                </div>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href="https://wa.me/97337778311?text=I%27m+interested+in+Rockwool"
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
              {/* Rockwool */}
              <div>
                <p className="text-base">
                  Rockwool insulation solutions epitomize sustainability and
                  durability, offering eco-friendly, high-performance Rockwool
                  made from natural volcanic rock. Tailored for modern
                  construction&#39;s stringent environmental standards, these
                  solutions significantly contribute to LEED certification
                  goals, meeting the comprehensive needs for thermal, acoustic,
                  and fire safety in building projects.
                  <br />
                  Rock wool is a type of insulation material made from melted
                  rocks, primarily basalt and dolomite, that are spun into
                  fibres and then bound together to form a mat or batting. Rock
                  wool is known for its fire resistance, soundproofing, and
                  thermal insulation properties. Rock wool is a versatile and
                  effective insulation material that offers numerous benefits in
                  building, industrial, and HVAC applications. Its fire
                  resistance, soundproofing, and thermal insulation properties
                  make it a popular choice for many different types of projects.
                  <br />
                  Effective insulation depends on the precise selection of
                  material, thickness, and density, tailored to meet stringent
                  local codes and U-Value requirements for the building&#39;s
                  envelope. Engineered to surpass energy efficiency goals and
                  ensure compliance with regulatory standards, enhancing
                  building sustainability and performance
                </p>
                {/* Optimal Thermal and Acoustic Insulation for Modern Constructions */}
                <div className="mt-[40px]">
                  <h3 className="text-slate-900 text-xl mb-2 font-bold">
                    Optimal Thermal and Acoustic Insulation for Modern
                    Constructions
                  </h3>
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[30px]">
                      {[
                        {
                          src: "/thermal-acoustic/rockwool/image1.png",
                          text: "Mineral wool",
                        },
                        {
                          src: "/thermal-acoustic/rockwool/image2.png",
                          text: "Fiberglass",
                        },
                        {
                          src: "/thermal-acoustic/rockwool/image3.png",
                          text: "Polyurethane Foam",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-full max-w-[240px] h-[180px]">
                            <Image
                              src={item.src}
                              alt={item.text}
                              width={185}
                              height={123}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <p className="mt-2 text-center font-medium">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rockwool  */}
            <div>
              {/* Header */}
              <div className="flex mt-[60px] mb-[30px] items-center flex-wrap gap-[15px] justify-between">
                <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Cavity Panels
                </div>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href="https://wa.me/97337778311?text=I%27m+interested+in+Cavity+Panels"
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
              {/* Cavity Panels */}
              <div className="mt-[30px] flex flex-col-reverse  lg:flex-row gap-[10px]">
                <p className="text-base w-full lg:w-[50%]">
                  Cavity Panels are a testament to advanced insulation
                  technology, crafted from high-quality Rock Wool fibres and
                  bonded with a thermosetting synthetic resin. These semi-rigid
                  to rigid panels, of medium density, are meticulously
                  manufactured to meet the precise standards ensuring both
                  reliability and performance.
                  <br />
                  Designed for versatility, Cavity Panels are ideal for a wide
                  array of applications, including residential buildings,
                  educational institutions, healthcare facilities, and various
                  governmental and commercial offices. Whether applied
                  externally or internally, these panels offer exceptional
                  thermal and acoustic insulation, enhancing the comfort and
                  efficiency of any space.
                </p>
                <div className="w-full lg:w-[50%]">
                  <Image
                    src="/thermal-acoustic/rockwool/cavity_panels.png"
                    alt={"cavity_panels"}
                    width={185}
                    height={123}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* Optimal Thermal and Acoustic Insulation for Modern Constructions */}
                {/* <div className="mt-[40px]">
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[30px]">
                      {[
                        {
                          src: "/thermal-acoustic/rockwool/cavity_panels.png",
                          text: "Mineral wool",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-full max-w-[240px] h-[180px]">
                            <Image
                              src={item.src}
                              alt={item.text}
                              width={185}
                              height={123}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <p className="mt-2 text-center font-medium">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        )}

        {/* extruded_polystyrene_xps */}
        {selectedProduct === "extruded_polystyrene_xps" && (
          <div className="p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 sticky top-[200px] z-0 bg-white">
            <div>
              {/* Header */}
              <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between">
                <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Extruded polystyrene (XPS):
                </div>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href="https://wa.me/97337778311?text=I%27m+interested+in+Extruded+Polystyrene+(XPS):"
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
              {/* Main */}
              {/* Image Section */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/2">
                  <Image
                    src="/thermal-acoustic/extruded-polystyrene/image1.png"
                    alt="Extruded Polystyrene (XPS) Image 1"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/thermal-acoustic/extruded-polystyrene/image2.png"
                    alt="Extruded Polystyrene (XPS) Image 2"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="mb-8">
                <p className="text-base text-gray-700 leading-relaxed">
                  Extruded polystyrene (XPS) insulation board is made from
                  polystyrene resin and small amount of additives through
                  heating and extruding system. It is a rigid foam with
                  honeycomb structure. Owing to its 100% closed cell structure,
                  it is highly moisture resistant and waterproof.
                </p>
              </div>

              {/* Features Section */}
              <div>
                <h3 className="text-slate-900 text-xl mb-4 font-bold">
                  Key Features:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>High Compressive Strength</li>
                  <li>Water-resistant</li>
                  <li>Excellent Thermal Insulation</li>
                  <li>Dimensional Stable</li>
                  <li>Light Weight</li>
                  <li>Resistant to deformation</li>
                  <li>Recyclable</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* expanded_polystyrene_boards_eps */}
        {selectedProduct === "expanded_polystyrene_boards_eps" && (
          <div className="p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 sticky top-[200px] z-0 bg-white">
            <div>
              {/* Header */}
              <div className="flex mb-[30px] items-center flex-wrap gap-[15px] justify-between">
                <div className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Extruded Polystyrene (XPS):
                </div>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href="https://wa.me/97337778311?text=I%27m+interested+in+Extruded+Polystyrene+(XPS):"
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
              {/* Main */}
              {/* Image Section */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/2">
                  <Image
                    src="/thermal-acoustic/eps/image1.png"
                    alt="EPS Image 1"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/thermal-acoustic/eps/image2.png"
                    alt="EPS Image 2"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="mb-8">
                <p className="text-base text-gray-700 leading-relaxed">
                  Polystyrene (EPS) is a type of rigid foam. Due to the
                  advantages as heat and sound insulation, high load capacity,
                  EPS panels are applied as external walls and internal division
                  walls, installed vertically or horizontally on single- or
                  multi-span structure.
                </p>
              </div>

              {/* Features Section */}
              <div className="mb-8">
                <h3 className="text-slate-900 text-xl mb-4 font-bold">
                  Key Features:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>Thermal Properties </li>
                  <li>Mechanical strength</li>
                  <li>Dimensional Stability</li>
                  <li>Electrical Properties</li>
                  <li>It is not hygroscopic</li>
                  <li>Chemical Resistance</li>
                  <li>Weathering and Aging Resistance</li>
                </ul>
              </div>

              {/* Products */}
              <div className="mb-8">
                <h3 className="text-slate-900 text-xl mb-4 font-bold">
                  EPS PRODUCTS:
                </h3>

                <p className="text-base mt-[40px] text-gray-700 leading-relaxed">
                  Expanded Polystyrene (EPS) products are lightweight, rigid
                  foam materials made from polystyrene beads. They offer
                  excellent thermal insulation, durability, and moisture
                  resistance. Common applications include building insulation,
                  packaging, and lightweight fill for construction projects. EPS
                  is also versatile and recyclable, making it a sustainable
                  choice for various industries.
                </p>
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[30px]">
                    {[
                      {
                        src: "/thermal-acoustic/eps/products/image10.png",
                        text: "FOOD PACKAGING TRAYS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image1.png",
                        text: "BEAN BAGS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image2.png",
                        text: "EXTERIOR INSULATION FINISHING SYSTEM (EIFS)",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image3.png",
                        text: "FLOOR FILLING & LANDSCAPING",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image4.png",
                        text: "PIPE INSULATION",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image5.png",
                        text: "PARAPET DESIGNS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image6.png",
                        text: "EPS PONTOONS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image7.png",
                        text: "PRECAST PANELS/ENDCAPS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image8.png",
                        text: "HOURDI BLOCKS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image9.png",
                        text: "VOID FORMERS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image20.png",
                        text: "EPS PILING CYLINDERS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image11.png",
                        text: "EPS BLOCKS/SHEETS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image12.png",
                        text: "EPS PACKING SHEETS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image13.png",
                        text: "INDUSTRIAL PACKAGING",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image14.png",
                        text: "EPS CHIPS AND BEADS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image15.png",
                        text: "EPS Art & Decorations",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image16.png",
                        text: "EPS BOXES",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image17.png",
                        text: "EPS THERMAL BLOCK INSERTS",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image18.png",
                        text: "Seeding Trays",
                      },
                      {
                        src: "/thermal-acoustic/eps/products/image19.png",
                        text: "Flower Pots",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-full max-w-[240px] h-[180px]">
                          <Image
                            src={item.src}
                            alt={item.text}
                            width={185}
                            height={123}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <p className="mt-2 text-center font-medium">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainThermalAcoustic;
