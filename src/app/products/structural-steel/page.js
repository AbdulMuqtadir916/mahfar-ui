"use client"
import Assistence from '@/app/components/Assistence'
import HeroSec from '@/app/components/productScreen/HeroSec'
import Materials from '@/app/components/productScreen/Main'
import MainStructuralSteel from '@/app/components/productScreen/MainStructuralSteel'
import Patners from '@/app/components/productScreen/Patners'
import ProdNavbar from '@/app/components/productScreen/ProdNavbar'
import Project from '@/app/components/productScreen/Project'
import React from 'react'

const CompositeWood = ({ categories }) => {
    return (
        <div className=''>
            <HeroSec productName={"Structural Steel"} productDetail={"Our structural steel products meet the highest industry standards, ensuring safety, reliability, and longevity. We source our steel from reputable manufacturers and conduct rigorous quality checks to guarantee the best performance for your projects."} productImage={"/structural-steel.svg"} />
            {/* <div className={`w-[100%] px-[7vw] xl:px-[10vw] 2xl:px-[10vw] sticky top-[75.5px] lg:top-[93.9px] z-20 ${navColor ? "bg-[#344054] text-white" : "bg-white"}`}>

                <ProdNavbar navBar={navBar} navColor={navColor} />
            </div> */}

            {/* <Materials categories={categories} /> */}
            <MainStructuralSteel/>
            <Patners patner="Our Composite wood Partners" />
            <Project />
            <Assistence />
        </div>
    )
}

export default CompositeWood
