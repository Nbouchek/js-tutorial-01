const defaultResult = 0;
let currentResult = defaultResult; // can be changed, notice the camel case notation, cannot start with a digit

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, '');
}

addBtn.addEventListener("click", add);
