import React, { useRef } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../../helper/slices/login";
import { data } from "../../data.json";

const Login = () => {
  const dispatch = useDispatch();
  const username = useRef(null);
  const password = useRef(null);

  function handleLogin() {
    const userValue = username.current.value;
    const passValue = password.current.value;
    // console.log(data, userValue, passValue);
    const validate = data.find(
      (itm) => itm.username === userValue && itm.password === passValue
    );
    // console.log("ini validate", validate);
    if (validate) {
      dispatch(login(validate));
    }
  }

  return (
    <>
      <div className="text-white flex h-screen justify-center items-center flex-col">
        <div className="flex flex-col gap-5 border-solid border-2 border-white p-10 rounded-md">
          <div className="font-bold text-xl flex justify-center items-center">
            Login
          </div>
          <div className="flex gap-2 flex-col">
            <label htmlFor="username">Username :</label>
            <input
              type="text"
              name="username"
              id=""
              className="text-black rounded-sm"
              ref={username}
            />

            <label htmlFor="password">Password :</label>
            <input
              type="password"
              name="password"
              id=""
              className="text-black rounded-sm"
              ref={password}
            />
            <div className="flex justify-center items-center pt-8">
              <button
                className="border-solid border-2 border-white py-1 px-5 rounded-md hover:bg-white hover:text-[#1A202C] hover:font-semibold"
                type="submnit"
                onClick={handleLogin}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
