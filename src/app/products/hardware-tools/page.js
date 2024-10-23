"use client"
import Assistence from '@/app/components/Assistence'
import HeroSec from '@/app/components/productScreen/HeroSec'
import Materials from '@/app/components/productScreen/Main'
import MainHardwareTools from '@/app/components/productScreen/MainHardwareTools'
import MainSec from '@/app/components/productScreen/MainSec'
import Patners from '@/app/components/productScreen/Patners'
import ProdNavbar from '@/app/components/productScreen/ProdNavbar'
import Project from '@/app/components/productScreen/Project'
import React from 'react'

const CompositeWood = ({ categories }) => {
    return (
        <div className=''>
            <HeroSec productName={"Hardware Tools"} productDetail={"We pride ourselves on offering a comprehensive range of high-quality hardware and tools to meet all your project needs. Whether you’re a professional contractor or a DIY enthusiast, our extensive inventory includes everything from power tools and hand tools to fasteners and safety equipment. Our commitment to excellence ensures that you receive reliable products at competitive prices, backed by exceptional customer service. Explore our selection today and discover why we are the preferred choice for hardware and tools."} productImage={"/hardware-tools.svg"} />
            {/* <div className={`w-[100%] px-[7vw] xl:px-[10vw] 2xl:px-[10vw] sticky top-[75.5px] lg:top-[93.9px] z-20 ${navColor ? "bg-[#344054] text-white" : "bg-white"}`}>

                <ProdNavbar navBar={navBar} navColor={navColor} />
            </div> */}

            {/* <Materials categories={categories} /> */}
            <MainHardwareTools />
            <Patners patner="Our Composite wood Partners" />
            <Project />
            <Assistence />
        </div>
    )
}

export default CompositeWood
