const palindromes = function (string) {
  // Array of characters from first string (excluding punctuation and spaces)
  const chars = [...string.toLowerCase()] // Spread string into an array of chars, lowercasing each char
                  .filter(char => /[a-z0-9]/i.test(char)) // Keep only alphanum chars

  // toString joins the array with a comma, anyway we only want to check equality of strings
  return chars.toString() === chars.toReversed().toString();
};

// Do not edit below this line
module.exports = palindromes;
