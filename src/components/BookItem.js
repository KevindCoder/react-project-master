import React from "react";

const BookItem = ({ book, toggleBookmark, isBookmarked }) => (
  <div className="book-item">
    <h3>{book.title}</h3>
    <p>{book.authors?.join(", ")}</p>
    <button onClick={() => toggleBookmark(book.id)}>
      {isBookmarked ? "★ Remove from bookmarks" : "☆ Add to bookmarks"}
    </button>
  </div>
);

export default BookItem;
