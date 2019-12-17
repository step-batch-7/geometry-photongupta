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

    it("should give false if the other circle is not the instance of Circle class", function() {
      const point1 = new Point(0, 0);
      const circle1 = new Circle(point1, 3);
      const point2 = new Point(1, 1);
      const circle2 = { centre: point2, radius: 3 };
      assert.isFalse(circle1.isEqualTo(circle2));
    });
  });

  describe("area", function() {
    it("should give the area of given circle", function() {
      const point = new Point(0, 0);
      const circle = new Circle(point, 7);
      assert.closeTo(circle.area, 154, 0.5);
    });

    it("should give zero if radius of the circle is zero", function() {
      const point = new Point(0, 0);
      const circle = new Circle(point, 0);
      assert.closeTo(circle.area, 0, 0.5);
    });
  });

  describe("perimeter", function() {
    it("should give perimeter of the given circle", function() {
      const point = new Point(0, 0);
      const circle = new Circle(point, 7);
      assert.closeTo(circle.perimeter, 44, 0.5);
    });

    it("should give zero if the radius of circle is zero", function() {
      const point = new Point(0, 0);
      const circle = new Circle(point, 0);
      assert.closeTo(circle.perimeter, 0, 0);
    });
  });

  describe("hasPoint", function() {
    it("should validate if the given point is lies on circumference of the circle", function() {
      const point = new Point(0, 0);
      const point1 = new Point(0, 5);
      const circle = new Circle(point, 5);
      assert.isTrue(circle.hasPoint(point1));
    });

    it("should not validate if the given point is not lies on circumference of the circle", function() {
      const point = new Point(0, 0);
      const point1 = new Point(0, 6);
      const circle = new Circle(point, 5);
      assert.isFalse(circle.hasPoint(point1));
    });

    it("should validate if the given point is lies on circumference of the circle", function() {
      const point = new Point(0, 0);
      const point1 = { x: 0, y: 5 };
      const circle = new Circle(point, 5);
      assert.isFalse(circle.hasPoint(point1));
    });
  });

  describe("moveTo", function() {
    it("should create a new circle of given center having same radius", function() {
      const point = new Point(0, 0);
      const point1 = new Point(1, 1);
      const circle = new Circle(point, 5);
      assert.deepStrictEqual(circle.moveTo(point1), new Circle(point1, 5));
    });
  });

  describe("covers", function() {
    it("should validate if the given point is inside the circle", function() {
      const point = new Point(0, 0);
      const point1 = { x: 2, y: 2 };
      const circle = new Circle(point1, 5);
      assert.isTrue(circle.covers(point));
    });

    it("should  not validate if the given point is inside the circle", function() {
      const point1 = new Point(0, 0);
      const point = { x: 0, y: 6 };
      const circle = new Circle(point1, 5);
      assert.isFalse(circle.covers(point));
    });

    it("should give false if the given point is not the instance of Point class", function() {
      const point1 = new Point(0, 0);
      const point = { x: 0, y: 2 };
      const circle = new Circle(point1, 5);
      assert.isFalse(circle.covers(point));
    });
  });
});
