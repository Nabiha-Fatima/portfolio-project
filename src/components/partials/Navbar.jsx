import {  useState } from "react";
import Button from "../ui/Button";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
const Navbar = ({isOpen, setIsOpen}) =>{
  
    const [hover, setHover] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return(
    <>
        <button className="lg:hidden z-50  fixed top-3 left-4  p-2 rounded
         text-white " 
         onClick={()=>{
            setIsOpen(true); }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 
            -960 960 960" width="30px" fill="#ffffff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>

        <aside className={`flex flex-col md:pt-10 pt-8  px-4 h-screen shadow-lg shadow-[#111111c9]  lg:w-70 w-64 text-white py-4 font-syne bg-black z-50  fixed top-0 left-0  ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0  transition duration-300`}>
            
            <div className="flex items-center  ">
                <span className="bg-[#D21A1A] rounded p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M170-228q-38-44-61-98T80-440h82q6 44 22 83.5t42 72.5l-56 56ZM80-520q8-60 30-114t60-98l56 56q-26 33-42 72.5T162-520H80ZM438-82q-60-6-113.5-29T226-170l56-58q35 26 73.5 43t82.5 23v80ZM284-732l-58-58q45-36 98.5-59T440-878v80q-45 6-84 23t-72 43Zm96 432v-360l280 180-280 180ZM520-82v-80q121-17 200.5-107T800-480q0-121-79.5-211T520-798v-80q154 17 257 130t103 268q0 155-103 268T520-82Z"/></svg>
                </span>
                
                <NavLink to="/" className="text-2xl">User</NavLink>
            </div>
           <button className="fixed top-3 right-4 lg:hidden z-50"           
                onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
           </button>
         
           <ul className="flex flex-col gap-3 py-3 my-4 ">
           
            <li className="relative group  ">
                <NavLink to="/" className="inline-block nav-underline">Home</NavLink>
            </li>
            <li className="relative "
             onMouseEnter={()=>{
                window.innerWidth > 1024 && setHover(true);
            }}
             onMouseLeave={()=>{
                window.innerWidth > 1024 && setHover(false);
             }}
             onClick={(e)=>{
                e.preventDefault();
                if(window.innerWidth < 1024) {
                    setIsDropDownOpen(!isDropDownOpen);
                }
             }}
             >
                <NavLink to="/portfolio" className="flex " >Portfolio 
                    <span className={`transition-transform duration-300 transform ${hover || isDropDownOpen ? "rotate-90" : "rotate-0"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            height="24px" viewBox="0 -960 960 960"
                            width="24px" fill="#434343">
                            <path d="M480-345 240-585l56-56 184 
                            183 184-183 56 56-240 240Z"/>
                      </svg>
                    </span>
                
                </NavLink>
             {<ul className={`absolute top-0 left-20  flex flex-col gap-2 p-4 z-40 bg-[#111111eb] transition-all duration-300 ease-in-out rounded ${hover || isDropDownOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"} `}>
               <li className="relative group z-10"> <NavLink to="/portfolio/allwork" className="inline-block nav-underline">All Work</NavLink></li>
               <li className="relative group z-10"><a href="" className="inline-block nav-underline">Youtube Videos</a></li>
               <li className="relative group z-10"><a href="" className="inline-block nav-underline">Shorts & Reels</a></li>
               <li className="relative group z-10"><a href="" className="inline-block nav-underline">Meta Ads</a></li>
               <li className="relative group z-10"><a href="" className="inline-block nav-underline">Real State</a></li>

             </ul>}
            </li>
            <li className="relative group"><NavLink to="/service" className=" inline-block nav-underline">Services</NavLink></li>
            <li className="relative group"><NavLink to="/contact" className=" inline-block nav-underline">Contact</NavLink></li>
            <Button className="w-26"><NavLink to="/contact">Hire Me</NavLink></Button>
         
           </ul>
         
          
            <div className="mb-4 absolute bottom-0">
                <h4 className="text-white font-syne font-semibold mb-6">Get in Touch</h4>
                 <div className="font-outfit my-4">
                    <div className="flex gap-2 ">
                        <div className="flex justify-center items-center h-8 w-8 rounded bg-[#222222] mb-2">
                         <Icon icon="bx:envelope" width="22" height="22" className=" text-gray-400" />
                        </div>
                        
                        <a href="contact@example.com" className="text-[#d21a1a]">contact@example.com </a>
                    </div>
                    
                       
                 </div>
                    <div className="flex gap-2  text-gray-300 ">
                        <div className="bg-[#222222] transition duration-300 hover:bg-[#d21a1a] flex items-center gap-3 h-10 w-10 rounded-full cursor-pointer">
                        <Icon  icon="si:youtube-line" width="20" height="20" className="mx-auto" />
                        </div>
                        <div  className="bg-[#222222] transition duration-300 hover:bg-[#d21a1a] flex items-center gap-3 h-10 w-10 rounded-full cursor-pointer">
                            <Icon icon="lets-icons:insta" width="20" height="20" className="mx-auto" />
                        </div>
                        <div className="bg-[#222222] transition duration-300 hover:bg-[#d21a1a] flex items-center gap-3 h-10 w-10 rounded-full cursor-pointer">
                            <Icon icon="mingcute:linkedin-line" width="20" height="20" className="mx-auto"/>
                            </div>
                        <div className="bg-[#222222] transition duration-300 hover:bg-[#d21a1a] flex items-center gap-3 h-10 w-10 rounded-full cursor-pointer">
                            <Icon icon="line-md:twitter" width="20" height="20" className="mx-auto"/>
                            </div>
                    
                    </div>
           </div>
         
        </aside>
    </>

    )
  
}

export default Navbar;