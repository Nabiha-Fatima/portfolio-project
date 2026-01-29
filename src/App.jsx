import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import AppLayout from "./components/Layout/AppLayout";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import ServicePage from "./components/pages/ServicePage";
import AllWOrk from "./components/pages/AllWork";

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