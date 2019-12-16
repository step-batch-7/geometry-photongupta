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

  describe("isEqualTo", function() {
    it(" should validate if given points are not equal", function() {
      const point1 = new Point(2, 3);
      const point2 = new Point(1, 3);
      assert.isFalse(point1.isEqualTo(point2));
    });

    it(" should validate if given points are equal", function() {
      const point1 = new Point(3, 4);
      const point2 = new Point(3, 4);
      assert.isTrue(point1.isEqualTo(point2));
    });

    it(" should give false if other point is not the instance of Point", function() {
      const point1 = new Point(3, 4);
      const point2 = { x: 3, y: 4 };
      assert.isFalse(point1.isEqualTo(point2));
    });

    it(" should give false if other point is not a point", function() {
      const point1 = new Point(3, 4);
      const point2 = "";
      assert.isFalse(point1.isEqualTo(point2));
    });
  });

  describe("visit", function() {
    it(" should give the result according to the function option", function() {
      const point = new Point(3, 4);
      assert.strictEqual(
        point.visit((x, y) => x + y),
        7
      );
    });

    it(" should give the result according to the function option", function() {
      const point = new Point(3, 4);
      assert.strictEqual(
        point.visit((x, y) => x * y),
        12
      );
    });
  });

  describe("clone", function() {
    it("should give the clone of given point", function() {
      const point = new Point(3, 4);
      assert.deepStrictEqual(point.clone(), { x: 3, y: 4 });
    });
  });

  describe("findDistanceTo", function() {
    it("should give the distance between given points", function() {
      const point1 = new Point(5, 5);
      const point2 = new Point(2, 1);
      assert.strictEqual(point1.findDistanceTo(point2), 5);
    });

    it("should give zero if points are same", function() {
      const point1 = new Point(5, 5);
      const point2 = new Point(5, 5);
      assert.strictEqual(point1.findDistanceTo(point2), 0);
    });

    it("should give not a number if other point is not the instance of Point class", function() {
      const point1 = new Point(5, 5);
      const point2 = { x: 2, y: 1 };
      assert.isNaN(point1.findDistanceTo(point2));
    });
  });
});
