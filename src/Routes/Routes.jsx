import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    //  errorElement: <Error/>,
        children: [
      { path: "/", element: <Home/> },

    
    ],
  },
]);