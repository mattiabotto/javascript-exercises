// Return the oldest person from an array of objects
const findTheOldest = function(arr) {
  const currentYear = new Date().getFullYear();

  // Iterate the arr, starting from first object
  const oldest = arr.reduce((prev, current) => {
    // Age of the current person (if yearOfDeath is undefined or null we take currentYear)
    const currentAge = (current.yearOfDeath ?? currentYear) - current.yearOfBirth;
    // Age of the previous person
    const prevAge = (prev.yearOfDeath ?? currentYear) - prev.yearOfBirth;
    if (currentAge > prevAge) return current; // We change the object that is returned by reduce()
    return prev; // return of reduce() stays the same
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
