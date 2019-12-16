const Circle = require("../src/circle.js");
const Point = require("../src/point.js");
const assert = require("chai").assert;

describe("Circle", function() {
  describe("toString", function() {
    it("should give string representation of the circle", function() {
      const point = new Point(0, 0);
      const circle = new Circle(point, 5);
      let expected = "[Circle @(0,0) radius 5]";
      assert.strictEqual(circle.toString(), expected);
    });
  });

  describe("isEqualTo", function() {
    it("should validate if two circles have same radius and same centre", function() {
      const point1 = new Point(0, 0);
      const circle1 = new Circle(point1, 5);
      const point2 = new Point(0, 0);
      const circle2 = new Circle(point2, 5);
      assert.isTrue(circle1.isEqualTo(circle2));
    });

    it("should give false if two circles have same radius and different centres", function() {
      const point1 = new Point(0, 0);
      const circle1 = new Circle(point1, 5);
      const point2 = new Point(1, 1);
      const circle2 = new Circle(point2, 5);
      assert.isFalse(circle1.isEqualTo(circle2));
    });

    it("should give false if two circles have different radius and same centres", function() {
      const point1 = new Point(1, 1);
      const circle1 = new Circle(point1, 8);
      const point2 = new Point(1, 1);
      const circle2 = new Circle(point2, 5);
      assert.isFalse(circle1.isEqualTo(circle2));
    });

    it("should give false if two circles have different radius and  centres", function() {
      const point1 = new Point(0, 0);
      const circle1 = new Circle(point1, 3);
      const point2 = new Point(1, 1);
      const circle2 = new Circle(point2, 5);
      assert.isFalse(circle1.isEqualTo(circle2));
    });
  });
});
