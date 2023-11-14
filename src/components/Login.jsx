import React, { useState } from "react";
import SubHeading from "./SubHeading";
import axios from "axios";
import { useNavigate, Outlet, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function submitLogin(event) {
    event.preventDefault();
    
    try {
      await axios.post("http://localhost:8000/Login", {
        name, password
      })
      .then(res => {
        if (res.data === "Exist") {
          history("/User", {state: {id: name}})
        }
        else if (res.data === "Does-not-Exist") {
          alert("User not registered.");
        }
      })
      .catch(event => {
        alert("Wrong details.");
        console.log(event);
      })
    }
    catch(event) {
      console.log(event);
    }
  }

  function updateName(event) {
    const currentName = event.target.value;
    setName(currentName);
  }

  function updatePassword(event) {
    const currentPassword = event.target.value;
    setPassword(currentPassword);
  }

  return (
    <div>
      <SubHeading content="Welcome Back" />
      <form>
        <input style={{marginLeft: 530}} onChange={updateName} type="text" placeholder="Username" value={name} required />
        <input style={{marginLeft: 530}} onChange={updatePassword} type="password" placeholder="Password" value={password} required />
        <a href="" style={{marginLeft: 533}}>Forgot Password?</a>
        <center>
          <button className="main" style={{width: 360, height: 60}} onClick={submitLogin}>Login</button>
        </center>
        <p>Don't have an account?<Link to="/Register"> Sign Up</Link></p>
      </form>
      <Outlet />
    </div>
  ); }

export default Login;
