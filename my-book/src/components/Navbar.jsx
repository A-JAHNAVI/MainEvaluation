// src/components/Navbar.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav>
      <h2>My Library</h2>
      <div>
        <a href="/">Home</a>
        {user && <a href="/mybooks">My Books</a>}
        {!user ? <a href="/login">Login</a> : <button onClick={() => dispatch(logoutUser())}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;
