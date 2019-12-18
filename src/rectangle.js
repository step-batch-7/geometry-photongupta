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
    this.vertexA = new Point(start.x, start.y);
    this.vertexC = new Point(end.x, end.y);
  }

  toString() {
    const vertexA = `(${this.vertexA.x},${this.vertexA.y})`;
    const vertexC = `(${this.vertexC.x},${this.vertexC.y})`;
    return `[Rectangle ${vertexA} to ${vertexC}]`;
  }

  get area() {
    const [length, width] = getLengthAndWidth(this.vertexA, this.vertexC);
    return length * width;
  }

  get perimeter() {
    const [length, width] = getLengthAndWidth(this.vertexA, this.vertexC);
    return 2 * (length + width);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return (
      this.vertexA.isEqualTo(other.vertexA) &&
      this.vertexC.isEqualTo(other.vertexC)
    );
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const hasPointOnX =
      hasSameCoordinate(point.y, this.vertexA.y, this.vertexC.y) &&
      isInRange(point.x, [this.vertexA.x, this.vertexC.x]);
    const hasPointOnY =
      hasSameCoordinate(point.x, this.vertexA.x, this.vertexC.x) &&
      isInRange(point.y, [this.vertexA.y, this.vertexC.y]);
    return hasPointOnX || hasPointOnY;
  }

  covers(point) {
    if (!(point instanceof Point)) return false;
    return (
      isInRange(point.x, [this.vertexA.x, this.vertexC.x]) &&
      isInRange(point.y, [this.vertexA.y, this.vertexC.y])
    );
  }
}

module.exports = Rectangle;
