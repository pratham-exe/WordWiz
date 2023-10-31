import React, { useState } from "react";

function Input(props) {

  const [name, setName] = useState("");

  function updateName(event) {
    const currentName = event.target.value;
    setName(currentName);
  }

  return (
    <center>
      <input onChange={updateName} type="text" placeholder={props.placeholder} value={name} required />
    </center>
  );
}

export default Input;
