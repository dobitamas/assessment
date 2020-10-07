const isUnsafeValue = (numberToValidate) => {
  return Number.MAX_SAFE_INTEGER < Math.abs(parseInt(numberToValidate));
};

const isNotRoundNumber = (numberToValidate) => {
  return parseFloat(numberToValidate) % 1 !== 0;
};

export const inputNumberIsNotValid = (numberToValidate) => {
  return isNotRoundNumber(numberToValidate) || isUnsafeValue(numberToValidate);
};

export const getErrorMessage = (numberToValidate) => {
  if (isUnsafeValue(numberToValidate)) {
    return "The number you entered is either too high or too low.";
  } else if (isNotRoundNumber(numberToValidate)) {
    return "Please enter a round number.";
  }
};
