import * as checker from "../utils/inputChecker";

test("Should return true for too high number", () => {
  expect(checker.inputNumberIsNotValid(Number.MAX_SAFE_INTEGER + 1)).toBe(true);
});

test("Should return true for too low number", () => {
  expect(checker.inputNumberIsNotValid(-Number.MAX_SAFE_INTEGER - 1)).toBe(
    true
  );
});

test("Should return false for input that is in expected range and a round number", () => {
  expect(checker.inputNumberIsNotValid(30)).toBe(false);
});

test("Should return true for not round number", () => {
  expect(checker.inputNumberIsNotValid(42.2)).toBe(true);
});

test("Should return error message for not round number", () => {
  expect(checker.getErrorMessage(122.04)).toBe("Please enter a round number.");
});

test("Should return error message for too high number", () => {
  expect(checker.getErrorMessage(Number.MAX_SAFE_INTEGER + 3)).toBe(
    "The number you entered is either too high or too low."
  );
});
