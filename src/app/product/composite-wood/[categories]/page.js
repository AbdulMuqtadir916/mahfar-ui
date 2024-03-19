import Assistence from '@/app/components/Assistence'
import HeroSec from '@/app/components/productScreen/HeroSec'
import Materials from '@/app/components/productScreen/Main'
import MainSec from '@/app/components/productScreen/MainSec'
import Patners from '@/app/components/productScreen/Patners'
import ProdNavbar from '@/app/components/productScreen/ProdNavbar'
import Project from '@/app/components/productScreen/Project'
import React from 'react'
import ProdNavBarClr from './ProdNavBarClr'

const CompositeWood = ({ categories }) => {

    // const [navColor, setNavColor] = useState(false)

    // const changeNavColor = () => {
    //     // console.log("object", window.scrollY)
    //     if (window.innerWidth >= 1024) {
    //         if (window.scrollY >= 509) {
    //             // console.log("object changed")
    //             setNavColor(true)
    //         }
    //         else {
    //             setNavColor(false)
    //         }
    //     } else {
    //         if (window.scrollY >= 374) {
    //             // console.log("object changed")
    //             setNavColor(true)
    //         }
    //         else {
    //             setNavColor(false)
    //         }
    //     }
    // }

    // window.addEventListener('scroll', changeNavColor)
    // const navBar = [
    //     { id: 1, name: "Decking", pathUrl: "decking" },
    //     { id: 2, name: "Pergola", pathUrl: "pergola" },
    //     { id: 3, name: "Fence", pathUrl: "fence" },
    //     { id: 4, name: "Facade", pathUrl: "facade" },
    //     { id: 5, name: "Hybrid", pathUrl: "hybrid" },

    // ];
    return (
        <div className=''>
            <HeroSec productName={"Composite wood"} productDetail={"Tile offers a unique elegance to any home, adding the beauty and style of Mediterranean Tile.A long-standing reputation established for its performance, longevity and versatility, Tile is an ideal alternative to traditional tile products."} productImage={"/compositeWoodHero.svg"} />
            {/* <div className={`w-[100%] px-[7vw] xl:px-[10vw] 2xl:px-[10vw] sticky top-[75.5px] lg:top-[93.9px] z-20 ${navColor ? "bg-[#344054] text-white" : "bg-white"}`}>

                <ProdNavbar navBar={navBar} navColor={navColor} />
            </div> */}
            <ProdNavBarClr/>
            {/* <Materials categories={categories} /> */}
            <MainSec />
            <Patners patner="Our Composite wood Partners" />
            <Project />
            <Assistence />
        </div>
    )
}

export default CompositeWood
