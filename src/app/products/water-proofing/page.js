import Assistence from '@/app/components/Assistence'
import HeroSec from '@/app/components/productScreen/HeroSec'
import MainWaterProofing from '@/app/components/productScreen/MainWaterProofing'
import Patners from '@/app/components/productScreen/Patners'
import Project from '@/app/components/productScreen/Project'
import React from 'react'

const RoofingCategories = ({ categories }) => {
    console.log("categories-", categories)

    return (
        <div >
            <HeroSec productName={"Water Proofing"} productDetail={"Waterproofing protects structures against water infiltration which can cause expensive and irreversible damage. It is mostly invisible after construction is completed. Every day the basement of a building, or the outermost layer of a tunnel, is exposed to intense fluctuations in moisture levels and temperatures, all contributing to its deterioration. Roofers, the world over, are choosy when it comes to selecting their waterproofing products. Our product is high on their list enjoying a huge brand equity due to outstanding performance and reliability. Count on us to provide long-lasting waterproof systems to protect your project."} productImage={"/waterProofing.svg"} />
            {/* <Main categories={categories} /> */}
            <MainWaterProofing />
            {/* <Patners patner="Our Roofing Solution Partners" /> */}
            <Project />

            <Assistence />
        </div>
    )
}

export default RoofingCategories
