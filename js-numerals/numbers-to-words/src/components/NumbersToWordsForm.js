import React, { useState } from "react";
import convertToWords from "../services/Converter.js";

export default function NumbersToWordsForm() {
  const [numberToConvert, setNumberToConvert] = useState(0);

  const handleChange = (event) => {
    setNumberToConvert(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    convertToWords(numberToConvert);
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
    </div>
  );
}
