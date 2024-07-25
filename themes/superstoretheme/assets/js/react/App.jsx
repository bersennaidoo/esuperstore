import React from "react";
import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Overview from "./components/Overview.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/shop/" element={<Overview />} />
      <Route path="/shop/details" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
