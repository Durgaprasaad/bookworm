import React from "react";
import './BookCard.css'
import { toast } from "react-toastify";

const BookCard = ({ book }) => {
  const addToBookshelf = (book) => {
    // Get existing bookshelf from localStorage or initialize an empty array
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];

    // Check if the book is already in the bookshelf
    const isBookInBookshelf = bookshelf.some((b) => b.key === book.key);

    // If the book is not already in the bookshelf, add it
    if (!isBookInBookshelf) {
      bookshelf.push(book);
      localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
       toast.success("Book added to your bookshelf!");
    } else {
       toast.info("This book is already in your bookshelf!");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">
          <strong>Author:</strong>{" "}
          {book.author_name ? book.author_name.join(", ") : "Unknown"}
        </p>
        <p className="card-text">
          <strong>Publish Year:</strong>{" "}
          {book.publish_year ? book.publish_year.join(", ") : "Unknown"}
        </p>
        <center>
          <button
            onClick={() => addToBookshelf(book)}
            className="btn btn-primary"
          >
            Add to Bookshelf
          </button>
        </center>
      </div>
    </div>
  );
};

export default BookCard;
