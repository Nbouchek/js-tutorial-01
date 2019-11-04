const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  const enteredNumber = parseInt(userInput.value);
  return enteredNumber;
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function getOperands() {
  const initialResult = currentResult;
  const enteredNumber = getUserInput();
  return { enteredNumber, initialResult };
}

// define functions
function add() {
  const { enteredNumber, initialResult } = getOperands();
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function subtract() {
  const { enteredNumber, initialResult } = getOperands();
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const { enteredNumber, initialResult } = getOperands();
  currentResult *= enteredNumber;
  createAndWriteOutput("x", initialResult, enteredNumber);
}

function divide() {
  const { enteredNumber, initialResult } = getOperands();
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

// add event listeners
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
