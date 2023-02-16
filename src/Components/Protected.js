import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const Protected = (props) => {
  var token = sessionStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <div>{props.children}</div>;
};
export default Protected;
