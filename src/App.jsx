import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import AppLayout from "./layouts/AppLayout";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import ServicePage from "./views/ServicePage";
import AllWOrk from "./views/AllWork";

const App = () =>{
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout/>,
            children:[
            {
             index : true,
            element: <Home/>,
            },
            {
            path: "portfolio",
            element: <Portfolio/>,
            children:[
                {
                index : true,
                element : <AllWOrk/>,
                },
                {
                    path: "allwork",
                    element : <AllWOrk/>
                }
              
            ]
            },
              {
            path: "service",
            element: <ServicePage/>
            },
             {
            path: "contact",
            element: <Contact/>
            },
        ],
        }
       

    ])
 return <RouterProvider router={router}/>;

 
}
export default App;