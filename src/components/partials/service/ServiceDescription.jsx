const ServiceDescription = () =>{
    const data =[
        {
         name : "Fast Turnaround",
         desc :  "24-48 hour delivery for most projects",
        },
        {
         name : "Unlimited Revisions",
         desc :  "Until you're 100% satisfied",
        },
        {
         name : "4K Quality",
         desc :  "Professional quality output",
        },
        {
         name : "24/7 Support",
         desc :  "Always here to help you",
        }
        
    ]
  return(
    <> 
      <section className=" shadow-[0px_0px_10px_#d21a1a] py-3 ">
        
           <div className="">
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-4 px-2">
                   {
                   data.map((data)=>(
                   <div className="py-3 text-center">
                        <h2 className="font-syne font-semibold text-white">{data.name}</h2>
                        <h5 className="font-outfit text-gray-500 text-sm">{data.desc}</h5>
                   </div>
            )
              
            ) 
           }
            </div>
            
         </div>
    
       

      </section>
    </>
  )
}
export default ServiceDescription;