import React, { useState } from "react";

function TextBoxForm() {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleEraseText = () => {
    setText("");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container mb-3 mt-2">
        <h2>Type Word Here to Analyze</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Type here"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Button container with responsive flexbox */}
      <div className="container d-flex flex-column flex-md-row justify-content-md-between align-items-center mb-3 gap-2">
        {/* Left side buttons */}
        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
        </div>

        {/* Right side erase button */}
        <div>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={handleEraseText}
          >
            Erase
          </button>
        </div>
      </div>

      <div className="container my-4">
        <h2>Text Summary</h2>
        <p>
          Words: <b>{wordCount}</b>
        </p>
        <p>
          Characters: <b>{text.length}</b>
        </p>
      </div>
    </>
  );
}

export default TextBoxForm;
