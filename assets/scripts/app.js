const defaultResult = 0;

let currentResult = defaultResult; // can be changed, notice the camel case notation, cannot start with a digit

function getUserInput() {
  const enteredNumber = parseInt(userInput.value);
  return enteredNumber;
}

function getDescription(enteredNumber) {
  return `${currentResult} + ${enteredNumber}`;
}

function add() {
  const enteredNumber = getUserInput();
  const calcDescription = getDescription(enteredNumber);
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
