
import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductsAndServices from './components/ProductsAndServices'
import IdeasAndInivation from './components/IdeasAndInivation'
import ConstructFuture from './components/ConstructFuture'
import BrandPatners from './components/BrandPatners'
import FeedBack from './components/FeedBack'
import ProjDelivered from './components/ProjDelivered'
import Footer from './components/Footer'
import Assistence from './components/Assistence'

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroSection />
      <ProductsAndServices />
      <IdeasAndInivation showAboutUsBtn={true}/>
      <ConstructFuture />
      <BrandPatners />
      {/* <FeedBack /> */}
      <ProjDelivered />
      <Assistence />
      {/* <Footer/> */}
    </div>
  )
}
