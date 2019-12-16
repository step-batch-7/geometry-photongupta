const Line = require("../src/line.js");
const Point = require("../src/point.js");
const assert = require("chai").assert;

describe("Line", function() {
  describe("toString", function() {
    it("should give the string representation of the line", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line1.toString();
      const expected = `[Line (1,2) to (3,4)]`;
      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqualTo", function() {
    it(" should validate if given lines are not equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 4, y: 5 }, { x: 6, y: 6 });
      assert.isFalse(line1.isEqualTo(line2));
    });

    it(" should validate if given lines are equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.isTrue(line1.isEqualTo(line2));
    });

    it(" should validate if points of lines are swapped", function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 1, y: 1 }, { x: 0, y: 0 });
      assert.isTrue(line1.isEqualTo(line2));
    });

    it(" should validate if given lines are not the instances of same class", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      assert.isFalse(line1.isEqualTo(line2));
    });

    it(" should validate if one of the input in not a line", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = "";
      assert.isFalse(line1.isEqualTo(line2));
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
      assert.approximately(line.length, 0.5, 0.2);
    });
  });

  describe("slope", function() {
    it("should give the slope of given line if points are positive", function() {
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

  describe("isParallelTo", function() {
    it("should give true if the given line is parallel to the other line", function() {
      const line1 = new Line({ x: 3, y: 4 }, { x: 5, y: 8 });
      const line2 = new Line({ x: 8, y: 1 }, { x: 10, y: 5 });
      assert.isTrue(line1.isParallelTo(line2));
    });

    it("should give false  if the given lines are segment of the same line", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 2, y: 2 });
      const line2 = new Line({ x: 3, y: 3 }, { x: 4, y: 4 });
      assert.isFalse(line1.isParallelTo(line2));
    });

    it("should give false if the given line is not parallel to the other line", function() {
      const line1 = new Line({ x: 3, y: 4 }, { x: 5, y: 8 });
      const line2 = new Line({ x: 9, y: 1 }, { x: 10, y: 5 });
      assert.isFalse(line1.isParallelTo(line2));
    });

    it("should give false if the lines are not the instances of same class", function() {
      const line1 = new Line({ x: 3, y: 4 }, { x: 5, y: 8 });
      const line2 = { endA: { x: 9, y: 1 }, endB: { x: 10, y: 5 } };
      assert.isFalse(line1.isParallelTo(line2));
    });

    it("should give false if both the lines are coinciding", function() {
      const line1 = new Line({ x: 3, y: 4 }, { x: 5, y: 8 });
      const line2 = new Line({ x: 3, y: 4 }, { x: 5, y: 8 });
      assert.isFalse(line1.isParallelTo(line2));
    });
  });

  describe("findX", function() {
    it("should give the the abscissa of the line for given ordinate", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      assert.equal(line.findX(2), 2);
    });

    it("should give the the abscissa of the line for given ordinate if line parallel to x axis", function() {
      const line = new Line({ x: 3, y: 1 }, { x: 1, y: 1 });
      assert.equal(line.findX(1), 3);
    });

    it("should say not a number if points of given lines are same", function() {
      const line = new Line({ x: 1, y: 5 }, { x: 1, y: 5 });
      assert.isNaN(line.findX(2));
    });

    it("should say not a number if ordinate is outside of the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 1, y: 5 });
      assert.isNaN(line.findX(12));
    });
  });

  describe("findY", function() {
    it("should give the the ordinate of the line for given abscissa", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      assert.deepStrictEqual(line.findY(2), 2);
    });

    it("should give the the abscissa of the line for given ordinate if line parallel to y axis", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 4 });
      assert.equal(line.findY(1), 2);
    });

    it("should say not a number if points of given lines are same", function() {
      const line = new Line({ x: 1, y: 5 }, { x: 1, y: 5 });
      assert.isNaN(line.findY(2));
    });

    it("should say not a number if abscissa is outside of the line", function() {
      const line = new Line({ x: 1, y: 5 }, { x: 5, y: 5 });
      assert.isNaN(line.findY(12));
    });
  });

  describe("split", function() {
    it("should give the  two equal lines of half of the length of given line", function() {
      const line = new Line({ x: 0, y: 2 }, { x: 2, y: 0 });
      const line1 = new Line({ x: 0, y: 2 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 1, y: 1 }, { x: 2, y: 0 });
      assert.deepStrictEqual(line.split(), [line1, line2]);
    });

    it("should give the  two equal lines of half of the length of given line when points are negative", function() {
      const line = new Line({ x: 0, y: -2 }, { x: -2, y: 0 });
      const line1 = new Line({ x: 0, y: -2 }, { x: -1, y: -1 });
      const line2 = new Line({ x: -1, y: -1 }, { x: -2, y: 0 });
      assert.deepStrictEqual(line.split(), [line1, line2]);
    });
  });

  describe("hasPoint", function() {
    it("should give true if the point is situated on the line", function() {
      const line = new Line({ x: 0, y: 2 }, { x: 2, y: 0 });
      const point = new Point(1, 1);
      assert.isTrue(line.hasPoint(point));
    });

    it("should give false if the  abscissa of point is not situated on the line", function() {
      const line = new Line({ x: 0, y: 2 }, { x: 2, y: 0 });
      const point = new Point(4, 5);
      assert.isFalse(line.hasPoint(point));
    });

    it("should give false if the ordinate of point is not situated on the line", function() {
      const line = new Line({ x: 0, y: 2 }, { x: 2, y: 0 });
      const point = new Point(4, 5);
      assert.isFalse(line.hasPoint(point));
    });

    it("should give false if the  abscissa and ordinate of point is  not situated on the line", function() {
      const line = new Line({ x: 0, y: 2 }, { x: 2, y: 0 });
      const point = new Point(4, 5);
      assert.isFalse(line.hasPoint(point));
    });
  });

  describe("findPointFromStart", function() {
    it("should give the point on ine which is at the given distance from start of the line", function() {
      const line = new Line({ x: 8, y: 1 }, { x: 10, y: 1 });
      assert.deepStrictEqual(line.findPointFromStart(1), { x: 9, y: 1 });
    });

    it("should give null if distance is greater than length of line", function() {
      const line = new Line({ x: 8, y: 1 }, { x: 10, y: 1 });
      assert.isNull(line.findPointFromStart(5));
    });

    it("should give null if distance is not a number", function() {
      const line = new Line({ x: 8, y: 1 }, { x: 10, y: 1 });
      assert.isNull(line.findPointFromStart(""));
    });

    it("should give null if distance is less than zero", function() {
      const line = new Line({ x: 8, y: 1 }, { x: 10, y: 1 });
      assert.isNull(line.findPointFromStart(-2));
    });
  });

  describe("findPointFromEnd", function() {
    it("should give the point on line which is at the given distance from start of the line", function() {
      const line = new Line({ x: 7, y: 1 }, { x: 10, y: 1 });
      assert.deepStrictEqual(line.findPointFromEnd(1), { x: 9, y: 1 });
    });

    it("should give null if distance is greater than length of line", function() {
      const line = new Line({ x: 8, y: 1 }, { x: 8, y: 3 });
      assert.isNull(line.findPointFromEnd(5));
    });

    it("should give null if distance is not a number", function() {
      const line = new Line({ x: 8, y: 1 }, { x: 10, y: 1 });
      assert.isNull(line.findPointFromEnd(""));
    });

    it("should give null if distance is less than zero", function() {
      const line = new Line({ x: 8, y: 1 }, { x: 10, y: 1 });
      assert.isNull(line.findPointFromEnd(-2));
    });
  });
});
