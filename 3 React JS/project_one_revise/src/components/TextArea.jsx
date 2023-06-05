import React, { useState } from "react";

const TextArea = ({ title }) => {
  const [text, setText] = useState("");

  const changedText = (event) => {
    setText(event.target.value);
    console.log(text);
  };
  const toUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const toLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const trimSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const remover = () => {
    const newText = "";
    setText(newText);
  };

  const Copy = () =>{
    navigator.clipboard.writeText(text);
  }
  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <textarea
          rows={8}
          className={"w-75"}
          value={text}
          onChange={changedText}
        ></textarea>
        <div className="mt-4">
          <button className="btn btn-primary me-4" onClick={toUpperCase}>
            To UpperCase
          </button>
          <button className="btn btn-primary me-4" onClick={toLowerCase}>
            To LowerCase
          </button>
          <button className="btn btn-primary me-4" onClick={trimSpaces}>
            Trim extra spaces
          </button>
          <button className="btn btn-primary" onClick={remover}>
            remove All
          </button>
          <button className="btn btn-primary" onClick={Copy}>
            Copy ClipBoard Text
          </button>
        </div>
        <p>Total Length : {text.length}</p>
        <p>
          Total Word Count: {text.length === 0 ? 0 : text.split(" ").length}
        </p>
        <p>Preview:- {text}</p>
      </div>
    </>
  );
};

export default TextArea;
