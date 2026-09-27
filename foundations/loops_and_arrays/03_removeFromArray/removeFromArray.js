// Remove from array each argument passed after that
// Ex. removeFromArray([1, 2, 3, 4], 2, 3) returns [1, 4]
// Modify the original array
const removeFromArray = function(array, ...itemsToRemove) {

  for (let itemToRemove of itemsToRemove) {
    let indexToRemove;
    do {
      indexToRemove = array.findIndex((item) => itemToRemove === item);
      if (indexToRemove !== -1) { // A match was found into the array to remove
        array.splice(indexToRemove, 1);
      }
    } while (indexToRemove !== -1); // repeat until the item is not longer found into the array
  }

  return array;
};

// Solution 1, much simpler, just creates a new array with items
// that don't match into the itemsToRemove array
// This doesn't modify the original array
const removeFromArray_solution1 = function(array, ...itemsToRemove) {

  const newArray = [];

  array.forEach((item) => {
    if(!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
}

// Solution 2, same approach as up, but using the filter method
const removeFromArray_solution2 = function(array, ...itemsToRemove) {
  return array.filter((item) => !itemsToRemove.includes(item))
}

// Do not edit below this line
module.exports = removeFromArray;
