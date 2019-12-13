const Line = require("../src/line.js");
const assert = require("chai").assert;

describe("Line", function() {
  describe("toString", function() {
    it("should give the string representation of the line", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line1.toString();
      const expected = `Line: (1,2) -- (3,4)`;
      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqual", function() {
    it(" should validate if given lines are not equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 4, y: 5 }, { x: 6, y: 6 });
      assert.isFalse(line1.isEqual(line2));
    });

    it(" should validate if given lines are equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.isTrue(line1.isEqual(line2));
    });

    it(" should validate if given lines are not the instances of same class", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      assert.isFalse(line1.isEqual(line2));
    });

    it(" should validate if one of the input in not a line", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = "";
      assert.isFalse(line1.isEqual(line2));
    });
  });

  describe("length", function() {
    it("should give the distance between two points if points are different", function() {
      const line = new Line({ x: 5, y: 5 }, { x: 2, y: 1 });
      assert.strictEqual(line.length, 5);
    });

    it("should give the zero if points are same ", function() {
      const line = new Line({ x: 5, y: 2 }, { x: 5, y: 2 });
      assert.strictEqual(line.length, 0);
    });

    it("should give the distance between two points if coordinates are negative", function() {
      const line = new Line({ x: -5, y: -4 }, { x: -6, y: -4 });
      assert.strictEqual(line.length, 1);
    });

    it("should give the distance between two points if coordinates are floating point numbers", function() {
      const line = new Line({ x: 1.5, y: 2.0 }, { x: 1.5, y: 1.5 });
      assert.approximately(line.length, 0.5, 0.5);
    });
  });

  describe("isParallelTo", function() {
    it("should give true if the given line is parallel to the other line", function() {
      const line1 = new Line({ x: 3, y: 4 }, { x: 5, y: 8 });
      const line2 = new Line({ x: 8, y: 1 }, { x: 10, y: 5 });
      assert.isTrue(line1.isParallelTo(line2));
    });

    it("should give false if the given line is not parallel to the other line", function() {
      const line1 = new Line({ x: 3, y: 4 }, { x: 5, y: 8 });
      const line2 = new Line({ x: 9, y: 1 }, { x: 10, y: 5 });
      assert.isFalse(line1.isParallelTo(line2));
    });

    it("should give true if both the lines are coinciding", function() {
      const line1 = new Line({ x: 3, y: 4 }, { x: 5, y: 8 });
      const line2 = new Line({ x: 3, y: 4 }, { x: 5, y: 8 });
      assert.isTrue(line1.isParallelTo(line2));
    });
  });

  describe("slope", function() {
    it("should give the slope of given line", function() {
      const line = new Line({ x: 3, y: 4 }, { x: 5, y: 8 });
      assert.strictEqual(line.slope, 2);
    });

    it("should give the slope of given line if points are negative", function() {
      const line = new Line({ x: -3, y: -4 }, { x: -5, y: -8 });
      assert.strictEqual(line.slope, 2);
    });

    it("should give the slope of given line if points are floating points numbers", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1.5, y: 2.5 });
      assert.strictEqual(line.slope, 1);
    });

    it("should give zero if line is parallel to x axis", function() {
      const line = new Line({ x: -3, y: 4 }, { x: 5, y: 4 });
      assert.strictEqual(line.slope, 0);
    });

    it("should give infinity if line is parallel to y axis", function() {
      const line = new Line({ x: 3, y: -4 }, { x: 3, y: 8 });
      assert.strictEqual(line.slope, Infinity);
    });

    it("should give the NaN if points are same ", function() {
      const line = new Line({ x: 5, y: 2 }, { x: 5, y: 2 });
      assert.isNaN(line.slope);
    });
  });
});
