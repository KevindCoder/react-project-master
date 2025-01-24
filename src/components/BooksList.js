import React from "react";
import BookDetails from "./BookDetails";

const BooksList = ({ books, toggleBookmark }) => {
  return (
    <div className="books-list">
      {books.length ? (
        books.map((book, index) => (
          <BookDetails
            key={index}
            book={book}
            onBookmarkToggle={() => toggleBookmark(book)}
            isBookmarked={false}
          />
        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BooksList;
