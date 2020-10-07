import * as constants from "./constantValues";
import * as checker from "./inputChecker";

export const convertToWords = (input) => {
  if (checker.inputNumberIsNotValid(input)) {
    return checker.getErrorMessage(input);
  }

  const numberToConvert = parseInt(input);

  let createdWord = createWordFromNumber(numberToConvert);

  if (numberToConvert < 0) {
    createdWord = "minus " + createdWord;
  }
  return createdWord;
};

const createWordFromNumber = (numberInput, generatedWords = []) => {
  const numberToConvert = Math.abs(numberInput);

  if (numberToConvert === 0) {
    if (generatedWords.length === 0) {
      generatedWords.push("zero");
    }
    return addAndToPhrase(generatedWords).join(" ");
  }

  let remainingDigits;
  let wordToAdd;

  if (numberToConvert < constants.placeValues.ONE_HUNDRED) {
    wordToAdd = createWordUnderHundred(numberToConvert);
    remainingDigits = 0;
  } else {
    wordToAdd = createWordOverHundred(numberToConvert).wordToAdd;
    remainingDigits = createWordOverHundred(numberToConvert).remainingDigits;
  }

  generatedWords.push(wordToAdd);

  return createWordFromNumber(remainingDigits, generatedWords);
};

const createWordUnderHundred = (numberToConvert) => {
  if (numberToConvert < 20) {
    return constants.ONES_TO_TWENTY[numberToConvert];
  } else if (numberToConvert < constants.placeValues.ONE_HUNDRED) {
    let remainingDigits = numberToConvert % constants.placeValues.TEN;
    let wordToAdd =
      constants.TENS_TO_HUNDRED[
        Math.floor(numberToConvert / constants.placeValues.TEN)
      ];
    if (remainingDigits) {
      wordToAdd += "-" + constants.ONES_TO_TWENTY[remainingDigits];
    }
    return wordToAdd;
  }
};

const createWordOverHundred = (numberToConvert) => {
  let placeValue;
  let denomination;

  if (numberToConvert < constants.placeValues.ONE_THOUSAND) {
    placeValue = constants.placeValues.ONE_HUNDRED;
    denomination = constants.denomination.HUNDRED;
  } else if (numberToConvert < constants.placeValues.ONE_MILLION) {
    if (isShorterAsHundred(numberToConvert)) {
      placeValue = constants.placeValues.ONE_HUNDRED;
      denomination = constants.denomination.HUNDRED;
    } else {
      placeValue = constants.placeValues.ONE_THOUSAND;
      denomination = constants.denomination.THOUSAND;
    }
  } else if (numberToConvert < constants.placeValues.ONE_BILLION) {
    placeValue = constants.placeValues.ONE_MILLION;
    denomination = constants.denomination.MILLION;
  } else if (numberToConvert < constants.placeValues.ONE_TRILLION) {
    placeValue = constants.placeValues.ONE_BILLION;
    denomination = constants.denomination.BILLION;
  } else if (numberToConvert < constants.placeValues.ONE_QUADRILLION) {
    placeValue = constants.placeValues.ONE_TRILLION;
    denomination = constants.denomination.TRILLION;
  } else if (numberToConvert <= Number.MAX_SAFE_INTEGER) {
    placeValue = constants.placeValues.ONE_QUADRILLION;
    denomination = constants.denomination.QUADRILLION;
  }

  const quotientOfNumber = Math.floor(numberToConvert / placeValue);
  const wordToAdd = createWordFromNumber(quotientOfNumber) + denomination;
  const remainingDigits = numberToConvert % placeValue;

  return { wordToAdd: wordToAdd, remainingDigits: remainingDigits };
};

const addAndToPhrase = (convertedWords) => {
  if (2 <= convertedWords.length) {
    convertedWords.splice(-1, 0, "and");
  }
  return convertedWords;
};

const isShorterAsHundred = (thousandToCheck) => {
  const remainingDigits = thousandToCheck % constants.placeValues.ONE_THOUSAND;
  return (
    constants.placeValues.ONE_HUNDRED < remainingDigits &&
    thousandToCheck < 10000
  );
};
