import React from "react";
import Scorecard from "./Scorecard";
import { useLocation, Outlet, Link } from "react-router-dom";

function User() {

  const location = useLocation();
  const name = location.state.id;
  const name1 = location.state;
  const greeting = new Date().getHours();
  var content;
  if (greeting < 10) {
    content = "Good Morning";
  } else if (greeting < 17) {
    content = "Good Afternoon";
  } else {
    content = "Good Evening";
  }

  function reloadPage() {
    var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
    var now = Date.now();
    var tenSec = 10 * 1000;
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) {
      document.location.reload();
    } else {}
  }

  reloadPage();

  return (
    <div>
      <h2 className="welcome">{content} {name || name1}</h2>
      <Scorecard />
      <div className="user">
        <button style={{width: 200, height: 100}}><Link to="/Game" state={name || name1}>Play</Link></button>
        <button style={{width: 200, height: 100, marginLeft: 70}}><Link to="/">Home</Link></button>
      </div>
      <Outlet />
    </div>
  );
}

export default User;
