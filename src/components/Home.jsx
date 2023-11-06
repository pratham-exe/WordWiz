import React from "react";
import SubHeading from "./SubHeading";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <SubHeading content="Welcome to WordWiz" />
      <center>
        <button className="main"><Link to="/Login">Login</Link></button>
        <button className="main"><Link to="/Register">Register</Link></button>
      </center>
      <Outlet />
    </div>
  );
}

export default Home;
