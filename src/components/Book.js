import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { selectAdRead, addCurrReadingBook } from "../features/book";

function Book(props) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [done, setIsDone] = useState(false);
  const [currentlyReading, setCurrentlyReading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ];

  const {
    apis = false,
    currReading = false,
    proc = false,
    data: { key, title, author_name, language },
  } = props;

  const addNote = (e) => {
    e.preventDefault();
    setNotes([...notes, note]);
  };
  const procitano = (
    <Fragment>
      <div className="form-group form-check">
        <input
          className="form-check-input"
          id="exampleCheck1"
          type="checkbox"
          checked={done}
          onChange={() => {
            setIsDone(!done);
          }}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Done
        </label>
      </div>
    </Fragment>
  );
  const zaStaTrenutnoCitam = (
    <Fragment>
      <br />
      <div className="form-group form-check">
        <input
          className="form-check-input"
          name="inlineRadioOptions"
          id="inlineRadio1"
          type="radio"
          checked={isChecked}
          onChange={() => {
            dispatch(selectAdRead(key));
            setIsChecked(!isChecked);
          }}
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Obelezi kao procitano
        </label>
      </div>

      {procitano}
    </Fragment>
  );

  let zaApis = (
    <Fragment>
      {zaStaTrenutnoCitam}
      <br />
      <div className="form-group form-check">
        <input
          className="form-check-input"
          type="radio"
          checked={currentlyReading}
          onChange={() => {
            dispatch(addCurrReadingBook(key));
            setCurrentlyReading(!currentlyReading);
          }}
          id="done"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Sta trenutno citam
        </label>
      </div>
      <br />
    </Fragment>
  );

  return (
    <Fragment>
      <div
        className={`${done && "done"} card text-white bg-${
          colors[Math.floor(Math.random() * colors.length)]
        } m-3 custom-class`}
        style={{
          maxWidth: "18rem",
          display: "inline-block",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <div className="card-header">{title}</div>
        <div className="card-body">
          <h5 className="card-title">{author_name}</h5>
          <h5 className="card-title">{language}</h5>
          <p className="card-text">
            Opis knjige (ili prvi chapter) ide ovde, ali u API-u nisam nasao
            nikakv passus
          </p>
        </div>
        <ol>
          {notes.map((note) => (
            <li>{note}</li>
          ))}
        </ol>
        <form onSubmit={addNote}>
          <input
            value={note}
            type="text"
            className="inputNotes"
            placeholder="Here write any notes you have"
            onChange={(e) => setNote(e.target.value)}
          />
        </form>
        <div className="custom-div">
          {apis && zaApis}
          {currReading && zaStaTrenutnoCitam}
          {proc && procitano}
        </div>
      </div>
    </Fragment>
  );
}

export default Book;
