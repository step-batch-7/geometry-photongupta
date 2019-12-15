const Point = require("../src/point.js");

const arePointsEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};

const isCoordinateOnTheLine = function(coordinate, coordinateOfEnds) {
  const [coordinateOfEnd1, coordinateOfEnd2] = coordinateOfEnds.sort(
    (x, y) => x - y
  );
  return coordinate >= coordinateOfEnd1 && coordinate <= coordinateOfEnd2;
};

const arePointsCollinear = function(point1, point2, point3) {
  const [x1, y1] = [point1.x, point1.y];
  const [x2, y2] = [point2.x, point2.y];
  const [x3, y3] = [point3.x, point3.y];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
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
    if (!other instanceof Line) return false;
    const isSlopeEqual = this.slope == other.slope;
    const arePointsNonCollinear = !arePointsCollinear(
      this.endA,
      this.endB,
      other.endA
    );
    return isSlopeEqual && arePointsNonCollinear;
  }

  findX(ordinate) {
    if (!isCoordinateOnTheLine(ordinate, [this.endA.y, this.endB.y]))
      return NaN;
    if (this.slope == 0) return this.endA.x;
    return (ordinate - this.endA.y) / this.slope + this.endA.x;
  }

  findY(abscissa) {
    if (!isCoordinateOnTheLine(abscissa, [this.endA.x, this.endB.x]))
      return NaN;
    if (this.slope == Infinity) return this.endA.y;
    return (abscissa - this.endA.x) * this.slope + this.endA.y;
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
    if (!(point instanceof Point)) return false;
    return point.x == this.findX(point.y) || point.y == this.findY(point.x);
  }
}

module.exports = Line;
