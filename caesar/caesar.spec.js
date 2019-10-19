const testFile = require('./caesar');
const caesar = testFile.caesar;
const loopWithinBounds = testFile.loopWithinBounds;

describe('loopWithinBounds', function() {
  it('works with above Z', function() {
    expect(
      loopWithinBounds(
        'Z'.charCodeAt(0) + 1,
        'A'.charCodeAt(0),
        'Z'.charCodeAt(0)
      )
    ).toEqual('A'.charCodeAt(0));
  });
  it('works with below A', function() {
    expect(
      loopWithinBounds(
        'A'.charCodeAt(0) - 1,
        'A'.charCodeAt(0),
        'Z'.charCodeAt(0)
      )
    ).toEqual('Z'.charCodeAt(0));
  });
  it('works with above z', function() {
    expect(
      loopWithinBounds(
        'z'.charCodeAt(0) + 1,
        'a'.charCodeAt(0),
        'z'.charCodeAt(0)
      )
    ).toEqual('a'.charCodeAt(0));
  });
  it('high number becomes a', function() {
    expect(
      loopWithinBounds(
        'd'.charCodeAt(0) + 75,
        'a'.charCodeAt(0),
        'z'.charCodeAt(0)
      )
    ).toEqual('a'.charCodeAt(0));
  });
  it('low number becomes l', function() {
    expect(
      loopWithinBounds(
        'o'.charCodeAt(0) - 29,
        'a'.charCodeAt(0),
        'z'.charCodeAt(0)
      )
    ).toEqual('l'.charCodeAt(0));
  });
});

describe('caesar', function() {
  it('works with single letters', function() {
    expect(caesar('A', 1)).toEqual('B');
  });
  it('works with words', function() {
    expect(caesar('Aaa', 1)).toEqual('Bbb');
  });
  it('works with phrases', function() {
    expect(caesar('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
  });
  it('works with negative shift', function() {
    expect(caesar('Mjqqt, Btwqi!', -5)).toEqual('Hello, World!');
  });
  it('wraps', function() {
    expect(caesar('Z', 1)).toEqual('A');
  });
  it('works with large shift factors', function() {
    expect(caesar('Hello, World!', 75)).toEqual('Ebiil, Tloia!');
  });
  it('works with large negative shift factors', function() {
    expect(caesar('Hello, World!', -29)).toEqual('Ebiil, Tloia!');
  });
});
