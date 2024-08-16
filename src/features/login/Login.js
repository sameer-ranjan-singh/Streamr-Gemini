import { useRef, useState } from "react";
import { checkValidData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/Slices/userSlice";
import { BG_IMAGE, USER_AVATAR } from "../../utils/constants";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSign = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);

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
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessagefb = error.message;
          setErrorMessage(message);
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
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessagefb = error.message;
          setErrorMessage(errorMessagefb);
        });
    }
    setErrorMessage(message);
  };

  return (
    <>
      <div className="">
        <div className="absolute">
          <img
            className="h-screen md:h-auto object-cover md:w-screen"
            alt="bg-theme"
            src={BG_IMAGE}
          />
        </div>
        <div>
          <Header />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="h-screen w-screen md:w-4/12 absolute p-4 pt-[15%] md:p-14 bg-black md:my-24 md:mx-auto left-0 right-0 text-white bg-opacity-90"
        >
          <h1 className="text-2xl md:text-3xl font-bold py-4 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="my-2 px-4 py-3 w-full bg-transparent text-neutral-400 border border-neutral-700 rounded-sm"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="my-2 px-4 py-3 w-full bg-transparent text-neutral-400 border border-neutral-700 rounded-sm"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="my-2 px-4 py-3 w-full bg-transparent text-neutral-400 border border-neutral-700 rounded-sm "
            />

            <p className="text-red-700 font-bold  my-2">{errorMessage}</p>

            <button
              onClick={handleButtonClick}
              className="bg-red-700 hover:bg-red-600 p-2 rounded-md  font-bold  w-full"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            {isSignInForm ? (
              <>
                <h1 className=" m-4 text-md md:text-xl text-neutral-400 text-center">
                  OR
                </h1>
                <button className="mt-2 p-2 w-full bg-stone-600  bg-opacity-50 text-bold rounded-sm font-bold ">
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
            <h1 className="mx-2 my-4 text-stone-500 ">
              New to Netflix?
              <span
                className="font-bold hover:underline cursor-pointer text-white"
                onClick={toggleSign}
              >
                {" "}
                Sign Up Now !
              </span>
            </h1>
          ) : (
            <h1 className="mx-2 my-4 text-stone-500">
              Already have an account?
              <span
                className="font-bold hover:underline cursor-pointer text-white"
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
