import React, { useState } from "react";
import Book from "./Book";
import AddNewBook from "./AddNewBook";

function AllBooks({ books }) {
  const [sBooks, setSBooks] = useState([]);
  const [newBooks, setNewBooks] = useState([]);

  const addNewBook = (newBook) => {
    setNewBooks((prevState) => [...prevState, newBook]);
  };

  const selectAsRead = (id) => {
    const selectedBook = newBooks.concat(books).find((book) => book.key === id);
    console.log(selectedBook);

    setSBooks((prevState) => [...prevState, selectedBook]);
    // selectedBook.forReadingList = !forReadingList;
  };
  const sBook = newBooks
    .concat(books)
    .slice(0, 5)
    .map((singleBook) => {
      return (
        <Book
          key={singleBook.key}
          data={singleBook}
          selectAsRead={selectAsRead}
        />
      );
    });
  return (
    <React.Fragment>
      <AddNewBook addNewBook={addNewBook} />
      <h1>Sve knjige (lista za citanje)</h1> <br />
      {sBook} <h1>Procitano</h1>
      {sBooks.map((book) => (
        <Book key={book.key} data={book} />
      ))}
    </React.Fragment>
  );
}

export default AllBooks;
