import React from "react";
import BookDetails from "./BookDetails";

const BookmarksSection = ({ bookmarks, removeFromBookmarks }) => {
  return (
    <div className="bookmarks-section">
      {bookmarks.length ? (
        bookmarks.map((book, index) => (
          <BookDetails
            key={index}
            book={book}
            onBookmarkToggle={() => removeFromBookmarks(book.title)}
            isBookmarked={true}
          />
        ))
      ) : (
        <p>No bookmarks available.</p>
      )}
    </div>
  );
};

export default BookmarksSection;
