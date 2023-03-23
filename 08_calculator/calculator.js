const add = function(firstValue, secondValue) {
  return firstValue + secondValue;
};

const subtract = function(firstValue, secondValue) {
	return firstValue - secondValue;
};

const sum = function(arr) {
  return arr.reduce((total, currentValue) => (total + currentValue), 0)
};


const multiply = function(arr) {
  return arr.reduce((total, currentValue) => (total * currentValue));
};

const power = function(firstValue, secondValue) {
	return firstValue**secondValue;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  } 
  let total = 1;
  for (i=1; i<= num; i++) {
    total *= i;
  }
  return total;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
