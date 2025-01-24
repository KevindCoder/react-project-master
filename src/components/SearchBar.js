import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm} // Controlled by the searchTerm state
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for books..."
      />
    </div>
  );
};

export default SearchBar;
