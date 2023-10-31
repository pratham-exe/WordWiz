import React from "react";
import SubHeading from "./SubHeading";

function User() {

  const greeting = new Date().getHours();

  return (
    <div>
      <SubHeading content={greeting < 10 ? "Good Morning" : greeting < 17 ? "Good Afternoon" : "Good Evening"}/>
      <center>
        <button style={{width: 200, height: 100}}>Play</button>
      </center>
    </div>
  );
}

export default User;
