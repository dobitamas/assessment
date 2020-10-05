import React, { useState } from "react";
import convertToWords from "../services/Converter.js";

export default function NumbersToWordsForm() {
  const [numberToConvert, setNumberToConvert] = useState();
  const [numberAsWord, setNumberAsWord] = useState("");

  const handleChange = (event) => {
    setNumberToConvert(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNumberAsWord(convertToWords(numberToConvert));
    console.log(numberAsWord);
    console.log(numberToConvert);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Number to convert:
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
