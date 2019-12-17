const Point = require("./point.js");
const Line = require("./line.js");
class Rectangle {
  #endB;
  #endD;
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endB.x, endB.y);
    this.#endB = new Point(endB.x, endA.y);
    this.#endD = new Point(endA.x, endB.y);
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endC = `(${this.endC.x},${this.endC.y})`;
    return `[Rectangle ${endA} to ${endC}]`;
  }

  get length() {
    return this.endA.findDistanceTo(this.#endB);
  }

  get width() {
    return this.endC.findDistanceTo(this.#endB);
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
    const AB = new Line(this.endA, this.#endB);
    const BC = new Line(this.#endB, this.endC);
    const CD = new Line(this.endC, this.#endD);
    const DA = new Line(this.#endD, this.endA);
    return point.isOn(AB) || point.isOn(BC) || point.isOn(CD) || point.isOn(DA);
  }
}

module.exports = Rectangle;
