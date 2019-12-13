const isPointsEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    return `Line : endA(${this.endA.x}, ${this.endA.y}) -- endB(${this.endB.x}, ${this.endB.y}})`;
  }

  isEqual(otherLine) {
    const isValidLine = otherLine instanceof Line;
    return (
      isValidLine &&
      isPointsEqual(this.endA, otherLine.endA) &&
      isPointsEqual(this.endB, otherLine.endB)
    );
  }
}

module.exports = Line;
