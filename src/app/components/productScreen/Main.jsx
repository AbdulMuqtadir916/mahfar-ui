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
  const [selectedSandwichPanelProduct, setSelectedSandwichPanelProduct] =
    useState("roof_panels");
  const [selectedFormingProduct, setSelectedFormingProduct] =
    useState("corrugated_sheets");

  const [selectedItem, setSelectedItem] = useState({
    name: "CHARCOAL",
    url: `/Roofing/${selectedMetalShinglesProduct}/Roofng01.jpg`,
  });

  const prodNavBarList = [
    { id: 1, name: "Metal Shingles", prodName: "metal_shingles" },
    { id: 2, name: "Sandwich Panels", prodName: "sandwich_panels" },
    { id: 3, name: "Forming", prodName: "forming" },
    { id: 4, name: "Natural Slate Tiles", prodName: "natural_slate_tiles" },
    { id: 5, name: "Bitumen Shingle", prodName: "bitumen_shingle" },
  ];

  const metalShinglesNavBarList = [
    { id: 1, name: "Classic", pathUrl: "classic" },
    { id: 2, name: "Edge Profile", pathUrl: "edge_profile" },
    { id: 3, name: "Roman Profile", pathUrl: "roman_profile" },
    { id: 4, name: "Shake", pathUrl: "shake" },
    { id: 5, name: "Shingle", pathUrl: "shingle" },
  ];

  const sandwichPanelNavBarList = [
    { id: 1, name: "Roof Panels", pathUrl: "roof_panels" },
    { id: 2, name: "Wall Panels", pathUrl: "wall_panels" },
  ];

  const formingProductNavBarList = [
    { id: 1, name: "Corrugated Sheets", pathUrl: "corrugated_sheets" },
    { id: 2, name: "Flashing", pathUrl: "flashing" },
    { id: 3, name: "Purlins", pathUrl: "purlins" },
    { id: 4, name: "Ducking Sheet", pathUrl: "ducking_sheet" },
    { id: 5, name: "Ridge & Curve Sheets", pathUrl: "ridge_&_curve_sheets" },
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

  const handleSandwichPanelSelect = (pathUrl) => {
    setSelectedSandwichPanelProduct(pathUrl);
  };

  const handleFormingProductSelect = (pathUrl) => {
    setSelectedFormingProduct(pathUrl);
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
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
            {/* Navbar */}

            <div className="sticky top-[12.5vw] sm:top-[12vw] md:top-[9vw] lg:top-[93.9px] z-20 bg-white py-2 overflow-x-auto">
              {/* Pass the state and handler to ProdNavbar */}
              <ProductSlideTabs
                navBarList={metalShinglesNavBarList}
                selectedProduct={selectedMetalShinglesProduct}
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
            {/* Header */}
            <div className="flex flex-col mb-[30px] gap-[20px]">
              <div className="flex flex-wrap items-center gap-[15px] justify-between">
                <h3 className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Sandwich Panels
                </h3>
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
                      Download Brochure
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-slate-500 text-[16px]">
                Modular building material with three layers: two outer for
                structure and weather resistance, and a core for thermal and
                acoustic insulation. Ideal for roofs, facades, and cold storage,
                they provide excellent insulation, structural strength, and are
                lightweight for easy installation. Available in customizable
                thicknesses and sizes, they offer energy efficiency and quick
                installation.
              </p>
            </div>

            {/* Navbar */}
            <div className="sticky top-[12.5vw] sm:top-[12vw] md:top-[9vw] lg:top-[93.9px] z-20 bg-white py-2 overflow-x-auto">
              {/* Pass the state and handler to ProdNavbar */}
              <ProductSlideTabs
                navBarList={sandwichPanelNavBarList}
                selectedProduct={selectedSandwichPanelProduct}
                onSelect={handleSandwichPanelSelect}
              />
            </div>

            {/* Main */}
            <div className="mt-[50px] flex flex-col md:items-center lg:flex-row gap-0 lg:gap-[45px] xl:gap-[25px]">
              <div
                className={`flex gap-[10px] justify-center md:gap-[10px] lg:gap-[10px] flex-wrap  `}
              >
                <Image
                  src={`/Roofing/sandwich_panels/${selectedSandwichPanelProduct}/image1.png`}
                  width="252"
                  height="252"
                  alt=""
                />
                <Image
                  src={`/Roofing/sandwich_panels/${selectedSandwichPanelProduct}/image2.png`}
                  width="252"
                  height="252"
                  alt=""
                />
                <Image
                  src={`/Roofing/sandwich_panels/${selectedSandwichPanelProduct}/image3.png`}
                  width="252"
                  height="252"
                  alt=""
                />
                <Image
                  src={`/Roofing/sandwich_panels/${selectedSandwichPanelProduct}/image4.png`}
                  width="252"
                  height="252"
                  alt=""
                />
                <Image
                  src={`/Roofing/sandwich_panels/${selectedSandwichPanelProduct}/image5.png`}
                  width="252"
                  height="252"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}

        {/* Forming Container */}
        {selectedProduct === "forming" && (
          <div className="p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 sticky top-[220px] z-[21] bg-white">
            {/* Header */}
            <div className="flex flex-col mb-[20px] gap-[20px]">
              <div className="flex  items-center gap-[15px] justify-between">
                <h3 className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  Forming Products
                </h3>
              </div>
            </div>

            {/* Navbar */}
            <div className="sticky top-[12.5vw] sm:top-[12vw] md:top-[9vw] lg:top-[93.9px] z-20 bg-white py-2 overflow-x-auto ">
              {/* Pass the state and handler to ProdNavbar */}
              <ProductSlideTabs
                navBarList={formingProductNavBarList}
                selectedProduct={selectedFormingProduct}
                onSelect={handleFormingProductSelect}
              />
            </div>

            {/* Main */}
            <div className="flex flex-col mb-[30px] gap-[20px] mt-7">
              <div className="flex  items-center gap-[15px] justify-between flex-wrap">
                <h3 className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                  {selectedFormingProduct
                    .split("_")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </h3>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href="https://wa.me/97337778311?text=I%27m+interested+in+Forming+Products"
                    rel="noopener ugc nofollow"
                    target="_blank"
                    className="grow px-[10px] shrink  h-11  py-2.5  rounded-lg shadow border  justify-center items-center gap-2 flex bg-[#00A8CF] text-white border-[#00A8CF] hover:bg-white hover:text-[#00A8CF] transition duration-300 ease-in select-none  cursor-pointer text-base font-semibold text-center leading-none"
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
                      Download Brochure
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[50px] flex flex-col md:items-center lg:flex-row gap-0 lg:gap-[45px] xl:gap-[25px]">
              <div
                className={`flex gap-[30px] justify-center md:gap-[20px]  flex-col md:flex-row `}
              >
                {/* <div> */}
                {selectedFormingProduct === "corrugated_sheets" && (
                  <p className="text-slate-500 text-[16px] w-full md:w-1/2">
                    Corrugated sheets are thin, flat panels made of a durable
                    material, typically metal, that feature a series of parallel
                    ridges and grooves. These ridges and grooves give the sheet
                    a wavy or corrugated appearance. Corrugated sheets are
                    commonly used in construction, roofing, and cladding
                    applications.
                    <br />
                    Corrugated sandwich panels are widely used in the
                    construction industry for roofing, wall cladding, and
                    industrial applications. They offer several advantages,
                    including lightweight construction, high strength-to-weight
                    ratio, thermal insulation, sound insulation, and resistance
                    to weather elements.
                    <br />
                    These panels are relatively easy to install and provide a
                    cost-effective solution for building exteriors. They are
                    available in various sizes, colors, and profiles, allowing
                    for versatility in design and architectural applications.
                    <br />
                    Overall, corrugated sandwich panels combine the benefits of
                    corrugated sheets, such as strength and rigidity, with the
                    advantages of sandwich panels, such as insulation and
                    versatility. They are a popular choice in construction for
                    their durability, functionality, and aesthetic appeal.
                  </p>
                )}
                {selectedFormingProduct === "flashing" && (
                  <p className="text-slate-500 text-[16px] w-full md:w-1/2">
                    A flashing for sandwich panels is an essential element in
                    the proper installation of sandwich panels. This term refers
                    to a sealing or connection system between the sandwich
                    panels and the structure. Flashings are typically made of
                    metal (such as aluminium) or polymer (such as PVC) and are
                    installed on the edges of the sandwich panels. The main
                    purpose of sandwich panel flashings is to create compression
                    and tightness between the panel edges, preventing the entry
                    of air, water, dust, and insects into the structure.
                    Flashings act as a crucial element in the insulation and
                    sealing system of sandwich panels, enhancing the
                    effectiveness and performance of the structure and aiding in
                    energy conservation and temperature control inside the
                    building.
                    <br />
                    Flashings can be prefabricated and installed on the panels
                    or installed separately. The design and size of flashings
                    vary depending on the type and dimensions of the panels and
                    the requirements of the structure.
                  </p>
                )}
                {selectedFormingProduct === "purlins" && (
                  <p className="text-slate-500 text-[16px] w-full md:w-1/2">
                    Purlins in a sandwich panel system are elements used to
                    create the primary structure of the roof or the support
                    system for the sandwich panels. Purlins are typically
                    positioned horizontally and serve as key components in the
                    placement and support of sandwich panels.
                    <br />
                    The main functions of purlins in a sandwich panel system
                    involve two important roles. Firstly, they act as the main
                    structural framework for the roof, transferring the loads
                    generated by the weight of the sandwich panels and other
                    loads to the main structure of the building, such as columns
                    and walls. Secondly, purlins serve as the primary
                    connections for installing the sandwich panels. The sandwich
                    panels are usually fastened to the purlins using screws or
                    other types of connections to secure them in place during
                    installation.
                    <br />
                    The structural materials used for purlins can include light
                    steel, stainless steel, wood, or composite materials. The
                    size, shape, and type of purlins depend on the structural
                    requirements and the sandwich panel system design, and are
                    determined based on the specific design and specifications
                    of the structure.
                  </p>
                )}
                {selectedFormingProduct === "ducking_sheet" && (
                  <p className="text-slate-500 text-[16px] w-full md:w-1/2">
                    In a sandwich panel, the term “decking sheet” refers to a
                    sheet that is used as the top layer of the sandwich panel.
                    This sheet is typically a metal sheet (such as steel or
                    aluminium) that is placed as the outer layer of the sandwich
                    panel.
                    <br />
                    The primary function of the decking sheet in a sandwich
                    panel is to protect the core of the panel and provide
                    resistance against mechanical loads and external damages. In
                    addition to providing a protective cover, the decking sheet
                    can enhance the stiffness and strength of the structure and
                    protect the panel against impacts, corrosion, water and
                    moisture penetration, and other environmental factors.
                    <br />
                    The sheets used in decking sheets are often available with
                    various coatings such as paint, galvanized coating,
                    aluminium coating, etc. The choice of materials and the
                    thickness of the decking sheet depend on the structural
                    requirements and the intended environmental conditions and
                    should be selected in accordance with relevant standards and
                    construction practices.
                  </p>
                )}
                {selectedFormingProduct === "ridge_&_curve_sheets" && (
                  <p className="text-slate-500 text-[16px] w-full md:w-1/2">
                    The Ridge Curve Sheet sandwich panel is similar to other
                    sandwich panels, but with the distinction that its top and
                    bottom edges are uniquely curved. This type of panel is
                    typically used to create curved roofs or specific sections
                    of a building that require specialized design. The curved
                    design of these panels enhances the aesthetics and adds
                    extra strength to the structural components of the building.
                  </p>
                )}
                <Image
                  className="w-full md:w-1/2"
                  src={`/Roofing/forming/${selectedFormingProduct}.png`}
                  width="252"
                  height="252"
                  alt=""
                />
                {/* </div> */}
              </div>
            </div>
          </div>
        )}

        {/* Natural Slate Container */}
        {selectedProduct === "natural_slate_tiles" && (
          <div className="p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 sticky top-[200px] z-[21] bg-white">
            {/* Header */}
            <div className="flex flex-col mb-[30px] gap-[20px]">
              <div className="flex flex-wrap items-center gap-[15px] justify-between">
                <h3 className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                Natural Slate Tiles
                </h3>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href="https://wa.me/97337778311?text=I%27m+interested+in+Natural+Slate+Tiles"
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
                      Download Brochure
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-slate-500 text-[16px]">
                Modular building material with three layers: two outer for
                structure and weather resistance, and a core for thermal and
                acoustic insulation. Ideal for roofs, facades, and cold storage,
                they provide excellent insulation, structural strength, and are
                lightweight for easy installation. Available in customizable
                thicknesses and sizes, they offer energy efficiency and quick
                installation.
              </p>
            </div>

            {/* Main */}
            <div>
              {/* Images */}
              <div className="grid grid-cols-2 items-center gap-[15px] justify-items-center justify-center mt-[40px] sm:w-[500px] lg:w-full sm:m-auto lg:m-0 lg:mt-[40px] lg:ml-[40px]">
                <Image
                  className="w-full col-span-2 lg:col-span-1 lg:row-span-2 h-auto "
                  src={`/Roofing/natural_slate_tiles/image1.png`}
                  width="350"
                  height="350"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/natural_slate_tiles/image2.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/natural_slate_tiles/image3.png`}
                  width="250"
                  height="250"
                  alt=""
                />

                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/natural_slate_tiles/image4.png`}
                  width="250"
                  height="250"
                  alt=""
                />

                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/natural_slate_tiles/image5.png`}
                  width="250"
                  height="250"
                  alt=""
                />

                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/natural_slate_tiles/image6.png`}
                  width="250"
                  height="250"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}

        {/* Bitumen Shingle Container */}
        {selectedProduct === "bitumen_shingle" && (
          <div className="p-[20px] md:p-[30px] lg:p-[50px] w-full rounded-xl border border-zinc-300 sticky top-[200px] z-[21] bg-white">
            {/* Header */}
            <div className="flex flex-col mb-[30px] gap-[20px]">
              <div className="flex flex-wrap items-center gap-[15px] justify-between">
                <h3 className="text-slate-900 text-[22px] lg:text-[31px] font-semibold ">
                Bitumen Shingle
                </h3>
                <div className="  rounded-lg justify-start items-start flex flex-wrap gap-[15px]">
                  <a
                    href="https://wa.me/97337778311?text=I%27m+interested+in+Bitumen+Shingle"
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
                      Download Brochure
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-slate-500 text-[16px]">
              Roofing shingles are the construction material for residential roofing application that is used on roof slopes of 12° or greater. It is the smartest solution for complex or intricate roof design. Bitumen shingles do not fade; they are resistant to harmful environmental impacts, decay, corrosion, fire damage, and, what is very important, they perform well in extreme temperatures. Roofing shingles by TECHNOLOGIES Corporation are available in a wide variety of original patterns and elegant colors.
              </p>
            </div>

            {/* Main */}
            <div>
              {/* Images */}
              <div className="grid grid-cols-2 items-center gap-[15px] justify-items-center justify-center mt-[40px] sm:w-[500px] lg:w-full sm:m-auto lg:m-0 lg:mt-[40px] lg:ml-[40px]">
                <Image
                  className="w-full col-span-2 lg:col-span-1 lg:row-span-2 h-auto "
                  src={`/Roofing/bitumen_shingle/image1.png`}
                  width="350"
                  height="350"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image2.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image3.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image4.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image5.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image6.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image7.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image8.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image9.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image10.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image11.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image12.png`}
                  width="250"
                  height="250"
                  alt=""
                />
                <Image
                  className="w-full h-full md:w-[100%] lg:w-[250px] "
                  src={`/Roofing/bitumen_shingle/image13.png`}
                  width="250"
                  height="250"
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
