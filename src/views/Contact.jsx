import { Icon } from "@iconify/react";
import Button from "../components/ui/Button";
const Contact = () =>{
return(
    <>
     <section className="bg-[#111111] ">
        <div className="lg:ml-64">
            <div className=" custom_container py-8">
                <div className=" border border-gray-300  shadow-[#111111cc] shadow-lg rounded-full mx-auto py-1.5 text-center text-white font-syne px-3 w-36 flex items-center">
                    <Icon icon="material-symbols:star-shine-outline-rounded" width="24" height="24" className="mr-2 text-[#d21a1a]" />
                    <h5 className="text-sm">Let's Connect</h5>
                </div>
               <div className=" text-center">
                  <h2 className="md:text-5xl text-3xl font-syne capitalize font-bold my-3 text-[#d21a1a]">Get In touch</h2> 
                  <p className="font-outfit lg:text-xl  md:text-lg text-sm md:w-[60%] sm:w-[80%] w-full  text-gray-400 mx-auto  ">Ready to bring your vision to life? Let's discuss your project and create something amazing together.</p>
               </div>
               <div className="lg:flex block gap-6 mt-6 items-baseline">
                    <div className="bg-[#111111] shadow-xl shadow-[#d21a1a68] border font-outfit border-gray-600  rounded-xl lg:px-6 py-10 px-3  lg:w-[50%] my-4">
                        <h4 className="text-white font-semibold text-xl mb-2 ">Send a Message</h4>
                        <form action="">
                            <div className=" gap-6 my-3">
                                <label htmlFor="name" className="flex flex-col w-full capitalize text-gray-500"> your Name
                                    <input type="text" className="border mt-1 border-gray-600  rounded-md h-12 p-2" id="name" placeholder="Nabiha Fatima" />
                                </label>
                               
                            
                            </div>
                            <div className="my-3">
                                 <label htmlFor="email" className="flex flex-col w-full capitalize text-gray-500"> your Email
                                    <input type="text" className="border mt-1 border-gray-600  rounded-md h-12 p-2" id="email" placeholder="Nabiha@gmail.com" />
                                </label>
                            </div>
                            <div className="my-3">
                              <label htmlFor="select_service" className="flex flex-col w-full capitalize text-gray-500 "> Service Intrested In
                                  <div className="w-full mt-1">
                                    <select name="" className="border border-gray-600 h-12 rounded-md p-2 text-white bg-[#111111] appearance-none w-full" id="select_service">
                                        <option value="" className="bg-black">Select a service</option>
                                        <option className="bg-black">
                                            Shorts/Reels Editing
                                        </option>
                                        <option className="bg-black">
                                            Youtube video Editing
                                        </option>
                                        <option className="bg-black">
                                            Commercial/Brand Editing    
                                        </option>
                                        <option className="bg-black">
                                            AI Shorts Creation    
                                        </option>
                                        <option className="bg-black">
                                            Others    
                                        </option>
                                    </select>
                                  </div>
                                </label>
                            </div>
                            <div className="my-3">
                               <label htmlFor="textarea" className="text-gray-500 ">Your Message
                                    <textarea name="" id="textarea" rows={5} className="w-full border text-gra border-gray-600 resize-none rounded-lg mt-1 p-2"></textarea>
                                </label>
                            </div> 
                         <Button className="mt-4 text-white rounded-lg w-full">
                            Send Message
                         </Button>
                        </form>
                   </div>
                   <div className=" lg:w-[50%]  font-outfit my-4">
                     <div className="border border-gray-600 my-6 rounded-xl lg:px-6 px-3 py-10">
                        <h2 className="text-white font-semibold text-xl mb-2">
                           Contact Information
                        </h2>
                        <div className="flex mt-4 items-center">
                            <div className="bg-[#3f3131c0] mr-2 w-8 h-8 rounded flex items-center justify-center ">
                             <Icon icon="uil:envelope" width="24" height="24" className="text-[#d21a1a]"/>
                            </div>
                            
                            <div className="leading-5 ">
                                <h4 className="text-gray-500">
                                    Email
                                </h4>
                                <h6 className="text-white">
                                    <a href="contact@example.com">contact@example.com</a>
                                </h6>
                            </div>
                       </div>
                         <div className="flex mt-4 items-center">
                            <div className="bg-[#3f3131c0] mr-2 w-8 h-8 rounded flex items-center justify-center">
                             <Icon icon="ic:sharp-phone" width="24" height="24"  className="text-[#d21a1a]"/>
                            </div>
                            
                            <div className="leading-5 ">
                                <h4 className="text-gray-500">
                                    Phone
                                </h4>
                                <h6 className="text-white">
                                    <a href="+1 (234) 567-890">+1 (234) 567-890</a>
                                </h6>
                            </div>
                       </div>
                        <div className="flex mt-4 items-center">
                            <div className="bg-[#3f3131c0] mr-2 w-8 h-8 rounded flex items-center justify-center">
                             
                             <Icon icon="mdi:clock-outline" width="24" height="24" className="text-[#d21a1a]" />
                            </div>
                            
                            <div className="leading-5 ">
                                <h4 className="text-gray-500">
                                    Response Time
                                </h4>
                                <h6 className="text-white">
                                    Within 24 hours
                                </h6>
                            </div>
                       </div>
                       <div className="flex mt-4 items-center">
                            <div className="bg-[#3f3131c0] mr-2 w-8 h-8 rounded flex items-center justify-center">
                             <Icon icon="proicons:location" width="24" height="24" className="text-[#d21a1a]"/>
                            </div>
                            
                            <div className="leading-5 ">
                                <h4 className="text-gray-500">
                                    Location
                                </h4>
                                <h6 className="text-white">
                                    Available Worldwide
                                </h6>
                            </div>
                       </div>
                     </div>
                   
                     <div className=" border border-gray-600 lg:px-6 px-3 py-10 rounded-xl my-6">
                       <div className="flex items-center">
                         <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                           <h5 className="text-white ">Curently Available</h5>
                       </div>
                       <p className="text-gray-500">
                        I'm taking on new projects! Let's create something amazing together.
                       </p>
                    </div>
                     
                      
                        
                        
                        
                  </div>
            </div>
                


           </div>
        </div>
        
     </section>
     
    </>
)
}
export default Contact;