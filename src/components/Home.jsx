import React from "react";
import SubHeading from "./SubHeading";
import { Outlet, Link } from "react-router-dom";

function Home() {
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
