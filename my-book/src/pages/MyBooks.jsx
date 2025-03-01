// src/pages/MyBooks.jsx
import React from "react";
import { useSelector } from "react-redux";
import MyBookCard from "../components/MyBookCard";

const MyBooks = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>My Books</h1>
      {user?.myBooks?.length > 0 ? user.myBooks.map((book) => <MyBookCard key={book.id} book={book} />) : <p>No books added yet.</p>}
    </div>
  );
};

export default MyBooks;
