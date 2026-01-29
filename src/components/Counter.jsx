
const Counter = () =>{
    const counter = [
        {
            name: "150+",
            description : "Projects Done"
        },
        {
           name: "50+",
            description : "Happy Clients"  
        },
        {
           name: "50M+",
            description : "Views Generated"  
        },
        {
           name: "50+",
            description : "Satisfaction"  
        }
    ]
    return(
        <>
        <section className=" shadow-[0px_0px_10px_#d21a1a] w-full py-8 px-6 font-outfit">
           <div className="grid grid-cols-2 md:grid-cols-4 ">
            {
                counter.map((item)=>(
                    <div className="flex flex-col mt-4  items-center text-[#d21a1a] justify-center text-xl sm:text-3xl font-bold ">
                        {item.name}
                        <span className="text-sm font-medium text-gray-300">
                            {item.description}
                        </span>
                    </div>
                ))
            }
            
           </div>
        </section>
        </>
    )
}

export default Counter;