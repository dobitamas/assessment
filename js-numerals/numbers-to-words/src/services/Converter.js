const {
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
} = require("./ConstantValues.js");

const convertToWords = (input) => {
  const numberToConvert = parseInt(input);

  //Handle inputs that are out of the safe integer range
  if (isUnsafeValue(numberToConvert)) {
    return "The number you entered is either too high or too low.";
  }

  let createdWord = createWordFromNumber(numberToConvert);

  //Adds minus prefix
  if (numberToConvert < 0) {
    createdWord = "minus " + createdWord;
  }
  return createdWord;
};

//Decides if input is in the safe range
const isUnsafeValue = (numberToValidate) => {
  return MAX_SAFE_NUMBER < Math.abs(numberToValidate);
};

//Recursive function to convert digits to words
const createWordFromNumber = (number, words = []) => {
  number = Math.abs(number);

  //Decides if the input should return "zero" or the generated phrase
  if (number === 0) {
    if (words.length === 0) {
      words.push("zero");
    }
    //Add 'and' to the where needed and return as string
    return addAndToPhrase(words).join(" ");
  }

  let remainingDigits = 0;
  let wordToAdd = "";

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
    if (isShorterAsHundred(number)) {
      remainingDigits = number % ONE_HUNDRED;
      wordToAdd =
        createWordFromNumber(Math.floor(number / ONE_HUNDRED)) + " hundred";
    } else {
      remainingDigits = number % ONE_THOUSAND;
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
  } else if (number <= MAX_SAFE_NUMBER) {
    remainingDigits = number % ONE_QUADRILLION;
    wordToAdd =
      createWordFromNumber(Math.floor(number / ONE_QUADRILLION)) +
      " quadrillion";
  }

  words.push(wordToAdd);

  return createWordFromNumber(remainingDigits, words);
};

//Adds "and" before the last part of the phrase
const addAndToPhrase = (convertedWords) => {
  if (2 <= convertedWords.length) {
    convertedWords.splice(-1, 0, "and");
  }
  return convertedWords;
};

//Decides if thousand could be expressed with hundreds
const isShorterAsHundred = (number) => {
  const remainingDigits = number % ONE_THOUSAND;
  return ONE_HUNDRED < remainingDigits && number < 10000;
};

exports.convertToWords = convertToWords;
exports.createWordFromNumber = createWordFromNumber;
exports.isUnsafeValue = isUnsafeValue;
exports.addAndToPhrase = addAndToPhrase;
exports.isShorterAsHundred = isShorterAsHundred;
