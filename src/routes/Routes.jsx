import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import DashBoard from "../pages/DashBoard";
import Carts from "../components/Carts";
import ErrorPage from "../components/ErrorPage";
import ProductDetails from "../components/ProductDetails";
import Blogs from "../pages/Blogs";
import BlogDetails from "../components/BlogDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/categories.json'),
        children:[
          {
            path: '/',
            element: <Carts></Carts>,
            loader: () => fetch('/products.json')
          },
          {
            path: '/category/:category',
            element: <Carts></Carts>,
            loader: () => fetch('/products.json')
            
          },
          
        ]
      }, 
      {
        path:'/product/:productId',
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('/products.json')
      },    
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
        loader: ()=> fetch('/products.json'),
        
      },  
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: ()=> fetch('/blogs.json')               
      },
      {
        path:'/blog/:blogId',
        element:<BlogDetails></BlogDetails>,
        loader: ()=> fetch('/blogs.json')
      }    
    ]
  },
  
]);
export default router