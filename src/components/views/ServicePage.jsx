import { Icon } from "@iconify/react";
import ServicePageCard from "../partials/service/ServicePageCard";
import ServiceDescription from "../partials/service/ServiceDescription";
import GetStarted from "../partials/service/GetStarted";
const ServicePage = () =>{

    const serviceCards = [
       {
        icon: <Icon icon="mingcute:film-line" width="24" height="24" />,
        name: "Shorts/Reels",
        description : "Create viral short-form content that captures attention and drives massive engagement. Perfect for TikTok, Instagram Reels, and YouTube Shorts.",
        button : "Get Quote",
        icon2 : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>,
        list : ["Fast-paced dynamic editing", "Trending effects & transitions", "Music synchronization", "Text animations & captions", "Vertical format optimization"]
    },
      {
        icon: <Icon icon="ri:tv-line" width="24" height="24" />,
        name: "YouTube Videos",
        description : "Professional long-form content editing that keeps viewers hooked from start to finish. Perfect for vlogs, tutorials, podcasts, and educational content.",
        button : "Get Quote",
        icon2 : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>,
        list : ["Cinematic color grading", "Professional audio mixing", "Custom motion graphics", "B-roll integration", "Thumbnail optimization"]
    },
      {
        icon: <Icon icon="solar:clapperboard-open-outline" width="24" height="24" />,
        name: "Commercials & Brands Video",
        description : "High-impact commercial videos that tell your brand story and drive conversions. Professional editing for businesses, agencies, and product launches.",
        button : "Get Quote",
        icon2 : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>,
        list : ["Brand-aligned editing", "Professional quality output", "Multiple format delivery", "Revision support", "Quick turnaround"]
    },
      {
        icon: <Icon icon="tdesign:robot" width="24" height="24" />,
        name: "AI Shorts Creation",
        description : "Cutting-edge AI-powered video creation that combines creativity with technology for unique, scroll-stopping content that stands out.",
        button : "Get Quote",
        icon2 : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>,
        list : ["AI-enhanced effects", "Innovative transitions", "Modern aesthetics", "Trend-focused editing", "Creative storytelling"]
    }
    ]

    return(
        <>
        <section className="bg-[#111111] py-10 ">
            <div className="lg:ml-64">
               <div className="custom_container py-8">
                  <div className=" border border-gray-300  shadow-[#111111cc] shadow-lg rounded-full mx-auto py-1 text-center text-white font-syne px-2 w-34 flex items-center">
                     <Icon icon="material-symbols:star-shine-outline-rounded" width="24" height="24" className="mr-2 text-[#d21a1a]" />
                     <h5 className="text-sm">what i offer</h5>
                   </div>
                    <div className=" text-center">
                        <h2 className="md:text-5xl text-3xl font-syne capitalize font-bold my-3 text-[#d21a1a]">Services</h2> 
                       <p className="font-outfit lg:text-xl  md:text-lg text-sm md:w-[60%] sm:w-[80%] w-full  text-gray-400 mx-auto  ">Professional video editing services tailored to elevate your content and captivate your audience.</p>
                    </div>
                    <div className="font-outfit md:flex md:flex-wrap md:gap-4 mt-6 block mb-20">
                   
                       {
                        serviceCards.map((card)=>(
                            <div className="lg:w-[48%] w-full ">
                                <ServicePageCard card={card}/>
                            </div>
                        
                        ))
                     }
                   </div>   
               <ServiceDescription/>
               <GetStarted/>
              </div>
                
            </div>
         
        </section>
                
        </>
    )
}
export default ServicePage;