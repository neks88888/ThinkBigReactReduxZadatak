import React from "react";
import Book from "./Book";

import { useSelector } from "react-redux";

function AllBooks() {
  const s = useSelector((state) => state.value);
  const allBooks = s.allBooks
    .slice(0, 5)
    .map((book) => <Book key={book.key} data={book} apis={true} />);

  return allBooks.length === 0 ? (
    <h3 className="font-weight-light">Lista "sve knjige" je trenutno prazna</h3>
  ) : (
    <div className="ab">{allBooks}</div>
  );
}

export default AllBooks;
