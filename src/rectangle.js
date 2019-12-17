const Point = require("./point.js");

const isCoordinateInRange = function(coordinate, coordinateOfEnds) {
  const [minLimit, maxLimit] = coordinateOfEnds.sort((x, y) => x - y);
  return coordinate >= minLimit && coordinate <= maxLimit;
};

class Rectangle {
  constructor(start, end) {
    this.endA = new Point(start.x, start.y);
    this.endC = new Point(end.x, end.y);
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endC = `(${this.endC.x},${this.endC.y})`;
    return `[Rectangle ${endA} to ${endC}]`;
  }

  get length() {
    return Math.abs(this.endA.y - this.endC.y);
  }

  get width() {
    return Math.abs(this.endA.x - this.endC.x);
  }

  get area() {
    return this.length * this.width;
  }

  get perimeter() {
    return 2 * (this.length + this.width);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return this.endA.isEqualTo(other.endA) && this.endC.isEqualTo(other.endC);
  }

  hasPoint(point) {
    return (
      ((point.x == this.endC.x || point.x == this.endA.x) &&
        isCoordinateInRange(point.y, [this.endA.y, this.endC.y])) ||
      ((point.y == this.endC.y || point.y == this.endA.y) &&
        isCoordinateInRange(point.x, [this.endA.x, this.endC.x]))
    );
  }

  covers(point) {
    return (
      isCoordinateInRange(point.x, [this.endA.x, this.endC.x]) &&
      isCoordinateInRange(point.y, [this.endA.y, this.endC.y])
    );
  }
}

module.exports = Rectangle;
