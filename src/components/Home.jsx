import React from "react";
import SubHeading from "./SubHeading";

function Home() {
  return (
    <div>
      <SubHeading content="Welcome to WordWiz" />
      <center>
        <button className="main">Login</button>
        <button className="main">Register</button>
      </center>
    </div>
  );
}

export default Home;
