import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStar as regularStar,
} from "@fortawesome/free-solid-svg-icons";

const BookDetails = ({ book, onBookmarkToggle, isBookmarked }) => {
  return (
    <div className="book-details">
      <h3>{book.title}</h3>
      <p>{book.authors?.join(", ") || "No authors available"}</p>
      {book.imageLinks?.thumbnail && (
        <img src={book.imageLinks.thumbnail} alt={book.title} />
      )}
      <button onClick={onBookmarkToggle}>
        <FontAwesomeIcon icon={isBookmarked ? solidStar : regularStar} />{" "}
        {isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
      </button>
    </div>
  );
};

export default BookDetails;
