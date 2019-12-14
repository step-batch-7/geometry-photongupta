const Point = require("../src/point.js");
const assert = require("chai").assert;

describe("Point", function() {
  describe("toString", function() {
    it("should give the string representation of the point", function() {
      const point = new Point(2, 3);
      const actual = point.toString();
      const expected = `[Point @(2,3)]`;
      assert.strictEqual(actual, expected);
    });
  });
});
