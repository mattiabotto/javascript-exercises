const convertToCelsius = function(fahr) {
  let result = (fahr - 32) * 5 / 9;

  return round(result, 1);
};

const convertToFahrenheit = function(cels) {
  let result = cels * 9 / 5 + 32;

  return round(result, 1);
};

function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
