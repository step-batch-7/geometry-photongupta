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
    if (!(other instanceof Circle)) return false;
    return this.centre.isEqualTo(other.centre) && this.radius == other.radius;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return this.centre.findDistanceTo(point) == this.radius;
  }

  moveTo(point) {
    if (!(point instanceof Point)) return null;
    return new Circle(point, this.radius);
  }
}

module.exports = Circle;
