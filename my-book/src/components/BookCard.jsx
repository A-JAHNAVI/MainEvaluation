// src/components/BookCard.jsx
import React from "react";
import { useSelector } from "react-redux";

const BookCard = ({ book }) => {
  const { user } = useSelector((state) => state.auth);

  const handleAddToMyBooks = () => {
    if (!user) {
      alert("Please login to add books.");
      return;
    }
    // Add to My Books logic here
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <button onClick={handleAddToMyBooks}>Want to Read</button>
    </div>
  );
};

export default BookCard;
