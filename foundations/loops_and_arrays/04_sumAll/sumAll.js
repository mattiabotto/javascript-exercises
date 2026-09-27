const sumAll = function(a, b) {

  if (!isValidInput(a, b)) return 'ERROR';

  if (a > b) {
    [arguments[0], arguments[1]] = [arguments[1], arguments[0]]; // swap the arguments
  }

  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
  
  function isValidInput(a, b) {

    /**
     * From solution:
     * if (!Number.isInteger(a) || !Number.isInteger(b)) return false;
     */

    if (typeof a !== 'number' || typeof b !== 'number') return false;

    if (a < 0 || b < 0) return false;

    if (a !== Math.floor(a) || b !== Math.floor(b)) return false;

    return true;
  }
};

// Do not edit below this line
module.exports = sumAll;
