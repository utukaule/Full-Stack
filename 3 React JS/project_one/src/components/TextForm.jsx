import React, { useState } from "react";
// useState is hook

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleOnClick = () => {
    // console.log("clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnClick2 = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("huhu");
    setText(event.target.value);
  };
  // remove
  const rmv = (event) => {
    const rmv1 = "";
    setText(rmv1);
  };
  // remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div className="container">
        <h5>{props.heading} - </h5>
        <textarea
          value={text}
          className="form-control"
          onChange={handleOnChange}
          style={{
            backgroundColor:props.mode == 'dark'?'grey':'white'
          }}
          id="myBox"
          rows={8}
        ></textarea>
        {/* upper case */}
        <button
          className="btn btn-primary ps-2 pe-2 me-4"
          onClick={handleOnClick}
        >
          Convert to upperCase
        </button>

        {/* Lower case */}

        <button className="btn btn-primary ps-2 pe-2" onClick={handleOnClick2}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary ps-2 pe-2 me-4" onClick={rmv}>
          remove all
        </button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charactor
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes required to read this inner
          text
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
