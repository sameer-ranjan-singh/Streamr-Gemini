import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO } from "../../utils/constants";

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
          src={LOGO}
        />
      </div>
      {userInfo && (
        <div className="flex p-2">
          <img 
            src={userInfo.photoURL}
            alt="profile logo"
            className="h-12 w-12 rounded-3xl"/>
          <button onClick={handleAccessClick} className="h-12 w-16 font-bold text-red-600 border border-black">Logout</button>
        </div>
      )}
    </div>
  );
};

export default Header;
