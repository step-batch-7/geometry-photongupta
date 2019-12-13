const arePointsEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `Line: ${endA} -- ${endB}`;
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
    const squareOfdx = dx * dx;
    const squareOfdy = dy * dy;
    const length = Math.sqrt(squareOfdx + squareOfdy);
    return length;
  }

  get slope() {
    const dy = this.endB.y - this.endA.y;
    const dx = this.endB.x - this.endA.x;
    return dy / dx;
  }

  isParallelTo(other) {
    const slopeOfGivenLine = this.slope;
    const slopeOfOtherLine = other.slope;
    return slopeOfGivenLine == slopeOfOtherLine;
  }
}

module.exports = Line;
