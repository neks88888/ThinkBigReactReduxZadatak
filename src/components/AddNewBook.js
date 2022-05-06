import React, { useState } from "react";

function AddNewBook(props) {
  const [title, setTitle] = useState("");
  const [author_name, setAuthor_name] = useState("");
  const [language, setLanguage] = useState("");
  const [publish_date, setPublish_date] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      key: Math.random(),
      title,
      author_name,
      language,
      publish_date,
    };
    props.addNewBook(newBook);
    console.log("uspesno submitovano");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book title"
        type="text"
      />
      <input
        value={author_name}
        onChange={(e) => setAuthor_name(e.target.value)}
        placeholder="Author"
        type="text"
        name="lastName"
        // required
      />
      <input
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        placeholder="Email address"
        type="text"
        // required
      />
      <input
        value={publish_date}
        onChange={(e) => setPublish_date(e.target.value)}
        placeholder="Publish date"
        type="date"
        // required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default AddNewBook;
