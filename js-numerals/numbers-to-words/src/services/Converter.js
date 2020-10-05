import {
  ONES_TO_TWENTY,
  TENS_TO_HUNDRED,
  TEN,
  ONE_HUNDRED,
  ONE_THOUSAND,
  ONE_MILLION,
  ONE_BILLION,
  ONE_TRILLION,
  ONE_QUADRILLION,
  MAX_SAFE_NUMBER,
} from "./ConstantValues.js";

const convertToWords = (number) => {
  //handle input validity and edge cases
  return createWordFromNumber(number);
};

//Recursive function to convert digits to words
const createWordFromNumber = (number, words = []) => {
  let remainingDigits = 0;
  let wordToAdd = "";

  if (number === 0) {
    //Decides whether the input or the last digit of the input was zero
    if (words.length === 0) {
      return "zero";
    } else {
      return words.join(" ");
    }
  }

  //Adds minus prefix if necessary
  if (number < 0) {
    words.push("minus");
    number = Math.abs(number);
  }

  if (number < 20) {
    wordToAdd = ONES_TO_TWENTY[number];
  } else if (number < ONE_HUNDRED) {
    remainingDigits = number % TEN;
    wordToAdd = TENS_TO_HUNDRED[Math.floor(number / TEN)];
    //Adds '-' between tens and ones
    if (remainingDigits) {
      wordToAdd += "-" + ONES_TO_TWENTY[remainingDigits];
      remainingDigits = 0;
    }
  } else if (number < ONE_THOUSAND) {
    remainingDigits = number % ONE_HUNDRED;
    wordToAdd =
      createWordFromNumber(Math.floor(number / ONE_HUNDRED)) + " hundred";
  } else if (number < ONE_MILLION) {
    remainingDigits = number % ONE_THOUSAND;
    //Decides if hundred or thousand phrase is simpler according to the value
    if (ONE_HUNDRED < remainingDigits && number < 10000) {
      remainingDigits = number % ONE_HUNDRED;
      wordToAdd =
        createWordFromNumber(Math.floor(number / ONE_HUNDRED)) + " hundred";
    } else {
      wordToAdd =
        createWordFromNumber(Math.floor(number / ONE_THOUSAND)) + " thousand";
    }
  } else if (number < ONE_BILLION) {
    remainingDigits = number % ONE_MILLION;
    wordToAdd =
      createWordFromNumber(Math.floor(number / ONE_MILLION)) + " million";
  } else if (number < ONE_TRILLION) {
    remainingDigits = number % ONE_BILLION;
    wordToAdd =
      createWordFromNumber(Math.floor(number / ONE_BILLION)) + " billion";
  } else if (number < ONE_QUADRILLION) {
    remainingDigits = number % ONE_TRILLION;
    wordToAdd =
      createWordFromNumber(Math.floor(number / ONE_TRILLION)) + " trillion";
  } else if (number < MAX_SAFE_NUMBER) {
    remainingDigits = number % ONE_QUADRILLION;
    wordToAdd =
      createWordFromNumber(Math.floor(number / ONE_QUADRILLION)) +
      " quadrillion";
  }

  words.push(wordToAdd);

  return createWordFromNumber(remainingDigits, words);
};

export default convertToWords;
