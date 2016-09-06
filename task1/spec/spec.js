var pow = require('../js/app.js');

describe('pow', function() {

  describe('raising x to rank n', function() {

    function makeTest(x) {
      var expected = x * x;
      it('should failed if raising' + x + 'to power 2 != ' + expected, function() {
        expect(pow(x, 2)).toBe(expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });
  
  it('should filed if rasing != 8', function() {
    assert.equal(pow(2, 3), 8);
  });

  it('should failed if raising to 0 exponent != 1', function() {
    expect(pow(2, 0)).toEqual(1);
  });

  it('should failed if raising to negative exponent not a NaN', function() {
    expect(pow(4, -3)).toBeNaN();
  });

  it('should failed if raising to factorial exponent not a NaN', function() {
    expect(pow(7, 1.344)).toBeNaN();
  });

});