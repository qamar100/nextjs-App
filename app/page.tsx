import Image from "next/image";
import { NavBar } from "./components/Nevbar";
import { Hero } from "./components/Hero";
import { features } from "./components/features";
import { faq } from "./components/faq";
import { pricing } from "./components/Pricing";
import { cta } from "./components/cta";
export default function Home() {
  return (
    <>
      < NavBar/>
      <Hero />
      <div className="px-[20] lg:container lg:px-20 mx-auto">
      {features()}
        
       {pricing()}
        
      {cta()}
      </div>
       
      
    </>
  );
}
