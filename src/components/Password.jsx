import React, { useState } from "react";

function Password(props) {

  const [password, setPassword] = useState("");

  function updatePassword(event) {
    const currentPassword = event.target.value;
    setPassword(currentPassword);
  }

  return (
    <center>
      <input type="password" placeholder={props.placeholder} value={password} onChange={updatePassword} />
    </center>
  );
}

export default Password;
