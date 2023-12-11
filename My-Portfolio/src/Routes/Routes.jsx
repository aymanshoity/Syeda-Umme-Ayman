import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import AboutMe from "../Components/Home/Contetnts/AboutMe";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {path: "/",element: <Home></Home>,},
        {path: "/about",element: <AboutMe></AboutMe>,}
      ]
    },
  ]);

export default Routes;