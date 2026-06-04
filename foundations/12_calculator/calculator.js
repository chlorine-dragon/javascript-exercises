const add = function(a,b) {
	return (a + b);
};

const subtract = function(a,b) {
	return (a - b);
};

const sum = function(l) {
	return l.reduce((acc, x) => acc + x, 0);
};

const multiply = function(l) {
	return l.reduce((acc, x) => acc * x, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	if(n == 0){
		return 1;
	}else{
		return n * factorial(n-1);
	}
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
