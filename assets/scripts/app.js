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

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntry.number);
  console.log(logEntries);
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
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const { enteredNumber, initialResult } = getOperands();
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRCUT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const { enteredNumber, initialResult } = getOperands();
  currentResult *= enteredNumber;
  createAndWriteOutput("x", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const { enteredNumber, initialResult } = getOperands();
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

// add event listeners
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
