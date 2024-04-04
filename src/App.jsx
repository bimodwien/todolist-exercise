import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./components/landing/landing";
import Login from "./components/login/login";
import { data } from "./data.json";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./helper/slices/login";

function App() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const nav = useNavigate();

  // use effect untuk ngecek apakah terjadi perubahan pada user di redux atau tidak
  useEffect(() => {
    const checkUser = localStorage.getItem("item");
    const findUser = data.find((e) => e.username === checkUser);
    if (findUser && !user.username) {
      dispatch(login(findUser));
    } else if (!user.username) {
      nav("/login");
    } else {
      nav("/");
    }
  }, [user]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </>
  );
}

export default App;
