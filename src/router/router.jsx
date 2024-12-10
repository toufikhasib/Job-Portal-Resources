import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";


const router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<h1>not page</h1>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
        
    }
])

export default router;