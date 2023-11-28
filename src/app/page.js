import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductsAndServices from './components/ProductsAndServices'
import IdeasAndInivation from './components/IdeasAndInivation'
import ConstructFuture from './components/ConstructFuture'
import BrandPatners from './components/BrandPatners'
import FeedBack from './components/FeedBack'
import ProjDelivered from './components/ProjDelivered'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ProductsAndServices/>
      <IdeasAndInivation/>
      <ConstructFuture/>
      <BrandPatners/>
      <FeedBack/>
      <ProjDelivered/>
    </div>
  )
}
