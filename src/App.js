import React, { useState, useEffect } from "react";
import AddNewBook from "./components/AddNewBook";
import "./App.css";
import ReadBooks from "./components/ReadBooks";
import Wishlist from "./components/Wishlist";

import AllBooks from "./components/AllBooks";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooksFromAPI, search } from "./features/book";
import CurrentlyReadingBooks from "./components/CurrentlyReadingBooks";
import { ClipLoader } from "react-spinners";
import Modal from "./components/Modal";
import SearchAPIsComponent from "./components/SearchAPIsComponent";

function App() {
  const b = useSelector((state) => state.value);

  if (b.loading) {
    return <ClipLoader size={150} color={"#123abc"} loading={b.loading} />;
  }
  return (
    <div className="App">
      <div className="fourth">
        <Modal />
        <SearchAPIsComponent />
        <AddNewBook />
        <br />
        <h1 className="font-weight-light">
          Lista za citanje (knjiga za procitati ubuduce)
        </h1>
      </div>
      <Wishlist />
      <div className="fourth">
        <br />
        <br />
        <h1 className="font-weight-light">
          Sve knjige (lista za citanje)
        </h1>{" "}
        <br />
      </div>
      <AllBooks />
      <div className="fourth">
        <h1 className="font-weight-light">Sta trenutno citam</h1>
      </div>
      <CurrentlyReadingBooks />
      <div className="fourth">
        <h1 className="font-weight-light">Procitano</h1>
      </div>
      <ReadBooks />
    </div>
  );
}

export default App;
