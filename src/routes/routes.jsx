import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import MyBookings from "../pages/MyBookings";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import LawyersDetails from "../pages/LawyersDetails";
import ErrorPage from "../pages/ErrorPage";
import Loader from "../components/Loader";


export const router = createBrowserRouter([
    {
      path:'/',
      Component:Mainlayout,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          index: '/',
          Component:Home,
          hydrateFallbackElement: <Loader></Loader>,
          loader:()=> fetch('../lawyerData.json')
        },
        {
            path:'/my-bookings',
            Component:MyBookings,
            hydrateFallbackElement:<Loader></Loader>,
            loader:()=> fetch('../lawyerData.json')
            
        },
        {
            path:'/blogs',
            Component: Blogs,
            loader: ()=> fetch('../blog.json'),
            hydrateFallbackElement: <Loader></Loader>  
        },
        {
            path:'/contact-us',
            Component:ContactUs
        },
        {
          path:'/lawyersDetails/:id',
          hydrateFallbackElement:<Loader></Loader>,
          loader:()=> fetch('../lawyerData.json'),
          Component:LawyersDetails
        }
      ]
    }
  ])