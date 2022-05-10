import React from "react";
import Book from "./Book";
import { useSelector } from "react-redux";

function Wishlist() {
  const w = useSelector((state) => state.value);
  const wToDispaly = w.wishlist.map((book) => (
    <Book key={book.key} data={book} wishlist={true} />
  ));
  return wToDispaly.length === 0 ? (
    <h3 className="font-weight-light">Lista za citanje je trenutno prazna</h3>
  ) : (
    wToDispaly
  );
}

export default Wishlist;
