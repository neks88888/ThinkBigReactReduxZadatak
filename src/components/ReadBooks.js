import React from "react";
import Book from "./Book";
import { useSelector } from "react-redux";

function ReadBooks() {
  const p = useSelector((state) => state.value);
  const bToDispaly = p.readBooks.map((book) => (
    <Book key={book.key} data={book} proc={true} />
  ));
  return bToDispaly.length === 0 ? (
    <h4 className="font-weight-light">Trenutno nema procitanih knjiga</h4>
  ) : (
    bToDispaly
  );
}

export default ReadBooks;
