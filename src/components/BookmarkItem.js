import React from "react";
import BookItem from "./BookItem";

const BooksList = ({ books, toggleBookmark }) => (
  <div className="books-list">
    {books.map((book) => (
      <BookItem key={book.id} book={book} toggleBookmark={toggleBookmark} />
    ))}
  </div>
);

export default BooksList;
