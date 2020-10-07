const {
  convertToWords,
  isUnsafeValue,
  addAndToPhrase,
  isShorterAsHundred,
} = require("../services/Converter.js");

//Testing convertToWords function
test("Should return zero", () => {
  expect(convertToWords(0)).toBe("zero");
});

test("Should return error message", () => {
  expect(convertToWords(Number.MAX_SAFE_INTEGER + 1)).toBe(
    "The number you entered is either too high or too low."
  );
});

test("Should return one-digit number", () => {
  expect(convertToWords(7)).toBe("seven");
});

test("Should return two-digit number with '-' sign", () => {
  expect(convertToWords(71)).toBe("seventy-one");
});

test("Should return hundreds", () => {
  expect(convertToWords(200)).toBe("two hundred");
});

test("Should return thousands as hundreds if shorter", () => {
  expect(convertToWords(1900)).toBe("nineteen hundred");
});

test("Should return thousands as thousands if shorter", () => {
  expect(convertToWords(3000)).toBe("three thousand");
});

test("Should return millions", () => {
  expect(convertToWords(4000000)).toBe("four million");
});

test("Should return billions", () => {
  expect(convertToWords(5000000000)).toBe("five billion");
});

test("Should return trillions", () => {
  expect(convertToWords(6000000000000)).toBe("six trillion");
});

test("Should return quadrillions", () => {
  expect(convertToWords(7000000000000000)).toBe("seven quadrillion");
});

test("Should return minus numbers", () => {
  expect(convertToWords(-12000)).toBe("minus twelve thousand");
});

test("Should concat words with 'and'", () => {
  expect(convertToWords(220)).toBe("two hundred and twenty");
});

test("Should handle string input", () => {
  expect(convertToWords("300200")).toBe(
    "three hundred thousand and two hundred"
  );
});

test("Should handle numbers staring with 0", () => {
  expect(convertToWords("00013")).toBe("thirteen");
});

//Testing helper functions

//isUnsafeValue tests
test("Should return true for too high number", () => {
  expect(isUnsafeValue(Number.MAX_SAFE_INTEGER + 1)).toBe(true);
});

test("Should return true for too low number", () => {
  expect(isUnsafeValue(-Number.MAX_SAFE_INTEGER - 1)).toBe(true);
});

test("Should return false for input that is in expected range", () => {
  expect(isUnsafeValue(30)).toBe(false);
});

//addAndToPhrase tests
test("Should add 'and' between to words", () => {
  expect(addAndToPhrase(["one hundred", "twenty-three"])).toEqual([
    "one hundred",
    "and",
    "twenty-three",
  ]);
});

test("Should not add 'and' to one word", () => {
  expect(addAndToPhrase(["one hundred"])).toEqual(["one hundred"]);
});

//isShorterAsHundred tests
test("Should return false when thousands are shorter", () => {
  expect(isShorterAsHundred(2005)).toBe(false);
});

test("Should return true when hundreds are shorter", () => {
  expect(isShorterAsHundred(1975)).toBe(true);
});
