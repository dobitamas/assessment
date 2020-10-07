import React, { useState } from "react";
import { convertToWords } from "../services/Converter.js";
import "../style/app.css";

export default function NumbersToWordsForm() {
  const [numberToConvert, setNumberToConvert] = useState();
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
        <input type="submit" value="Convert" />
      </form>
      <h2>{numberAsWord}</h2>
    </div>
  );
}
