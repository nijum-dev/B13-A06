

import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Rating from './components/rating/Rating'
import Main from './components/main/Main'
import Toolcards from './components/toolcards/Toolcards'
import { Suspense } from 'react'
import GetStarted from './components/getstarted/GetStarted'
import PricingSection from './components/pricing/PricingSection'
import FooterSection from './components/footer/FooterSection'



const data=async()=>{

  const res=await fetch("./data.json");
  return res.json()

}

function App() {

const dataPromise= data();

  return (
   <>
   <Navbar></Navbar>
   <Banner></Banner>
   <Rating></Rating>
   <Main></Main>
   <GetStarted></GetStarted>
   <PricingSection></PricingSection>
   <FooterSection></FooterSection>
  
   </>   
  )
}
export default App
