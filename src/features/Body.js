import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./login/Login";
import Browse from "./browse/Browse";

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
          element:<Login/>,
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
