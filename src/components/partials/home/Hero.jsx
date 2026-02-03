import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";


const Hero = () =>{
return(
    <section className="flex flex-col  px-4 text-center items-center gap-2 md:pt-3 py-20 text-white md:w-[90%] m-auto bg-[radial-gradient(circle_at_center,#d21a1a_-30%,#111111_50%)]   ">
        <div className="flex items-center border border-gray-300 shadow-[#111111cc] shadow-lg rounded-full py-1.5 px-4 bg-[#111111] text-gray-300 text-sm font-syne">
           <Icon icon="material-symbols:star-shine-outline-rounded" width="24" height="24" className="text-[#d21a1a] mr-2"/>
            Professional Video Editor
        </div>
       <h1 className=" xl:text-[80px] lg:text-[70px]  md:text-[50px] text-[38px] font-bold font-syne leading-tight">
        Crafting
        <span className="block lg:bg-linear-to-r bg-linear-to-b from-[#d21a1a] via-[#ffffffa5]  to-[#d21a1a] text-transparent bg-clip-text ">
            Visual Stories
        </span>
       </h1>
       <p className="text-gray-400 xl:text-2xl lg:text-xl text-md xl:w-[60%] sm:w-[70%] w-[85%] font-outfit">
        Transforming raw footage into captivating content that engages, inspires, and converts.
       </p>
       <div className="mt-6 flex sm:flex-row flex-col items-center gap-4 font-outfit">
           <NavLink className="bg-[#d21a1a] p-4 rounded-full text-sm hover:shadow-lg shadow-[#d21a1a] transition duration-300" to="/portfolio/allwork">Watch My Work</NavLink>
            <NavLink to="/contact" className="relative hover:shadow-none overflow-hidden bg-transparent border flex text-[#d21a1a] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#d21a1a] before:-translate-x-full   before:transition before:duration-500 before:ease-in p-3 rounded-full hover:before:translate-x-0 hover:text-white hover:border-[#d21a1a] hover:translate-y-0 "> 
            <span className="relative">Hire Me</span>
            <span className="relative ml-1.5 ">
                <Icon icon="mdi-light:arrow-right" width="24" height="24" />
            </span>
            </NavLink>
               
                   
          
       </div>
     
    </section>
   
)
}

export default Hero;
