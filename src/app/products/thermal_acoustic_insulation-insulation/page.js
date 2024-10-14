import Assistence from '@/app/components/Assistence'
import HeroSec from '@/app/components/productScreen/HeroSec'
import MainThermalAcoustic from '@/app/components/productScreen/MainThermalAcoustic'
import Patners from '@/app/components/productScreen/Patners'
import Project from '@/app/components/productScreen/Project'
import React from 'react'

const RoofingCategories = ({ categories }) => {
    console.log("categories-",categories)

    return (
        <div >
            <HeroSec productName={"Thermal and Acoustic Insulation"} productDetail={"Thermal insulation involves materials and methods designed to reduce the rate of heat transfer. The primary goal is to maintain desired temperatures in buildings, industrial processes, and products, enhancing comfort and energy efficiency. Acoustic insulation is a type of soundproofing that attempts to prevent sound from entering or exiting an enclosed space by creating some a barrier between the interior and the exterior area. Energy efficiency, urbanization, acoustic comfort and vibration control, light weighting, and sustainability. Our high-performance products and solutions are delivering the value-enhancing answers markets are demanding. Answers we develop in close collaboration with our customers globally. Our Insulation enhances both the safety and tranquillity of buildings. Its ability to absorb sound and resist fire promotes a secure, serene environment, crucial for modern living and working spaces."} productImage={"/thermalInsulation.svg"} />
            {/* <Main categories={categories} /> */}
            <MainThermalAcoustic />
            {/* <Patners patner="Our Roofing Solution Partners" /> */}
            <Project />
            
            <Assistence />
        </div>
    )
}

export default RoofingCategories
