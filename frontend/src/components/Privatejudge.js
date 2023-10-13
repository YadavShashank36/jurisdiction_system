import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Privatejudge= () => {
  let Login = false;
  let userType="";
  let log = {};
  if (localStorage.getItem("user")) {
    log = JSON.parse(localStorage.getItem("user"));
    Login=log.login;
    userType=log.userType;
  }
  return Login && userType==='judge' ? <Outlet /> : <Navigate to="Login" />;
};

export default React.memo(Privatejudge);
