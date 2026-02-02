import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import { NavLink } from "react-router-dom";

 const PortfolioSection = () =>{
     const [currIndex, setCurrIndex] = useState(0);
     const cards = [
        {
            link : "https://www.w3schools.com/html/movie.mp4"
        },
           {
            link : "https://www.w3schools.com/html/mov_bbb.mp4"
        },
           {
            link : "https://www.w3schools.com/html/mov_bbb.mp4"
        },
         {
            link : "https://www.w3schools.com/html/movie.mp4"
        }
        
    ];
    const cardWidth = window.innerWidth >= 768 ? 320 : 240 ;
    const visibleCards = Math.floor(window.innerWidth / cardWidth);
    const maxIndex = cards.length - visibleCards;
     return(
        <>
          <div className="custom_container  ">
                <div className="sm:flex sm:justify-between items-end py-10 ">
                    <div className="mb-2 sm:mb-0">
                    <h4 className="custom_red font-outfit mb-2">Portfolio</h4>
                    <h2 className="text-white sm:text-3xl text-xl font-syne font-bold">
                        Featured Work
                    </h2>
                   </div>
                <div className="flex items-center gap-1 text-gray-400 font-outfit hover:text-[#d21a1a] transition duration-300">
                    <NavLink to="/portfolio/allwork" className="">
                    View All Projects
                    
                </NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="flex flex-row  transition-transform duration-300" style=   {{transform: `translateX(-${currIndex *  cardWidth}px)`}}>
                    {
                      cards.map((card, index)=>(
                        <PortfolioCard card={card} key={index}/>
                        ))
                    }
                                
                </div>
            </div>
           
            <div className="my-2 flex items-center justify-center gap-4 ">
                <button className=" slider_btn  cursor-pointer" onClick={() => {
                    const maxIndex = cards.length - 1;
                    if(currIndex === 0){
                        setCurrIndex(maxIndex);
                    }
                    else{
                       setCurrIndex(currIndex - 1);
                    }
                        
                   
                }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
                    </svg>
                </button>

                <button className="slider_btn cursor-pointer" onClick={()=>{
                      const maxIndex = cards.length - 1;
                     if (currIndex === maxIndex){
                        setCurrIndex(0);
                     }else{
                        setCurrIndex(currIndex + 1);
                     } 
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                </button>
            </div>
           
            
          </div>
          
        </>
    )
 }

export default PortfolioSection;
