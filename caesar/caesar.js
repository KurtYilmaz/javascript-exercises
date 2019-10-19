const loopWithinBounds = function(input, lowBound, highBound) {
  const boundRange = highBound - lowBound + 1;
  input = ((input - lowBound) % boundRange) + lowBound;
  while (input < lowBound) {
    input += boundRange;
  }
  return input;
};

const caesar = function(input, modifier) {
  let result = [];
  for (let i = 0; i < input.length; ++i) {
    let upperCase = input.charAt(i).toUpperCase();
    let lowerCase = input.charAt(i).toLowerCase();
    if (upperCase != lowerCase) {
      let charCode = input.charCodeAt(i);
      if (input.charAt(i) == upperCase) {
        charCode = loopWithinBounds(
          charCode + modifier,
          'A'.charCodeAt(0),
          'Z'.charCodeAt(0)
        );
      } else {
        charCode = loopWithinBounds(
          charCode + modifier,
          'a'.charCodeAt(0),
          'z'.charCodeAt(0)
        );
      }
      result.push(String.fromCharCode(charCode));
    } else {
      result.push(input.charAt(i));
    }
  }
  return result.join('');
};

module.exports.caesar = caesar;
module.exports.loopWithinBounds = loopWithinBounds;
