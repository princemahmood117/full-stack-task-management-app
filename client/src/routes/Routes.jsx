import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Reviews from "../Pages/Reviews";
import Menu from "../Pages/Menu";
import MenuDetails from "../Pages/MenuDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Pages/PrivateRoute";
import Contact from "../Pages/Contact";
import MyOrder from "../Pages/MyOrder";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: '/',
            element : <Home></Home>
        },
        {
            path: '/reviews',
            element : <Reviews></Reviews>
        },
        {
            path: '/menu',
            element : <Menu></Menu>
        },
        {
            path: '/login',
            element : <Login></Login>
        },
        {
            path: '/register',
            element : <Register></Register>
        },
        {
            path: '/contact',
            element : <Contact></Contact>
        },
        {
            path: '/my-order',
            element : <MyOrder></MyOrder>
        },
        {
            path: '/menu/:id',
            element : <PrivateRoute><MenuDetails></MenuDetails></PrivateRoute>,
            loader : ({params})=> fetch(`${import.meta.env.VITE_URL}/menu/${params.id}`)
        },
      ]
    },
  ]);