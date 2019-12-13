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
      assert.isNotOk(line1.isEqual(line2));
    });

    it(" should validate if given lines are equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line1.isEqual(line2));
    });

    it(" should validate if given lines are not the instances of same class", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      assert.isNotOk(line1.isEqual(line2));
    });

    it(" should validate if one of the input in not a line", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = "";
      assert.isNotOk(line1.isEqual(line2));
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
  });
});
