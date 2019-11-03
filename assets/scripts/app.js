const defaultResult = 0;
let currentResult = defaultResult; // can be changed, notice the camel case notation, cannot start with a digit

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = add(1, 3);

let calculatorDecription = `${currentResult} = (100 * 3) / 2 - 1`;
let errorMessage = "'An errors' " + "occurred";

outputResult(currentResult, calculatorDecription);
