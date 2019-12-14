const Point = require("../src/point.js");

const arePointsEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};

const isOrdinateOnTheLine = function(y, point1, point2) {
  return (y >= point1.y && y <= point2.y) || (y <= point1.y && y >= point2.y);
};

const isAbscissaOnTheLine = function(x, point1, point2) {
  return (x >= point1.x && x <= point2.x) || (x <= point1.x && x >= point2.x);
};

const isLineParallelToXAxis = function(y, point1, point2) {
  return y == point1.y && point1.y == point2.y;
};

const isLineParallelToYAxis = function(x, point1, point2) {
  return x == point1.x && point1.x == point2.x;
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
    if (!isOrdinateOnTheLine(y, this.endA, this.endB)) return NaN;
    if (isLineParallelToXAxis(y, this.endA, this.endB)) return this.endA.x;
    return (y - this.endA.y) / this.slope + this.endA.x;
  }

  findY(x) {
    if (!isAbscissaOnTheLine(x, this.endA, this.endB)) return NaN;
    if (isLineParallelToYAxis(x, this.endA, this.endB)) return this.endA.y;
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
      isAbscissaOnTheLine(point.x, this.endA, this.endB) &&
      isOrdinateOnTheLine(point.y, this.endA, this.endB)
    );
  }
}

module.exports = Line;
