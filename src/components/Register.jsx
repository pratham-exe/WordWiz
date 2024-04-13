import React, { useState } from "react";
import SubHeading from "./SubHeading";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate, Outlet, Link } from "react-router-dom";

function Register() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function updateName(event) {
    const currentName = event.target.value;
    setName(currentName);
  }

  function updateEmail(event) {
    const currentEmail = event.target.value;
    setEmail(currentEmail);
  }

  function updatePassword(event) {
    const currentPassword = event.target.value;
    setPassword(currentPassword);
  }

  async function submitRegister(event) {
    event.preventDefault();
    
    try {
      await axios.post("http://localhost:8000/Register", {
        name, email, password
      })
      .then(res => {
        if (res.data === "Exist") {
          alert("User already exists.");
        }
        else if (res.data === "Does-not-Exist") {
          history("/User", {state: {id: name}})
        } else if (res.data === "Password-not-matching") {
          alert("Passwords do not match");
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

  return (
    <div>
      <SubHeading content="Create your account" />
      <form>
        <input style={{marginLeft: 530}} onChange={updateName} type="text" placeholder="Username" value={name} required />
        <input style={{marginLeft: 530}} onChange={updateEmail} type="email" placeholder="Email address" value={email} required />
        <input style={{marginLeft: 530}} onChange={updatePassword} type="password" placeholder="Password" value={password} required />
        <center>
          <button className="main" style={{width: 360, height: 60}} onClick={submitRegister}>Register</button>
        </center>
        <p style={{marginBottom: 85}}>Already have an account?<Link to="/Login"> Login</Link></p>
      </form>
      <Footer />
      <Outlet />
    </div>
  );
}

export default Register;
