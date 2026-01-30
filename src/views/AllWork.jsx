import { Icon } from "@iconify/react";
import { useState } from "react";

const AllWOrk = () =>{
   
    const projects = [
        {
         name : "Futuer wellness",
         video : "/videos/video1.mp4",
         category : "Real State",

      },
       {
         name : "Pathways Centre",
         category : "shorts/Reels",
          video : "/videos/video2.mp4",
      },
       {
         name : "Teen Thursday",
         category : "shorts/Reels",
          video : "/videos/video3.mp4",
      },
       {
         name : "The Lifestyle Equivalent of Swallowing Batteries",
         category : "Real Estate",
          video : "/videos/video1.mp4",
         
      },
       {
         name : "HSA Account",
         category : "Youtube Videos",
          video : "/videos/video2.mp4",
         
      },
       {
         name : "Brazil Tour Guide",
         category : "Meta Ads",
          video : "/videos/video3.mp4",
         
      }
    ];

     const[displayProject, setDisplayProject] = useState(projects);

     const handleFiltered = (category) =>{
        if(category === "All"){
             setDisplayProject(projects);
        }else{
            setDisplayProject(()=>(
                 projects.filter((i)=>(
                    i.category === category
                 )) 
            ))
        }
     }
    return(
        <>
        <section className="bg-[#111111] py-10 font-outfit">
            <div className="lg:ml-64">
                <div className="custom_container">
                    <div className=" border border-gray-300  shadow-[#111111cc] shadow-lg rounded-full mx-auto py-1.5 text-center text-white font-syne px-3 w-36 flex items-center">
                        <Icon icon="material-symbols:star-shine-outline-rounded" width="24" height="24" className="mr-2 text-[#d21a1a]" />
                        <h5 className="text-sm">My Portfolio</h5>
                   </div>
                   <div className=" text-center">
                     <h2 className="md:text-5xl text-3xl font-syne capitalize font-bold my-3 text-[#d21a1a]">My Work</h2> 
                     <p className="font-outfit lg:text-xl  md:text-lg text-sm md:w-[60%] sm:w-[80%] w-full  text-gray-400 mx-auto  ">Explore my collection of video editing projects across various categories</p>
                   </div>
                   <div className="mt-2 py-10">
                     <div className="flex flex-wrap md:gap-4 gap-2">
                          <button className="bg-[#222222] px-3 py-1 rounded-full border border-gray-400 text-gray-400 text-sm"
                          onClick={()=>{
                            setDisplayProject(projects)
                          }}>All</button>
                          <button  className="bg-[#222222] px-3 py-1 rounded-full border border-gray-400 text-gray-400 text-sm" 
                          onClick={()=>{
                            handleFiltered("shorts/Reels");
                          }}>Shorts/Reels</button>
                          <button  className="bg-[#222222] px-3 py-1 rounded-full border border-gray-400 text-gray-400 text-sm"   onClick={()=>{
                            handleFiltered("Youtube Videos")}}> Youtube Videos</button>
                          <button  className="bg-[#222222] px-3 py-1 rounded-full border border-gray-400 text-gray-400 text-sm " onClick={()=>{
                            handleFiltered("Meta Ads");
                          }}
                           >Meta Ads</button>
                          <button  className="bg-[#222222] px-3 py-1 rounded-full border border-gray-400 text-gray-400 text-sm"   onClick={()=>{
                            handleFiltered("Real Estate");
                          }}
                          >Real Estate</button>
                          <button  className="bg-[#222222] px-3 py-1 rounded-full border border-gray-400 text-gray-400 text-sm"   onClick={()=>{
                            handleFiltered("Others");
                          }}
                          >Others</button>
                     </div>
                     <div className="py-8 text-white">
                        {
                            displayProject.length > 0 ?
                            `${displayProject.length} video${displayProject.length > 1 ? "s" : ""} ${displayProject.length === projects.length? "" : `in
                                ${displayProject[0].category}` }` : "no video Found"
                        }
                     </div>
                     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 ">
                       {
                        displayProject.map((pro, index)=>(
                            <div className="h-60 w-full relative group cursor-pointer " key={index} onMouseEnter={(e)=>{
                                e.currentTarget.querySelector('video').play();
                            }}
                            onMouseLeave={(e)=>{
                                e.currentTarget.querySelector('video').pause();
                            }}>
                                 <video src={pro.video}  muted loop className="h-full w-full object-cover rounded-2xl opacity-60 "></video>
                                 <button className="absolute top-4 left-4 px-3 rounded-full bg-[#111111] text-white font-light border border-[#d21a1a]text-xs">{pro.category}</button>
                                 <div className="absolute  inset-[45%] text-white group-hover:opacity-0 transition duration-300 ease-linear">
                                    <Icon icon="mingcute:play-fill" width="34" height="34" />
                                 </div>
                                 <h5 className="absolute left-4 pr-2 bottom-4 text-white font-bold">{pro.name}</h5>
                                 <button className="absolute top-4 right-4 px-2 rounded-full flex items-center gap-1 bg-[#d21a1a] text-white font-light border border-[#d21a1a] opacity-0 group-hover:opacity-100 transition duration-500 ease-in">
                                    <Icon icon="mdi:eye-outline" width="20" height="20" />
                                    Watch
                                 </button>
                            </div>
                        ))
                       }
                     </div>
                   </div>
                </div>
            </div>
           
             
        </section>
        
        </>
    )
}
export default AllWOrk;