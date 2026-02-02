import TestimonialCard from "./TestimonialCard";
const testimonialData = [
    {
       image : "/images/AraOghoorian.webp",
       name : "AraOghoorian",
       title : "Financial Advisorr",
       description : "Ali was great to work with. He was responsive and did exactly what we asked of him. Highly recommend.",
        star : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>,
    },
    {
       image : "/images/Uzair.webp",
       name : "Anthony",
       title : "Marketing Consultant",
       description : "It was a really great experience working with her. She is very intelligent, excellent in communication, and extremely humble. I would love to work with her again.",
        star : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>,

    },
    {
        image : "/images/Daphne.webp",
        name : "Daphane", 
        title : "Aviation Content Specialist",
       description : "Really good work with video editing and ai content generation. Definitely recommend!",
       star : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>,
    },
     {
       image : "/images/Paulina.webp",
       name : "paulina",
       title : "Digital imaging and marketing company specialising in Google Ads",
       description: "Incredible work. On time and on budget. Great communications from Ali and did all the work for us. We surely will hire again.",
       star : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>,
    },

]
const Testimonial = () =>{
    return(
        <section className="custom_container py-10">
            <div className="font-outfit text-center my-4 md:p-6 ">
                <h5 className="text-[#d21a1a]">Testimonials</h5>
                <h2 className="font-syne text-white md:text-3xl text-2xl my-2 font-bold">
                    What Upwork Clients Say
                </h2>
                <div className="text-gray-400">
                    These reviews are taken directly from my Upwork clients.
                    <span className="text-[#d21a1a] font-semibold"> <a href="https://thebytepulse.com/">View my full Upwork profile.</a></span>
                </div>
                
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
            {
                testimonialData.map((item,index)=>(
                <TestimonialCard item={item} key={index}/>
                ))
            }
            </div>
       
       
        </section>
    )
}
export default Testimonial;