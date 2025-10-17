import { createBrowserRouter } from "react-router";
import Root from "../Component/Root/Root";
import AboutUs from "../pages/AboutUs";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";


const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   children:[
    {
        path: "about",
        Component: AboutUs
    },
    {
      path:'/',
      Component: Homepage,
    },
    {
      path: '/profile',
      Component: Profile,
    },
    {
      path: '/signin',
      Component: Signin,
    },
    {
      path: '/signup',
      Component: Signup,
    }
   ]
  },
]);

export default router;