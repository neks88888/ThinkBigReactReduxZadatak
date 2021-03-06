import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewBook } from "../features/book";

function AddNewBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author_name, setAuthor_name] = useState("");
  const [language, setLanguage] = useState("");
  const [publish_date, setPublish_date] = useState("");
  const [dis, setDis] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      key: Math.random(),
      title,
      author_name,
      language,
      publish_date,
    };

    dispatch(addNewBook(newBook));

    setTitle("");
    setAuthor_name("");
    setLanguage("");
    setPublish_date("");
  };
  return (
    <React.Fragment>
      <h4 className="text-center">Dodati novu knjigu</h4>
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          className="form-control mb-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          type="text"
        />
        <input
          className="form-control mb-1"
          value={author_name}
          onChange={(e) => setAuthor_name(e.target.value)}
          placeholder="Author"
          type="text"
          name="lastName"
          required
        />
        <input
          className="form-control mb-1"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="Email address"
          type="text"
          required
        />
        <input
          className="form-control mb-1"
          value={publish_date}
          onChange={(e) => setPublish_date(e.target.value)}
          placeholder="Publish date"
          type="date"
          required
        />
        <button
          disabled={!title || !author_name || !language || !publish_date}
          className="btn btn-block btn-success"
          type="submit"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}
export default AddNewBook;
