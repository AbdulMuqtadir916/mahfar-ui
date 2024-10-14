import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductsAndServices() {
  return (
    <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] pt-28 w-full pb-[49px] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-[117px] gap-[30px]">
        <Link
          href="/products"
          className="group cursor-pointer w-auto lg:h-[270px] flex-col justify-start items-start gap-3 inline-flex"
        >
          <div className="leading-[46px]">
            <span className="text-zinc-800 text-[42px] font-normal ">
              Our Extensive <br />
            </span>
            <span className="text-green-500 text-[42px] font-semibold ">
              Product Range
            </span>
          </div>
          <div className="justify-start items-center gap-1 inline-flex  group-hover:gap-4 group-hover:duration-700 duration-700 group-hover:ease-in-out cursor-pointer">
            <div className="ViewAll text-cyan-500 text-[22px]  ">View All</div>
            <div className="w-[42px] h-[42px] relative ">
              <Image
                alt="arrow"
                src="/icon-arrow-narrow-right.svg"
                height={42}
                width={42}
              ></Image>
            </div>
          </div>
        </Link>
        {/* Updated product card layout */}
        {[
          { href: "/products/roofing-solution/", title: "Roofing Solution", image: "/roofSol.svg" },
          { href: "/products/composite-wood/", title: "Composite Wood", image: "/compositeWood.svg" },
          { href: "/products/thermal_acoustic_insulation-insulation", title: "Thermal and Acoustic Insulation", image: "/thermalInsulation.svg" },
          { href: "/products/water-proofing", title: "Water Proofing", image: "/waterProofing.svg" },
        ].map((product, index) => (
          <Link key={index} href={product.href} className="block">
            <div className="group h-[270px] transition duration-700 ease-in-out hover:scale-105 cursor-pointer p-3.5 rounded-xl border border-stone-300 flex flex-col justify-between">
              <div className="relative w-full h-[200px]">
                <Image
                  className="object-cover rounded-lg"
                  alt={product.title}
                  src={product.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-zinc-800 text-[22px] leading-6">{product.title}</div>
                <div className="w-[42px] h-[42px] relative">
                  <Image
                    alt="arrow"
                    src="/icon-arrow-narrow-right.svg"
                    fill
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsAndServices;
