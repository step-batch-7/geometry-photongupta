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

  describe("isEqual", function() {
    it(" should validate if given points are not equal", function() {
      const point1 = new Point(2, 3);
      const point2 = new Point(1, 3);
      assert.isFalse(point1.isEqual(point2));
    });

    it(" should validate if given points are equal", function() {
      const point1 = new Point(3, 4);
      const point2 = new Point(3, 4);
      assert.isTrue(point1.isEqual(point2));
    });

    it(" should give false if other point is not the instance of Point", function() {
      const point1 = new Point(3, 4);
      const point2 = { x: 3, y: 4 };
      assert.isFalse(point1.isEqual(point2));
    });

    it(" should give false if other point is not a point", function() {
      const point1 = new Point(3, 4);
      const point2 = "";
      assert.isFalse(point1.isEqual(point2));
    });
  });
});
