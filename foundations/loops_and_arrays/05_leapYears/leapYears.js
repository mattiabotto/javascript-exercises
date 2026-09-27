// Return true if year is leap
// Leap years are divisible by four, but not by 100, unless they are divisible by 400.
const leapYears = function(year) {
  
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) return true;

  return false;
};

// Do not edit below this line
module.exports = leapYears;