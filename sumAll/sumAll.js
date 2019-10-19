const sumAll = function(a, b) {
  if (isNaN(a) || isNaN(b) || a < 0 || b < 0 || a.length > 1 || b.length > 1) {
    return 'ERROR';
  }
  let sum = 0;
  const max = a > b ? a : b;
  const min = a <= b ? a : b;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
