'use client'

import Image from "next/image"
import Link from "next/link"

export default function Prodcut({ params }) {
    console.log(params)
    return (
        <div className="px-[7vw] xl:px-[10vw] 2xl:px-[10vw] p-12 md:pt-20 w-full pb-[59px] bg-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 ">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-[117px] gap-[30px]">
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
    )
}



