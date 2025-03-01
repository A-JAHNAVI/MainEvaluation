// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mybooks" element={<MyBooks />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
