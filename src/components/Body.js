import { createBrowserRouter,RouterProvider, useRouteError } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:,
            errorElement:,
        },
        {
            path:"/login",
            element:<Login/>,
            errorElement:,
        },
        {
            path:"/browse",
            element:<Browse/>,
            errorElement:
        },
    ])
  return (
    <>
      <div className="text-center bg-orange-400 p-2 m-2 ">
        <span>Sameer Ranjan Singh</span>
      </div>
    </>
  );
};
export default Body;
