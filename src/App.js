import React, { lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import _ from "lodash";
import { getUser } from "./features/user/userSlice";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { themeChange } from "theme-change";
import checkAuth from "./app/auth";
import initializeApp from "./app/init";
// for socket
// Importing pages
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Register = lazy(() => import("./pages/Register"));

// Initializing different libraries
initializeApp();

// Check for login and initialize axios
checkAuth();

function App() {
  // const dispatch = useDispatch();
  const token = localStorage.getItem('token')

  // useEffect(() => {
  //   if (token) {
  //     axios.defaults.headers.common["Authorization"] = token;
  //     try {
  //       dispatch(getUser());
  //     } catch (e) {
  //       window.location.href = "/login";
  //     }
  //   }
  // }, []);

  const PUBLIC_ROUTES = [
    "login",
    "forgot-password",
    "register",
    "documentation",
  ];
  const isPublicPage = PUBLIC_ROUTES.some((r) =>
    window.location.href.includes(r)
  );
  // if (!token && !isPublicPage) {
  //   delete axios.defaults.headers.common["Authorization"];
  //   window.location.href = "/login";
  // }
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);

  return (
    <>
      {/* <Socket /> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/welcome" element={<Welcome />} /> */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/documentation" element={<Documentation />} /> */}

          {/* Place new routes over this */}
          <Route path="/*" element={<Layout />} />

          {/* <Route
            path="/*"
            element={<Navigate to={token ? "/dashboard" : "/login"} replace />}
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;