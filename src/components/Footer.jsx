import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <center>
        <p style={{fontWeight: "bold"}}>Copyright &#9426; {currentYear}</p>
      </center>
    </div>
  );
}

export default Footer;
