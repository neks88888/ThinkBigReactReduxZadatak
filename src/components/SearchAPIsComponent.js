import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBooksFromAPI,
  search,
  load,
  loadFinished,
  opc,
} from "../features/book";

function SearchAPIsComponent(props) {
  const b = useSelector((state) => state.value);

  const dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();
    if (b.searchTerm !== "") {
      dispatch(load(true));
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${b.searchTerm}`
      );
      const bs = await response.json();
      dispatch(fetchBooksFromAPI(bs));
      dispatch(loadFinished(false));
      console.log(b.allBooks);
    } else {
      dispatch(opc(1));
    }
  };
  return (
    <form className="form-group" onSubmit={submit}>
      <label className="h3 font-weight-light" htmlFor="browseAPIs">
        Brows books from Openlibrary API (enter title in box bellow and click
        search)
      </label>
      <input
        placeholder="Enter Book Title or Author Name to fetch data"
        className="form-control mb-2"
        type="text"
        value={b.searchTerm}
        onChange={(e) => dispatch(search(e.target.value))}
      />
      <button className="btn btn-info btn-block" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchAPIsComponent;
