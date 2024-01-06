import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";

const Header = () => {

  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser);
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-black w-full z-20">
      <img
        alt="logo"
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      
      <button className="bg-[#e50914] text-white w-30 h-10 rounded p-2 mr-20" onClick={onSignOut}>Sign out</button>
    </div>
  );
};

export default Header;
