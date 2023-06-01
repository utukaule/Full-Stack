import React, { useState } from "react";
// useState is hook

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleOnClick = () => {
    // console.log("clicked"+ text);
    let newText = text.toUpperCase()
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("huhu");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h5>{props.heading} - </h5>
        <textarea
          value={text}
          className="form-control"
          onChange={handleOnChange}
          id="myBox"
          rows={8}
        ></textarea>
        <button className="ps-2 pe-2" onClick={handleOnClick}>
          Convert to upperCase
        </button>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
