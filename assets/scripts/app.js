const defaultResult = 0;
let currentResult = defaultResult; // can be changed, notice the camel case notation, cannot start with a digit

function add() {
  const calcDescription = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
