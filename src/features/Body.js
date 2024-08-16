import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./login/Login";
import Browse from "./browse/Browse";
import ErrorBoundary from "./error/ErrorBoundary";

const Body = () => {
  
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
            errorElement: <ErrorBoundary/>
        },
        {
            path:"/login",
            element:<Login/>,
            errorElement: <ErrorBoundary/>,
        },
        {
          path:"/signup",
          element:<Login/>,
          errorElement: <ErrorBoundary/>,
        },
        {
            path:"/browse",
            element:<Browse/>,
            errorElement: <ErrorBoundary/>,
        },
    ])

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
};
export default Body;
