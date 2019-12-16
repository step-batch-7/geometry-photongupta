const Point = require("./point.js");

class Circle {
  constructor(centre, radius) {
    this.centre = new Point(centre.x, centre.y);
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.centre.x},${this.centre.y}) radius ${this.radius}]`;
  }

  isEqualTo(other) {
    if (!other instanceof Circle) return false;
    return this.centre.isEqualTo(other.centre) && this.radius == other.radius;
  }
}

module.exports = Circle;
