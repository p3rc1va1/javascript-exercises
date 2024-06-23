const convertToCelsius = function(f) {
  let c = (f-32) *(5/9);
  //rounding a float
  return Number(c.toFixed(1));
};

const convertToFahrenheit = function(c) {
  let f = c*(9/5)+32;
  return Number(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};