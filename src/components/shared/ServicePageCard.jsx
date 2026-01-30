import { Icon } from "@iconify/react";

const ServicePageCard = ({card}) =>{
    return(
        <>
        <div className="bg-[#161616] md:px-6  px-4 py-6 rounded-lg mt-4 group shadow-[#d21a1a] shadow-md lg:shadow-none lg:hover:shadow-xl transition-all duration-200 flex flex-col  justify-between h-full">
           <div className=" md:flex block ">
               <div className="h-10 w-10 my-2 transition-all duration-200 group-hover:scale-110 bg-[#d21a1a] flex items-center justify-center rounded-lg  text-white">
                 {card.icon}
               </div>
               <div className="md:w-[90%] w-full md:px-3">
                  <h2 className="font-semibold text-white md:text-xl text-lg mb-2">{card.name}</h2>
                  <h3 className="text-gray-500 text-sm">{card.description}</h3>
               </div>
           </div>
           <ul className="mt-5">
             {card.list.map((li,index)=> (
              <li key={index} className="text-gray-300 mt-2 text-sm flex">
                <span className="mr-2"><Icon icon="ei:check" width="20" height="20" className="text-[#d21a1a]" /></span>
                {li}</li>
             )) }
           </ul>
           <button className="text-[#d21a1a] text-left my-4 ">{card.button}</button>
        </div>
        </>
    )
}
export default ServicePageCard;