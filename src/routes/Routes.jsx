import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import DashBoard from "../pages/DashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,       
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>
        },
        {
            path:'/dashboard',
            element:<DashBoard></DashBoard>
        }
      ]
    },
  ]);
export default router