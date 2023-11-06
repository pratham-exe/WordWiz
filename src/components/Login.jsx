import React from "react";
import SubHeading from "./SubHeading";
import Input from "./Input";
import Password from "./Password";
import { Outlet, Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <SubHeading content="Welcome Back" />
      <form>
        <Input placeholder="Username" />
        <Password placeholder="Password" />
        <a href="" style={{marginLeft: 533}}>Forgot Password?</a>
        <center>
          <button className="main" style={{width: 360, height: 60}}>Login</button>
        </center>
        <p>Don't have an account?<Link to="/Register"> Sign Up</Link></p>
      </form>
      <Outlet />
    </div>
  );
}

export default Login;
