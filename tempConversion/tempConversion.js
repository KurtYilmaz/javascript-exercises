const roundToDecimalPlace = function(input, numPlaces = 1) {
  let result;
  if (numPlaces < 1) {
    result = Math.round(input);
  } else {
    result =
      Math.round(input * Math.pow(10, numPlaces)) / Math.pow(10, numPlaces);
  }
  return result;
};

const ftoc = function(fahrenheit) {
  return roundToDecimalPlace(((fahrenheit - 32) * 5) / 9, 1);
};

const ctof = function(celsius) {
  return roundToDecimalPlace((celsius * 9) / 5 + 32, 1);
};

module.exports = {
  ftoc,
  ctof
};
