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

function calculate(operation) {
  const { enteredNumber, initialResult } = getOperands();
  let mathOperator;
  switch (operation) {
    case "ADD":
      currentResult += enteredNumber;
      mathOperator = "+";
      break;
    case "SUBTRACT":
      currentResult -= enteredNumber;
      mathOperator = "-";
      break;
    case "MULTIPLY":
      currentResult *= enteredNumber;
      mathOperator = "x";
      break;
    case "DIVIDE":
      currentResult /= enteredNumber;
      mathOperator = "/";
      break;
    default:
      return;
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

// add event listeners
addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
