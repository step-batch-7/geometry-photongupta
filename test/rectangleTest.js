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

  describe("isEqualTo", function() {
    it("should validate if two rectangles have same coordinate", function() {
      let rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      let rectangle2 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      assert.isTrue(rectangle1.isEqual(rectangle2));
    });

    it("should validate if coordinates of diagonals of rectangles are swapped", function() {
      let rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      let rectangle2 = new Rectangle({ x: 5, y: 4 }, { x: 0, y: 0 });
      assert.isTrue(rectangle1.isEqual(rectangle2));
    });

    it("should validate if two rectangles have same coordinate", function() {
      let rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      let rectangle2 = new Rectangle({ x: 0, y: 4 }, { x: 5, y: 0 });
      assert.isTrue(rectangle1.isEqual(rectangle2));
    });

    it("should validate if coordinates of diagonals of rectangles are swapped", function() {
      let rectangle1 = new Rectangle({ x: 0, y: 4 }, { x: 5, y: 0 });
      let rectangle2 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      assert.isTrue(rectangle1.isEqual(rectangle2));
    });

    it("should not validate if two rectangles are different", function() {
      let rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      let rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 2 });
      assert.isFalse(rectangle1.isEqual(rectangle2));
    });
  });
});
