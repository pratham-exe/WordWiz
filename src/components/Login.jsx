import React from "react";
import SubHeading from "./SubHeading";
import Input from "./Input";
import Password from "./Password";

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
        <p>Don't have an account?<a href="#"> Sign Up</a></p>
      </form>
    </div>
  );
}

export default Login;
