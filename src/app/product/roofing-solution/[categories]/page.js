import Assistence from '@/app/components/Assistence'
import HeroSec from '@/app/components/productScreen/HeroSec'
import Materials from '@/app/components/productScreen/Materials'
import Patners from '@/app/components/productScreen/Patners'
import Project from '@/app/components/productScreen/Project'
import React from 'react'

const RoofingCategories = ({ categories }) => {
    return (
        <>
            <HeroSec />
            <Materials categories={categories} />
            <Patners />
            <Project />
            <Assistence />
        </>
    )
}

export default RoofingCategories
