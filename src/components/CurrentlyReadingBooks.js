import React, { useState } from "react";
import Book from "./Book";
import { useSelector } from "react-redux";

function CurrentlyReadingBooks() {
  const [search, setSearch] = useState("");
  const c = useSelector((state) => state.value);
  const cToDispaly = c.currReadingBooks
    .filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
    .map((book) => <Book key={book.key} data={book} currReading={true} />);
  return (
    <React.Fragment>
      <div className="fourth">
        <input
          aria-label="book"
          aria-describedby="basic-addon1"
          className="form-control"
          style={{ display: "block", textAlign: "center", margin: "0 auto" }}
          type="text"
          placeholder="Enter the book title you want to search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {cToDispaly}
    </React.Fragment>
  );
}

export default CurrentlyReadingBooks;
