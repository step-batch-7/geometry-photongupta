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
      let endA = new Point(8, 10);
      let endB = new Point(22, 5);
      let rectangle = new Rectangle(endA, endB);
      assert.equal(rectangle.area, 70);
    });

    it("should give the area of given rectangle when coordinates are negative", function() {
      let endA = new Point(-1, -1);
      let endB = new Point(-5, -5);
      let rectangle = new Rectangle(endA, endB);
      assert.equal(rectangle.area, 16);
    });
  });

  describe("perimeter", function() {
    it("should give the perimeter of given rectangle if the coordinates are positive", function() {
      let endA = new Point(8, 5);
      let endB = new Point(22, 5);
      let rectangle = new Rectangle(endA, endB);
      assert.equal(rectangle.perimeter, 28);
    });

    it("should give the perimeter of given rectangle if the coordinates are negative", function() {
      let endA = new Point(-1, -1);
      let endB = new Point(-1, -1);
      let rectangle = new Rectangle(endA, endB);
      assert.equal(rectangle.perimeter, 0);
    });
  });

  describe("isEqualTo", function() {
    it("should validate if two rectangles have same coordinate", function() {
      let rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      let rectangle2 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });

    it("should not validate if two rectangles are different", function() {
      let rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      let rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 2 });
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });

    it("should not validate if given rectangle is not the instance of rectangle", function() {
      let rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      let rectangle2 = { endA: { x: 1, y: 1 }, endC: { x: 1, y: 2 } };
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });
  });

  describe("hasPoint", function() {
    it(" should validate if the given point lies on the one of the sides of the rectangle", function() {
      let rectangle = new Rectangle({ x: 1, y: 13 }, { x: 33, y: 5 });
      let point = new Point(16, 13);
      assert.isTrue(rectangle.hasPoint(point));
    });

    it(" should  not validate if the given point is not lies on the perimeter of the rectangle", function() {
      let rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      let point = new Point(6, 6);
      assert.isFalse(rectangle.hasPoint(point));
    });
  });

  describe("covers", function() {
    it("should validate if the given point lies inside the circle", function() {
      let rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      let point = new Point(2, 2);
      assert.isTrue(rectangle.covers(point));
    });

    it("should not  validate if the given point lies outside of the circle", function() {
      let rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      let point = new Point(6, 6);
      assert.isFalse(rectangle.covers(point));
    });
  });
});
