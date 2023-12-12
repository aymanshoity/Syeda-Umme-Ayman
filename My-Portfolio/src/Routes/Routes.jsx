import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Contact from "../Components/Home/Contact/Contact";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {path: "/",element: <Home></Home>,},
        {path: "/about",element: <About></About>,},
        {path: "/contact",element: <Contact></Contact>,},
        {path: "/projects",element: <Projects></Projects>,}
      ]
    },
  ]);

export default Routes;