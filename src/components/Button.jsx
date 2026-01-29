

const Button = ({children, className = "" }) =>{
 return(
   <>
    <button className={`bg-[#D21A1A]  py-4 px-6 rounded-full shadow hover:shadow-lg hover:shadow-[#d21a1ac9] transform hover:-translate-y-0.5 transition-all duration-300 ease-in ${className}`} >{children}</button>
   </>
 )
}
export default Button;