const repeatString = function(input, numTimes) {
  if (numTimes < 0) {
    return 'ERROR';
  }
  let result = '';
  for (let i = numTimes; i > 0; --i) {
    result += input;
  }
  return result;
};

module.exports = repeatString;
