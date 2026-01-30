
const PortfolioCard = ({card}) =>{
    return(
        <>
        <div className="flex shrink-0 ">
            
               <div className="mx-2" >
                    <video src={card.link} muted autoPlay loop className="w-80 h-48 md:h-60  object-cover rounded-xl " ></video>

                </div>
   
          
  

       
        </div>
      
      
        </>
    )
}
export default PortfolioCard;