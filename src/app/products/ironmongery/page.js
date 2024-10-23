"use client"
import Assistence from '@/app/components/Assistence'
import HeroSec from '@/app/components/productScreen/HeroSec'
import Materials from '@/app/components/productScreen/Main'
import MainIronmorgery from '@/app/components/productScreen/MainIronmorgery'
import MainSec from '@/app/components/productScreen/MainSec'
import Patners from '@/app/components/productScreen/Patners'
import ProdNavbar from '@/app/components/productScreen/ProdNavbar'
import Project from '@/app/components/productScreen/Project'
import React from 'react'

const CompositeWood = ({ categories }) => {
    return (
        <div className=''>
            <HeroSec productName={"Ironmongery"} productDetail={"Upgrade your interiors with our exceptional range of door hardware, featuring handles crafted from premium materials such as steel, rosette, zinc, and aluminium. Our collection includes not only stylish and durable door handles but also robust door locks, door closer, locksets, and a wide array of essential accessories. Whether you seek the strength of steel, the decorative elegance of rosette, the versatility of zinc, or the lightweight functionality of aluminium, we have the perfect solution to meet your needs. Our products are designed to provide both aesthetic appeal and reliable performance, ensuring your doors are secure and beautifully finished. Discover the ideal combination of style and security with our comprehensive range of door hardware."} productImage={"/ironmongery.svg"} />
            {/* <div className={`w-[100%] px-[7vw] xl:px-[10vw] 2xl:px-[10vw] sticky top-[75.5px] lg:top-[93.9px] z-20 ${navColor ? "bg-[#344054] text-white" : "bg-white"}`}>

                <ProdNavbar navBar={navBar} navColor={navColor} />
            </div> */}

            {/* <Materials categories={categories} /> */}
            <MainIronmorgery />
            <Patners patner="Our Composite wood Partners" />
            <Project />
            <Assistence />
        </div>
    )
}

export default CompositeWood
