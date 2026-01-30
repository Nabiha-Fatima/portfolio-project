import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import { Outlet } from "react-router-dom";
const AppLayout = () =>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default AppLayout;