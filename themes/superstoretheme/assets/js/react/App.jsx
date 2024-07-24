import React from "react";
import { useState } from "react";

function App() {
  const [selectedPostName, setSelectedPostName] = useState("Syringe");
  return (
   <div className="container mb-5 mt-5">
      <h1>{ selectedPostName }</h1>
  </div>
  );
}

export default App;
