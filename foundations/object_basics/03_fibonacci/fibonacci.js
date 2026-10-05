// Return a specific member of the Fibonacci sequence (Starting at index 1)
const fibonacci = function(i) {
  if (!Number.isInteger(i) || i < 0) return 'OOPS';

  if (i === 0) return 0;
  if (i === 1) return 1;

  return fibonacci(i - 1) + fibonacci(i - 2);
};

// Do not edit below this line
module.exports = fibonacci;
