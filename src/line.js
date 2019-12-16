const Point = require("../src/point.js");

const isCoordinateOnTheLine = function(coordinate, coordinateOfEnds) {
  const [coordinateOfEnd1, coordinateOfEnd2] = coordinateOfEnds.sort(
    (x, y) => x - y
  );
  return coordinate >= coordinateOfEnd1 && coordinate <= coordinateOfEnd2;
};

const arePointsCollinear = function(point1, point2, point3) {
  const line1 = new Line(point1, point2);
  const line2 = new Line(point2, point3);
  return line1.slope == line2.slope;
};

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      (this.endA.isEqualTo(other.endA) && this.endB.isEqualTo(other.endB)) ||
      (this.endA.isEqualTo(other.endB) && this.endB.isEqualTo(other.endA))
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
    const slope = dy / dx;
    return slope == -Infinity ? Infinity : slope;
  }

  isParallelTo(other) {
    if (!other instanceof Line) return false;
    const arePointsNonCollinear = !arePointsCollinear(
      this.endA,
      this.endB,
      other.endA
    );
    const areSlopesEqual = this.slope == other.slope;
    return areSlopesEqual && arePointsNonCollinear;
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
    if (this.slope == Infinity || this.slope == -Infinity) return this.endA.y;
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

  findPointFromStart(distance) {
    if (distance > this.length || !Number.isInteger(distance) || distance < 0)
      return null;
    const ratio = distance / this.length;
    return {
      x: (1 - ratio) * this.endA.x + this.endB.x * ratio,
      y: (1 - ratio) * this.endA.y + this.endB.y * ratio
    };
  }

  findPointFromEnd(distance) {
    return new Line(this.endB, this.endA).findPointFromStart(distance);
  }
}

module.exports = Line;
