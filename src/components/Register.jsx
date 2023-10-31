import React from "react";
import SubHeading from "./SubHeading";
import Input from "./Input";
import Password from "./Password.jsx";

function Register() {
  return (
    <div>
      <SubHeading content="Create your account" />
      <form>
        <Input placeholder="Username" />
        <Input placeholder="Email address" />
        <Password placeholder="Password" />
        <Password placeholder="Confirm Password" />
        <center>
          <button className="main" style={{width: 360, height: 60}}>Register</button>
        </center>
        <p>Already have an account?<a href=""> Login</a></p>
      </form>
    </div>
  );
}

export default Register;
