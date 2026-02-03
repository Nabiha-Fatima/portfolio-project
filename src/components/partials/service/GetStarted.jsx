import { NavLink } from "react-router-dom";


const GetStarted = () =>{
    return(
        <>
        <section className=" border border-[#d21a1a] my-6 rounded-lg mt-10
         shadow-[0px_0px_10px_#d21a1a] px-4 py-6 text-center font-outfit">
            <h2 className=" md:text-2xl text-lg font-bold text-white font-syne">
                Ready to transform your content?
            </h2>
            <p className=" text-gray-500 my-2 mb-4">
                Let's discuss your project and create something amazing together.
            </p>
              <span className="pb-4">
                 <NavLink to="/contact" className="px-3 my-4 py-3 text-white text-sm cursor-pointer bg-[#d21a1a] rounded-full"> Get Started Today </NavLink> 

              </span>
        </section>
        </>
    )
}
export default GetStarted;