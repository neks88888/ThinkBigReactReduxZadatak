import React, { useState } from "react";
import "./App.css";

import AllBooks from "./components/AllBooks";

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("nora");
  // const [forReadingList, setForReadingList] = useState(false);
  let updatedBooks;
  async function previewAllBooks() {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${searchTerm}`
    );
    const bs = await response.json();
    setBooks(bs.docs);
    console.log(books);
  }

  updatedBooks = books.map((book) => {
    return { ...book, forReadingList: false };
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    previewAllBooks();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <AllBooks books={updatedBooks} />
    </div>
  );
}

export default App;
