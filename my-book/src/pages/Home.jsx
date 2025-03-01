// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/slices/booksSlice";
import BookCard from "../components/BookCard";

const Home = () => {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <h1>Books Library</h1>
      {loading ? <p>Loading...</p> : books.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
};

export default Home;
