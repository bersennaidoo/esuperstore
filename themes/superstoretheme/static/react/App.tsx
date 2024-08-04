import React, { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { items } from "./helpers/data";
import "./app.css";

function App() {
  return (
    <div>
      <Header />
      <Home items={items} />
    </div>
  )
}

export default App
