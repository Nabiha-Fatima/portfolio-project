const  TestimonialCard = ({item}) =>{
    return(
        <>
        <div className="my-3 relative">
            <div className="bg-linear-to-t from-[#d21a1a] to-[#2a2727] rounded-lg w-22  h-25  p-2 relative   flex items-center md:mx-auto mx-0">
                    
                    <img src={item.image} alt={item.name} className="rounded-lg h-18 w-22 object-cover absolute  -right-8 hover:-translate-x-3 transition  duration-300 cursor-pointer"/>
                    
            </div>
            <div className=" text-gray-300  mt-4 bg-[#080707] py-10 px-6  flex flex-col justify-between rounded-md xl:min-h-68 md:min-h-80">
                <div>
                  <h2 className="text-[#d21a1a] font-bold font-syne">{item.name}</h2>
                  <h4 className="text-gray-400 mb-2">{item.title}</h4>
                </div>
              
                <p className="font-outfit">
                    {item.description}
                </p>
                <div className="flex mt-4 text-yellow-400">
                    <span>
                        {item.star}
                    </span>
                     <span>
                        {item.star}
                    </span>
                     <span>
                        {item.star}
                    </span>
                     <span>
                        {item.star}
                    </span>
                     <span>
                        {item.star}
                    </span>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default TestimonialCard;