import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./bookCard";
import { Link } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import "./BookSearchPage.css";

const BookSearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(
          query
        )}&limit=10`
      );
      setResults(response.data.docs);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    if (query.trim() !== "") {
      fetchBooks(query);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <i className="ri-search-eye-line" id="same"></i>
      <input
        type="text"
        placeholder="Search for a book..."
        value={query}
        onChange={handleChange}
      />
      <div className="mainDivvv">
        {results.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
      {/* <button>
        <Link to="/bookshelf">View Bookshelf</Link>
      </button> */}
    </div>
  );
};

export default BookSearchPage;
