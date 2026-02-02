import Hero from "../components/partials/home/Hero";
import Navbar from "../components/partials/Navbar";
import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import Counter from "../components/partials/home/Counter";
import PortfolioSection from "../components/partials/home/PortfolioSection";
import Service from "./Service";
import Testimonial from "../components/partials/home/Testimonial";

function Home() {
  const isMobile = useIsMobile(); // hook use kiya
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className=" bg-[#111111] flex min-h-screen ">
      
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <main className="flex-1 lg:ml-64">
        <div className={` flex justify-center items-center min-h-screen transition-all duration-300 ${isOpen && isMobile? "opacity-50" : "opacity-100"}`}>
        <Hero/>
       
      </div>
      <div>
        <Counter/>
        <PortfolioSection/>
        <Service/>
        <Testimonial/>
  
      </div>
      </main>
     
        {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
      
    </>
  );
}

export default Home;
