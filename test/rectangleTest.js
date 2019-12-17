const assert = require("chai").assert;
const Point = require("../src/point.js");
const Rectangle = require("../src/rectangle.js");

describe("Rectangle", function() {
  describe("toString", function() {
    it("should give string representation of given rectangle", function() {
      let endA = new Point(1, 1);
      let endB = new Point(2, 3);
      let rectangle = new Rectangle(endA, endB);
      let expected = "[Rectangle (1,1) to (2,3)]";
      assert.strictEqual(rectangle.toString(), expected);
    });
  });

  describe("area", function() {
    it("should give the area of given rectangle when coordinates are positive", function() {
      let endA = new Point(0, 0);
      let endB = new Point(5, 5);
      let rectangle = new Rectangle(endA, endB);
      assert.equal(rectangle.area, 25);
    });

    it("should give the area of given rectangle when coordinates are negative", function() {
      let endA = new Point(0, 0);
      let endB = new Point(-5, -5);
      let rectangle = new Rectangle(endA, endB);
      assert.equal(rectangle.area, 25);
    });
  });

  describe("perimeter", function() {
    it("should give the perimeter of given rectangle if the coordinates are positive", function() {
      let endA = new Point(0, 0);
      let endB = new Point(5, 4);
      let rectangle = new Rectangle(endA, endB);
      assert.equal(rectangle.perimeter, 18);
    });

    it("should give the perimeter of given rectangle if the coordinates are negative", function() {
      let endA = new Point(0, 0);
      let endB = new Point(-5, 0);
      let rectangle = new Rectangle(endA, endB);
      assert.equal(rectangle.perimeter, 10);
    });
  });
});
