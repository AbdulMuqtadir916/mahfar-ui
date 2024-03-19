import Assistence from '@/app/components/Assistence'
import HeroSec from '@/app/components/productScreen/HeroSec'
import Main from '@/app/components/productScreen/Main'
import Patners from '@/app/components/productScreen/Patners'
import Project from '@/app/components/productScreen/Project'
import React from 'react'

const RoofingCategories = ({ categories }) => {
    console.log("categories-",categories)

    return (
        <div >
            <HeroSec productName={"Roofing Solution"} productDetail={"Tile offers a unique elegance to any home, adding the beauty and style of Mediterranean Tile.A long-standing reputation established for its performance, longevity and versatility, Tile is an ideal alternative to traditional tile products."} productImage={"/roofSol.svg"} />
            <Main categories={categories} />
            <Patners patner="Our Roofing Solution Patners" />
            <Project />
            
            <Assistence />
        </div>
    )
}

export default RoofingCategories
