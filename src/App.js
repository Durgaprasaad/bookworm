// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookSearchPage from "./components/bookSearchPage";
import BookshelfPage from "./components/bookShelf";
import NavBar from "./components/navbar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookSearchPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
