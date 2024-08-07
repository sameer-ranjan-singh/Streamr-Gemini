import { createBrowserRouter,RouterProvider } from "react-router-dom";
<<<<<<< HEAD:src/features/Body.js
import Login from "./login/Login";
import Browse from "./browse/Browse";

const Body = () => {
  
=======
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

>>>>>>> 1a85e2b1692649326374e2cb5a0a7b759a8017a7:src/components/Body.js
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

<<<<<<< HEAD:src/features/Body.js
=======
    useEffect(()=> {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid , email: email, displayName: displayName, photoURL: photoURL}))

          // ...
        } else {
          // User is signed out
          dispatch(removeUser())

        }
      });
    })
>>>>>>> 1a85e2b1692649326374e2cb5a0a7b759a8017a7:src/components/Body.js
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
};
export default Body;
