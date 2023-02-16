import React, { useContext, useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
const Login = () => {
  const navigate = useNavigate();
  const { messageHandler, message } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  let tokenhandler = sessionStorage.getItem("token");
  let id;

  const userChangeHandler = (e) => {
    setUser(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = { email: user, password };
    fetch("http://localhost:7000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        id = data.id;
        if (data.token) {
          sessionStorage.setItem("token", data.token);
        }
        messageHandler(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setTimeout(() => {
      navigate(`/welcome?${id}`);
      messageHandler("");
    }, 2000);
  };
  return (
    <div>
      <div>
        <NavLink to="/signin">SignIn</NavLink>
      </div>

      <br></br>
      <form onSubmit={formSubmitHandler}>
        <label>Email</label>
        <input type="email" onChange={userChangeHandler} required />
        <label> Password</label>
        <input type="password" onChange={passwordChangeHandler} required />
        <button>login</button>
        {message}
      </form>
    </div>
  );
};

export default Login;
