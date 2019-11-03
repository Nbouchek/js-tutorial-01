const defaultResult = 0;
let currentResult = defaultResult; // can be changed, notice the camel case notation, cannot start with a digit

function add(num1, num2) {
  const result = num1 + num2;
  alert("The result is " + result);
}

add(2, 472);
add(12, 472);

currentResult += ((currentResult + 10) * 3) / 2 - 1; // termplate literal;

let calculatorDecription = `${currentResult} = (100 * 3) / 2 - 1`;
let errorMessage = "'An errors' " + "occurred";

outputResult(currentResult, calculatorDecription);
