const reverseString = function(input) {
  let inputArray = input.split('');
  inputArray = inputArray.reverse();
  return inputArray.join('');
};

module.exports = reverseString;
