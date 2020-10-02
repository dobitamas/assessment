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

//refactor
const createWordFromNumber = (number) => {
  let createdWord = "";
  let remainingDigits = 0;
  if (number === 0) {
    return "";
  }

  if (number < 0) {
    createdWord += "minus ";
    number = Math.abs(number);
  }

  if (number < 20) {
    createdWord += ONES_TO_TWENTY[number];
  } else if (number < ONE_HUNDRED) {
    remainingDigits = number % TEN;
    createdWord += TENS_TO_HUNDRED[Math.floor(number / TEN)];
    if (remainingDigits) {
      createdWord += "-" + ONES_TO_TWENTY[remainingDigits];
    }
  } else if (number < ONE_THOUSAND) {
    remainingDigits = number % ONE_HUNDRED;
    createdWord +=
      createWordFromNumber(Math.floor(number / ONE_HUNDRED)) + " hundred ";
    if (remainingDigits) {
      createdWord += " and " + createWordFromNumber(remainingDigits);
    }
  } else if (number < ONE_MILLION) {
    remainingDigits = number % ONE_THOUSAND;
    if (ONE_HUNDRED < remainingDigits && number < 10000) {
      remainingDigits = number % ONE_HUNDRED;
      createdWord +=
        createWordFromNumber(Math.floor(number / ONE_HUNDRED)) + " hundred ";
      if (remainingDigits) {
        createdWord += " and " + createWordFromNumber(remainingDigits);
      }
    } else {
      createdWord +=
        createWordFromNumber(Math.floor(number / ONE_THOUSAND)) + " thousand ";
      if (
        remainingDigits < ONE_HUNDRED ||
        remainingDigits % ONE_HUNDRED === 0
      ) {
        createdWord += " and ";
      }
      createdWord += createWordFromNumber(remainingDigits);
    }
  } else if (number < ONE_BILLION) {
    remainingDigits = number % ONE_MILLION;
    createdWord +=
      createWordFromNumber(Math.floor(number / ONE_MILLION)) +
      " million " +
      createWordFromNumber(remainingDigits);
  } else if (number < ONE_TRILLION) {
    remainingDigits = number % ONE_BILLION;
    createdWord +=
      createWordFromNumber(Math.floor(number / ONE_BILLION)) +
      " billion " +
      createWordFromNumber(remainingDigits);
  } else if (number < ONE_QUADRILLION) {
    remainingDigits = number % ONE_TRILLION;
    createdWord +=
      createWordFromNumber(Math.floor(number / ONE_TRILLION)) +
      " trillion " +
      createWordFromNumber(remainingDigits);
  } else if (number < MAX_SAFE_NUMBER) {
    remainingDigits = number % ONE_QUADRILLION;
    createdWord +=
      createWordFromNumber(Math.floor(number / ONE_QUADRILLION)) +
      " quadrillion " +
      createWordFromNumber(remainingDigits);
  }

  return createdWord;
};

export default convertToWords;
