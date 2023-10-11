import React from "react";
import "./App.css";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
}

export default App;
