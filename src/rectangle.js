const Point = require("./point.js");

class Rectangle {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endB.x, endB.y);
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endC = `(${this.endC.x},${this.endC.y})`;
    return `[Rectangle ${endA} to ${endC}]`;
  }

  get area() {
    const endB = new Point(this.endC.x, this.endA.y);
    const length = endB.findDistanceTo(this.endA);
    const width = endB.findDistanceTo(this.endC);
    return length * width;
  }
}

module.exports = Rectangle;
