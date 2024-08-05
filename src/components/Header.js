import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate()
  const userInfo = useSelector((store)=>store.user)

  const handleAccessClick =()=> {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="absolute pl-28 py-4 bg-gradient-to-b from-black z-10  w-screen flex justify-between ">
      <div className="">
        <img
          className="w-48"
          alt="netflix logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      {userInfo && (
        <div className="flex p-2">
          <img 
            src={userInfo.photoURL}
            alt="profile logo"
            className="h-12 w-12 rounded-3xl"/>
          <button onClick={handleAccessClick} className="h-12 w-16 font-bold text-black border border-black">LogOut</button>
        </div>
      )}
    </div>
  );
};

export default Header;
