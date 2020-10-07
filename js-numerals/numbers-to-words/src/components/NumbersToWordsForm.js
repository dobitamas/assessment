import React, { useState } from "react";
import { convertToWords } from "../utils/converter";
import "../style/app.css";

export default function NumbersToWordsForm() {
  const [numberToConvert, setNumberToConvert] = useState("");
  const [numberAsWord, setNumberAsWord] = useState("");

  const handleChange = (event) => {
    setNumberToConvert(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNumberAsWord(convertToWords(numberToConvert));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <h1> Number to Phrase Converter</h1>
          <input
            type="number"
            placeholder="Enter a number"
            value={numberToConvert}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      <h2>{numberAsWord}</h2>
    </div>
  );
}
