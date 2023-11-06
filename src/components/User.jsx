import React from "react";
import SubHeading from "./SubHeading";
import { Outlet, Link } from "react-router-dom";

function User() {

  const greeting = new Date().getHours();

  return (
    <div>
      <SubHeading content={greeting < 10 ? "Good Morning" : greeting < 17 ? "Good Afternoon" : "Good Evening"}/>
      <center>
        <button style={{width: 200, height: 100}}><Link to="/Game">Play</Link></button>
      </center>
      <Outlet />
    </div>
  );
}

export default User;
