const Point = require("./point.js");
const Line = require("./line.js");
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

  get otherDiagonal() {
    const endB = new Point(this.endC.x, this.endA.y);
    const endD = new Point(this.endA.x, this.endC.y);
    return { endB, endD };
  }

  get length() {
    return this.endA.findDistanceTo(this.otherDiagonal.endB);
  }

  get width() {
    return this.endC.findDistanceTo(this.otherDiagonal.endB);
  }

  get area() {
    return this.length * this.width;
  }

  get perimeter() {
    return 2 * (this.length + this.width);
  }

  isEqual(other) {
    if (!(other instanceof Rectangle)) return false;
    return this.endA.isEqualTo(other.endA) && this.endC.isEqualTo(other.endC);
  }

  hasPoint(point) {
    const AB = new Line(this.endA, this.otherDiagonal.endB);
    const BC = new Line(this.otherDiagonal.endB, this.endC);
    const CD = new Line(this.endC, this.otherDiagonal.endD);
    const DA = new Line(this.otherDiagonal.endD, this.endA);
    return point.isOn(AB) || point.isOn(BC) || point.isOn(CD) || point.isOn(DA);
  }

  covers(point) {
    const [xMin, xMax] = [this.endA.x, this.endC.x].sort((x, y) => x - y);
    const [yMin, yMax] = [this.endA.y, this.endC.y].sort((x, y) => x - y);
    return (
      point.x >= xMin && point.x <= xMax && point.y >= yMin && point.y <= yMax
    );
  }
}

module.exports = Rectangle;
