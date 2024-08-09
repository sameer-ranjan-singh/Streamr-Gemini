import { useEffect, useRef, useState } from "react";
import { checkValidData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../store/Slices/userSlice";
import { BG_IMAGE, USER_AVATAR } from "../../utils/constants";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch()

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const toggleSign = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    // if (message) return message ;
    console.log(message)

    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("Initial-Auth-User" , user)
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          })
            .then(() => {
              // Profile updated!
              const {uid, email, displayName, photoURL} = auth.currentUser ;
              dispatch(addUser({uid: uid , email: email, displayName: displayName, photoURL: photoURL}))
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessagefb = error.message;
          setErrorMessage(message);
          console.log(errorCode + " - " + errorMessagefb);
        });
    } else {
      //signIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/D5635AQG9CaJKG3Yspg/profile-framedphoto-shrink_100_100/0/1719451336209?e=1723464000&v=beta&t=vPSeqmzdvHZyiT3riLVEaX1BENuBgl-Wx984319_fn0",
          })
            .then(() => {
              // Profile updated!
              const {uid, email, displayName, photoURL} = auth.currentUser ;
              dispatch(addUser({uid: uid , email: email, displayName: displayName, photoURL: photoURL}))
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessagefb = error.message;
          setErrorMessage(errorMessagefb);
          console.log(errorCode + " - " + errorMessagefb);
        });
    }
    console.log("message :" + message);
    setErrorMessage(message);
  };

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid , email: email, displayName: displayName, photoURL: photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    })
   
    return ()=> unsubscribe()  //unsubscribe to onAuthStateChanged callback  when the component unmount
  },[])

  return (
    <>
      <div className="">
        <div className="absolute">
          <img
            className=""
            alt="bg-theme"
            src={BG_IMAGE}
          />
        </div>
        <div>
          <Header />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-4/12 absolute p-12 bg-black  my-24 mx-auto left-0 right-0 text-white bg-opacity-90"
        >
          <h1 className="text-3xl font-bold py-4 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="my-2 p-4 w-full bg-neutral-900 text-neutral-400 border border-neutral-400 rounded-md"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="my-2 p-4 w-full bg-neutral-900 text-neutral-400 border border-neutral-400 rounded-md"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="my-2 p-4 w-full bg-neutral-900 text-neutral-400 border border-neutral-400 rounded-md "
            />

            <p className="text-red-700 font-bold  my-2">{errorMessage}</p>

            <button
              onClick={handleButtonClick}
              className=" bg-red-700  p-2 rounded-md  font-bold  w-full"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            {isSignInForm ? (
              <>
                <h1 className=" m-4 text-xl text-neutral-400 text-center">
                  OR
                </h1>
                <button className=" mx-2 mt-2 p-2 w-full bg-stone-700  bg-opacity-80 text-bold rounded-md font-bold ">
                  Use a sign-in code
                </button>
              </>
            ) : null}
            <Link className="m-2">
              <h1 className="text-center hover:underline font-semibold">
                Forgot password ?
              </h1>
            </Link>
          </div>
          <div>
            <input type="checkbox" className="mx-2 size-4" />
            <label className=" ">Remember me ?</label>
          </div>
          {isSignInForm ? (
            <h1 className="mx-2 my-4">
              New to Netflix?
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={toggleSign}
              >
                {" "}
                Sign Up Now !
              </span>
            </h1>
          ) : (
            <h1 className="mx-2 my-4">
              Already have an account?
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={toggleSign}
              >
                {" "}
                Login !
              </span>
            </h1>
          )}
        </form>
      </div>
    </>
  );
}

export default Login;

/*
<form className="absolute text-white bg-black w-4/12 h-full mt-20  mx-auto left-0 right-0 flex flex-col justify-center items-center bg-opacity-80">
    <input type="text" placeholder="Email" className="m-2 p-4 rounded-sm w-8/12 bg-neutral-900 text-neutral-400 border border-neutral-400" />
    <input type="password" placeholder="Password" className="m-2 p-4 rounded-sm w-8/12 bg-neutral-900 text-neutral-400 border border-neutral-400" />
    <button className="inset bg-red-600  p-2 rounded-md  font-bold font-serif w-8/12 ">Sign In</button>
    <span className=" m-4 text-xl text-neutral-400">OR</span> 
    <button className=" bg-stone-700  bg-opacity-60 text-bold p-2 rounded-md font-bold w-8/12 ">Use a sign-in code</button>
    <Link className="m-2">Forgot password ?</Link>

    <input type="checkbox" className=""/>
    <label className=" ">Remember me ?</label>
</form>
*/

// import React from "react";
// import Header from "./Header";

// function Login() {
//   return (
//     <>
//       {/* Background image container */}
//       <div className="relative h-screen overflow-hidden">
//         <img
//           className="absolute inset-0 object-cover w-full h-full z-0"
//           alt="bg-theme"
//           src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg"
//         />

//         {/* Form container */}
//         <form className="absolute top-1/2 left-1/2 transform translate-y-[-50%] translate-x-[-50%] bg-black w-4/12 p-8 rounded-md shadow-md flex flex-col justify-center items-center">
//           <input
//             type="text"
//             placeholder="Email"
//             className="m-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="m-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
//           />
//           <button className="bg-red-600 p-2 rounded-md font-bold font-serif w-full text-white hover:bg-red-700">
//             Sign In
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;
