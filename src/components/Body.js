import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Signup from "./Signup";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
            // errorElement:
        },
        {
            path:"/login",
            element:<Login/>,
            // errorElement:
        },
        {
          path:"/signup",
          element:<Signup/>,
          // errorElement:
        },
        {
            path:"/browse",
            element:<Browse/>,
            // errorElement:
        },
    ])
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
};
export default Body;
