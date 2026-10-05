// Takes an array of books (objects with title and author) and returns an array of titles
const getTheTitles = function(arr) {
  return arr.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
