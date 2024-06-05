import React, { useState } from "react";
import Swal from "sweetalert2";
import "./BookshelfPage.css";
import { motion } from "framer-motion";

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  const handleDelete = (key) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBookshelf = bookshelf.filter((book) => book.key !== key);
        setBookshelf(updatedBookshelf);
        localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
        Swal.fire("Deleted!", "Your book has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your book is safe :)", "error");
      }
    });
  };

  return (
    <div className="mainContainer">
      {bookshelf.length > 0 ? (
        <div className="bookshelf">
          {bookshelf.map((book) => (
            <div className="bookCard" key={book.key}>
              <h3>{book.title}</h3>
              <p>
                Author:{" "}
                {book.author_name ? book.author_name.join(", ") : "Unknown"}
              </p>
              <p>
                Publish Year:{" "}
                {book.publish_year ? book.publish_year.join(", ") : "Unknown"}
              </p>
              <motion.button whileTap={{scale:1.1}} onClick={() => handleDelete(book.key)}>Delete</motion.button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your bookshelf is empty.</p>
      )}
    </div>
  );
};

export default BookshelfPage;
