import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import MyBookings from "../pages/MyBookings";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import LawyersDetails from "../pages/LawyersDetails";


export const router = createBrowserRouter([
    {
      path:'/',
      Component:Mainlayout,
      children:[
        {
          index: true,
          Component:Home,
          hydrateFallbackElement: <p>loading....</p>,
          loader:()=> fetch('../lawyerData.json')
        },
        {
            path:'/my-bookings',
            Component:MyBookings
        },
        {
            path:'/blogs',
            Component: Blogs     
        },
        {
            path:'/contact-us',
            Component:ContactUs
        },
        {
          path:'/lawyersDetails/:id',
          loader:()=> fetch('../lawyerData.json'),
          Component:LawyersDetails
        }
      ]
    }
  ])