import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <AboutMe></AboutMe>,
  },
]);
