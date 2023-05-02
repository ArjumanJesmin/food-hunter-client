/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main";
import Header from "../Shared/Header/Header";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
          path: '/',
          element: <Header />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/blog',
          element: <Blog />
        },

      ]
    },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },

]);

export default router;