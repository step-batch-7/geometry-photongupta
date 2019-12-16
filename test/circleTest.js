const Circle = require("../src/circle.js");
const Point = require("../src/point.js");
const assert = require("chai").assert;

describe("toString", function() {
  it("should give string representation of the circle", function() {
    const point = new Point(0, 0);
    const circle = new Circle(point, 5);
    let expected = "[Circle @(0,0) radius 5]";
    assert.deepStrictEqual(circle.toString(), expected);
  });
});
