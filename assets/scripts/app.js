const defaultResult = 0;
let currentResult = defaultResult; // can be changed, notice the camel case notation, cannot start with a digit
currentResult += "(100 * 3) / 2 - 1";
let calculatorDEcription = "(" + currentResult+")";
outputResult(currentResult, calculatorDEcription);
