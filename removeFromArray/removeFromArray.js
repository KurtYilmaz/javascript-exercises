const removeFromArray = function(input, ...params) {
  const valuesToRemove = new Set(params);
  let result = [];
  for (let i = 0; i < input.length; ++i) {
    if (!valuesToRemove.has(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
};

module.exports = removeFromArray;
