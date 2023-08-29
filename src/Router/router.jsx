
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home";
import Skill from "../Components/Skill";
import About from "../Components/About";

    const router = createBrowserRouter([
        {
          path: "/",
          element:<Main></Main>,
        //   errorElement: <ErrorPage />,
          children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "/about",
              element: <About></About>,
            },
            {
              path: "/skills",
              element: <Skill></Skill>,
            },
          ],
        },
      ]);


export default router;