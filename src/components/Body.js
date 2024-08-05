import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Signup from "./Signup";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/Slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch()

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

    useEffect(()=> {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in.
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid , email: email, displayName: displayName, photoURL: photoURL}))
        } else {
          // User is signed out
          dispatch(removeUser())
        }
      });
    })
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
};
export default Body;
