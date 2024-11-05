import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import DashBoard from "../pages/DashBoard";
import Carts from "../components/Carts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children:[
          {
            path: '/',
            element: <Carts></Carts>,
            loader: () => fetch('../products.json')
          },
          {
            path: '/category/:category',
            element: <Carts></Carts>,
            loader: () => fetch('../products.json')
          }
        ]
      },     
    ]
  },
  {
    path: '/statistics',
    element: <Statistics></Statistics>
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>
  }
]);
export default router