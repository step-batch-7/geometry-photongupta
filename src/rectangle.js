const Point = require("./point.js");

const isInRange = function(coordinate, coordinateOfEnds) {
  const [minLimit, maxLimit] = coordinateOfEnds.sort((x, y) => x - y);
  return coordinate >= minLimit && coordinate <= maxLimit;
};

const hasSameCoordinate = function(coordinate, a, b) {
  return coordinate == a || coordinate == b;
};

const getLengthAndWidth = function(end1, end2) {
  const length = Math.abs(end1.y - end2.y);
  const width = Math.abs(end1.x - end2.x);
  return [length, width];
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

  get area() {
    const [length, width] = getLengthAndWidth(this.endA, this.endC);
    return length * width;
  }

  get perimeter() {
    const [length, width] = getLengthAndWidth(this.endA, this.endC);
    return 2 * (length + width);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return this.endA.isEqualTo(other.endA) && this.endC.isEqualTo(other.endC);
  }

  hasPoint(point) {
    const hasPointOnX =
      hasSameCoordinate(point.y, this.endA.y, this.endC.y) &&
      isInRange(point.x, [this.endA.x, this.endC.x]);
    const hasPointOnY =
      hasSameCoordinate(point.x, this.endA.x, this.endC.x) &&
      isInRange(point.y, [this.endA.y, this.endC.y]);
    return hasPointOnX || hasPointOnY;
  }

  covers(point) {
    return (
      isInRange(point.x, [this.endA.x, this.endC.x]) &&
      isInRange(point.y, [this.endA.y, this.endC.y])
    );
  }
}

module.exports = Rectangle;
