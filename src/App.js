import React, { useState, useEffect } from "react";
import BooksList from "./components/BooksList";
import BookmarksSection from "./components/BookmarksSection";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [activeTab, setActiveTab] = useState("books");
  const [searchTerm, setSearchTerm] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "bookmarks") {
      setSearchTerm(""); // Clear search term when switching to bookmarks
    }
  };

  // Fetch books from API
  useEffect(() => {
    if (searchTerm.trim()) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          searchTerm
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.items) {
            setBooks(data.items.map((item) => item.volumeInfo));
          } else {
            setBooks([]); // If no results, clear the books list
          }
        })
        .catch((error) => console.error("Error fetching books:", error));
    } else {
      setBooks([]); // Clear books if the search term is empty
    }
  }, [searchTerm]);

  // Toggle bookmark functionality
  const toggleBookmark = (book) => {
    setBookmarks((prev) =>
      prev.find((b) => b.title === book.title)
        ? prev.filter((b) => b.title !== book.title)
        : [...prev, book]
    );
  };

  // Remove from bookmarks
  const removeFromBookmarks = (bookTitle) => {
    setBookmarks((prev) => prev.filter((b) => b.title !== bookTitle));
  };

  // Filter books by search term
  const filteredBooks = books.filter((book) =>
    book.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBookmarks = bookmarks.filter((book) =>
    book.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>React Books App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="tabs">
        <button
          className={activeTab === "books" ? "active" : ""}
          onClick={() => handleTabChange("books")}
        >
          Books
        </button>
        <button
          className={activeTab === "bookmarks" ? "active" : ""}
          onClick={() => handleTabChange("bookmarks")}
        >
          Bookmarks
        </button>
      </div>
      {activeTab === "books" ? (
        <BooksList books={books} toggleBookmark={toggleBookmark} />
      ) : (
        <BookmarksSection
          bookmarks={bookmarks}
          removeFromBookmarks={removeFromBookmarks}
        />
      )}
    </div>
  );
}

export default App;
