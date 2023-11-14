import React from "react";
import { useLocation, Outlet, Link } from "react-router-dom";

function User() {

  const location = useLocation();
  const name = location.state.id;
  const greeting = new Date().getHours();
  var content;
  if (greeting < 10) {
    content = "Good Morning";
  } else if (greeting < 17) {
    content = "Good Afternoon";
  } else {
    content = "Good Evening";
  }

  return (
    <div>
      <h2 className="welcome">{content} {name}</h2>
      <center>
        <button style={{width: 200, height: 100}}><Link to="/Game">Play</Link></button>
      </center>
      <Outlet />
    </div>
  );
}

export default User;
