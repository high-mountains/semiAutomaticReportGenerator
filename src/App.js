import React, { lazy, useEffect } from "react";
import _ from "lodash";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { themeChange } from "theme-change";
import checkAuth from "./app/auth";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Register = lazy(() => import("./pages/Register"));
const Test = lazy(() => import("./pages/Test.jsx"))


checkAuth();

function App() {
  const token = localStorage.getItem('token')

  const PUBLIC_ROUTES = [
    "login",
    "forgot-password",
    "register",
    "documentation",
  ];
  const isPublicPage = PUBLIC_ROUTES.some((r) =>
    window.location.href.includes(r)
  );
  
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />

          {/* Place new routes over this */}
          <Route path="/*" element={<Layout />} />
          <Route path="test" element={<Test />} />

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