import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleUpperClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowerClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    // console.log("Clear was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text was Cleared!", "danger");
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text was Copied!", "success");
  };

  const countWords = (text) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const countCharacters = (text) => {
    return text.replace(/\s/g, "").length;
  };
  //text = "new text"; // Wrong way to change the state
  //setText = ("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#1a1a1a" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleLowerClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-info mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {countWords(text)} words and {countCharacters(text)} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes take to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter anything in the textbox to preview it here!"}
        </p>
      </div>
    </>
  );
}
