import Assistence from '@/app/components/Assistence'
import HeroSec from '@/app/components/productScreen/HeroSec'
import MainFinishingMaterials from '@/app/components/productScreen/MainFinishingMaterials'
import Patners from '@/app/components/productScreen/Patners'
import Project from '@/app/components/productScreen/Project'
import React from 'react'

const RoofingCategories = ({ categories }) => {
    console.log("categories-", categories)

    return (
        <div >
            <HeroSec productName={"Finishing Materials"} productDetail={"Transform your space with our premium flooring options, designed to meet all your aesthetic and functional needs."} productImage={"/finishingMaterials.svg"} />
            {/* <Main categories={categories} /> */}
            <MainFinishingMaterials />
            {/* <Patners patner="Our Roofing Solution Partners" /> */}
            <Project />

            <Assistence />
        </div>
    )
}

export default RoofingCategories
