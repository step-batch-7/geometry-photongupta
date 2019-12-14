const Point = require("../src/point.js");

const arePointsEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};

const isPointOnTheLine = function(coordinate, point1, point2) {
  return (
    (coordinate >= point1 && coordinate <= point2) ||
    (coordinate <= point1 && coordinate >= point2)
  );
};

const isLineParallelToAxis = function(coordinate, point1, point2) {
  return coordinate == point1 && point1 == point2;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
  }

  isEqual(other) {
    if (!(other instanceof Line)) return false;
    return (
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  get length() {
    const dx = this.endA.x - this.endB.x;
    const dy = this.endA.y - this.endB.y;
    const length = Math.hypot(dx, dy);
    return length;
  }

  get slope() {
    const dy = this.endB.y - this.endA.y;
    const dx = this.endB.x - this.endA.x;
    return dy / dx;
  }

  isParallelTo(other) {
    if (this.isEqual(other)) return false;
    return other instanceof Line && this.slope == other.slope;
  }

  findX(y) {
    if (!isPointOnTheLine(y, this.endA.y, this.endB.y)) return NaN;
    if (isLineParallelToAxis(y, this.endA.y, this.endB.y)) return this.endA.x;
    return (y - this.endA.y) / this.slope + this.endA.x;
  }

  findY(x) {
    if (!isPointOnTheLine(x, this.endA.x, this.endB.x)) return NaN;
    if (isLineParallelToAxis(x, this.endA.x, this.endB.x)) return this.endA.y;
    return (x - this.endA.x) * this.slope + this.endA.y;
  }

  split() {
    const midAbscissa = (this.endA.x + this.endB.x) / 2;
    const midOrdinate = (this.endA.y + this.endB.y) / 2;
    const midPoint = new Point(midAbscissa, midOrdinate);
    const line1 = new Line(this.endA, midPoint);
    const line2 = new Line(midPoint, this.endB);
    return [line1, line2];
  }

  hasPoint(point) {
    return (
      isPointOnTheLine(point.x, this.endA.x, this.endB.x) &&
      isPointOnTheLine(point.y, this.endA.y, this.endB.y)
    );
  }
}

module.exports = Line;
