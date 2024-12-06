import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    // console.log("clicked");
    if (text.length === 0) props.showAlert("please enter any text", "danger");
    else props.showAlert("The text is convert to the Upper Case", "success");
  };
  const handlelowclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    // console.log("clicked");
    if (text.length === 0) props.showAlert("please enter any text", "danger");
    else props.showAlert("The text is convert to the lower Case", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    if (text.length === 0) props.showAlert("please enter any text", "danger");
  };
  const handleclear = () => {
    setText("");
    // console.log("clicked");
    if (text.length === 0) props.showAlert("please enter any text", "danger");
    else props.showAlert("The text is clear", "success");
  };
  const handleOnchage = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.Mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter Your Text"
            value={text}
            onChange={handleOnchage}
            style={{
              backgroundColor: props.Mode === "dark" ? "grey" : "white",
              color: props.Mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlelowclick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary my-1 my-1" onClick={handleclear}>
          Clear
        </button>
        <button type="submit" onClick={speak} className="btn btn-primary mx-2">
          Speak
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.Mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          <b>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words , {text.length} Character
          </b>
        </p>
        <p>
          <b>{0.008 * text.split(" ").length} minuts to read</b>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter somthing in the textbox above to preview it......."}
        </p>
      </div>
    </>
  );
}
