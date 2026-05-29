const convertToCelsius = function (fTemp) {
  let temp = (fTemp - 32) * (5 / 9);
  return parseFloat(temp.toFixed(1))
};

const convertToFahrenheit = function (cTemp) {
  let temp = cTemp * (9 / 5) + 32
  return parseFloat(temp.toFixed(1))
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
