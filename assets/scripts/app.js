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

function calculateResult(clculationType) {
  const { enteredNumber, initialResult } = getOperands();
  let mathOperator;
  if (clculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (clculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (clculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "x";
  } else if (clculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(clculationType, initialResult, enteredNumber, currentResult);
}

// define functions
function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

// add event listeners
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
