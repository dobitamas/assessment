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
          <h1> Number to convert:</h1>
          <input
            type="number"
            value={numberToConvert}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>{numberAsWord}</h1>
    </div>
  );
}
