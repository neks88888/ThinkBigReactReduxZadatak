import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { opc } from "../features/book";

function Modal() {
  const b = useSelector((state) => state.value);

  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(opc(0));
    }, 1000);
  }, [b.op]);
  return (
    <div
      className="alert alert-danger"
      style={{
        display: "absolute",
        zIndex: 2,
        opacity: b.op,
        transition: "all 1s ease",
      }}
      role="alert"
    >
      You must enter the search term in text-box above.
    </div>
  );
}

export default Modal;
