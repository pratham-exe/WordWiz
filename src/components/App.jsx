import React from "react";
import Heading from "./Heading";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Game from "./Game";
import User from "./User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Heading />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Game" element={<Game />} />
          <Route path="User" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
