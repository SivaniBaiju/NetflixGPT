import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import TextInput from "./TextInput";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMssg, setErrorMssg] = useState();

  const onClickButton = () => {
    setIsSignIn(!isSignIn);
  };

  const onSubmit = (values) => {
    const { email, password } = values;
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          setErrorMssg("");
          setIsSignIn(true);
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMssg(`${errorCode} :  ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setErrorMssg("");
          console.log(user);
          navigate('/browser');
          dispatch(addUser(user));
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMssg(`${errorCode} :  ${errorMessage}`);
        });
    }
  };

  return (
    <div className="w-full h-full">
      {/* bg image */}
      <div className="absolute bg-opacity-80 w-full h-full object-cover">
        <img
          className="h-full  w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgm"
        />
      </div>
      {/* logo */}
      <div className="absolute bg-gradient-to-b from-black w-full z-20">
        <img
          alt="logo"
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>

      <div className="abolute flex justify-around pt-20">
        <div className="z-20 w-5/12 bg-black bg-opacity-80 p-10 rounded">
          <h1 className="font-bold text-2xl text-white my-6">
            {isSignIn ? "Sign In" : "New member? Sign Up"}
          </h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              password: Yup.string().required("Password cannot be empty"),
              email: Yup.string()
                .email("Invalid email address")
                .required("email address cannot be empty"),
            })}
            onSubmit={onSubmit}
          >
            <Form>
              <TextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Email"
              />
              <TextInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="bg-[#e50914] text-white w-full p-3"
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </Form>
          </Formik>
          <div className="text-red-600">{errorMssg}</div>

          {!isSignIn ? (
            <div
              className="text-white cursor-pointer mt-4"
              onClick={onClickButton}
            >
              Go to Sign in page
            </div>
          ) : (
            <div className="text-slate-500 mt-4">
              New to Netflix?
              <span
                className="text-white cursor-pointer ml-3"
                onClick={onClickButton}
              >
                Sign up now
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
