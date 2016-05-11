var incrnum = require('../incrnum');

describe("incrnum", function () {
  it("should be an incremented number when coerced to string", function () {
      var result;

      result = incrnum + ''; // 0
      result = incrnum + ''; // 1
        
      expect( result ).toBe( '1' );
  });

  it("should be an incremented number when called as a function", function () {
      expect( incrnum() ).toBe( 2 );
  });
});
