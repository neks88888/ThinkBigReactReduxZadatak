import React, { useState } from "react";

function Book(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [done, setIsDone] = useState(false);

  const { key, title, author_name, language, publish_date } = props.data;

  return (
    <div className={done && "done"}>
      <div>
        <h5>Title: {title}</h5>
        <label htmlFor="test">Obelezi kao procitano</label>

        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            props.selectAsRead(key);
            setIsChecked(!isChecked);
          }}
          id="test"
        />
        <br />
        <label htmlFor="done">Done</label>
        <input
          type="checkbox"
          checked={done}
          onChange={() => {
            setIsDone(!done);
          }}
          id="done"
        />
        <br />
      </div>
    </div>
  );
}

export default Book;
