import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const {messageHandler,message}=useContext(AuthContext);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = { name, email, password };
    let id;
    fetch("http://localhost:7000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json()).then((data)=>{
        if(data.id)
        {
          id=data.id;
        }
            messageHandler(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setTimeout(() => {
      if(id)
      {
      navigate("/login");
      }
      messageHandler('');
     
    }, 2000);
  };
  return (
    <div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>

      <br />

      <form onSubmit={formSubmitHandler}>
        <label>Name</label>
        <input type="text" onChange={nameChangeHandler} required/>
        <label>Email</label>
        <input type="email" onChange={emailChangeHandler} required />
        <label> Password</label>
        <input type="password" onChange={passwordChangeHandler} required/>
        <button>Signin</button>
      </form>
      {message}
    </div>
  );
};
export default Signin;
