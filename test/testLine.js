const Line = require("../src/line.js");
const assert = require("assert");

describe("Line", function() {
  describe("toString", function() {
    it("should give the string representation of the line", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line1.toString();
      const expected = `Line : endA(1, 2)--------endB(3, 4})`;
      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqual", function() {
    it(" should validate if given lines are not equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 4, y: 5 }, { x: 6, y: 6 });
      const actual = line1.isEqual(line2);
      assert.strictEqual(actual, false);
    });

    it(" should validate if given lines are equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line1.isEqual(line2);
      assert.ok(actual);
    });
  });
});
