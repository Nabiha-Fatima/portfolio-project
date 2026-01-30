import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/views/Home";
import AppLayout from "./components/layouts/AppLayout";
import Portfolio from "./components/views/Portfolio";
import Contact from "./components/views/Contact";
import ServicePage from "./components/views/ServicePage";
import AllWOrk from "./components/views/AllWork";

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