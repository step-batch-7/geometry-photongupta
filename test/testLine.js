const Line = require("../src/lineLib.js");
const assert = require("assert");

describe("Line", function() {
  describe("toString", function() {
    it("should stringify the given object", function() {
      let line1 = new Line(1, 2, 3, 4);
      let actual = line1.toString();
      let expected = '{"point1":{"x":1,"y":2},"point2":{"x":3,"y":4}}';
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe("isEqual", function() {
    it(" should validate if given lines are not equal", function() {
      let line1 = new Line(1, 2, 3, 4);
      let line2 = new Line(5, 6, 7, 8);
      let actual = line1.isEqual(line2);
      let expected = false;
      assert.deepStrictEqual(actual, expected);
    });
    it(" should validate if given lines are equal", function() {
      let line1 = new Line(1, 2, 3, 4);
      let line2 = new Line(1, 2, 3, 4);
      let actual = line1.isEqual(line2);
      let expected = false;
      assert.deepStrictEqual(actual, expected);
    });
  });
});
