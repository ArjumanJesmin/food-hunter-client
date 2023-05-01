/* eslint-disable no-unused-vars */
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layouts/Main";
import Header from "../Shared/Header/Header";
import Login from "../Pages/Login/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Header/>
        }
      ]
    },
  ]);

  export default router;