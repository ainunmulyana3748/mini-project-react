import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return <div>{children || <Outlet />}</div>;
};

export default ProtectedRoute;
