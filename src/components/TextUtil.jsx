import React from "react";
import {useState} from 'react';
import { BrowserRouter } from "react-router-dom";

export default function TextUtil() {

  const [text, setText] = useState("Enter text here");

  const capitalizeText = () => {
    setText(text.toUpperCase());
  }
  
  const unCapitalizeText = () => {
    setText(text.toLowerCase());
  }

  const changeText = (e) => {
    setText(e.target.value);
  }
  
  return (
    <>
      <div className="form-floating container">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px", width: "70%", margin: "50px" }}
          onChange={changeText}
          value={text}
        ></textarea>
        <label
          style={{ height: "100px", width: "70%", margin: "50px" }}
          htmlFor="floatingTextarea2"
        >
          Add text to me ✍️
        </label>
      </div>
      <div className="container my-2">
        <div className="mx-2">
          <button className="btn btn-primary" onClick={capitalizeText}>
            Capitalize
          </button>
        </div>
        <div className="mx-2">
          <button className="btn btn-primary" onClick={unCapitalizeText}>
            Un-Capitalize
          </button>
        </div>
      </div>

      <div className="container my-2">
        <h1>Text Info</h1>
        <div className="mx-2">
          <span className="mx-2">
            <h5>Word Count: {text.split(" ").length}</h5>
          </span>
          <span className="mx-2">
            <h5>Charactor Count: {text.length}</h5>
          </span>
        </div>
      </div>
    </>
  );
}
