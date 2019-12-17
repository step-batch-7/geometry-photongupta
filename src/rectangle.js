const Point = require("./point.js");

const isCoordinateInRange = function(coordinate, coordinateOfEnds) {
  const [coordinateOfEnd1, coordinateOfEnd2] = coordinateOfEnds.sort(
    (x, y) => x - y
  );
  return coordinate >= coordinateOfEnd1 && coordinate <= coordinateOfEnd2;
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
    return this.endA.y - this.endC.y;
  }

  get width() {
    return this.endA.x - this.endC.x;
  }

  get area() {
    return Math.abs(this.length) * Math.abs(this.width);
  }

  get perimeter() {
    return 2 * (Math.abs(this.length) + Math.abs(this.width));
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return this.endA.isEqualTo(other.endA) && this.endC.isEqualTo(other.endC);
  }

  hasPoint(point) {
    return (
      ((point.x == this.endC.x || point.x == this.endA.x) &&
        isCoordinateInRange(point.y, [this.endA.y, this.endC.y])) ||
      ((point.y == this.endC.y || point.x == this.endA.y) &&
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
