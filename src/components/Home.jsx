import React from "react";
import SubHeading from "./SubHeading";
import Footer from "./Footer";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <SubHeading content="Welcome to WordWiz" />
      <center>
        <button className="main"><Link to="/Login" className="button-color">Login</Link></button>
        <button className="main" style={{marginBottom: 200}}><Link to="/Register" className="button-color">Register</Link></button>
      </center>
      <Footer />
      <Outlet />
    </div>
  );
}

export default Home;
