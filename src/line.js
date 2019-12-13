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
    let dx = this.endA.x - this.endB.x;
    let dy = this.endA.y - this.endB.y;
    let squareOfdx = dx * dx;
    let squareOfdy = dy * dy;
    const length = Math.sqrt(squareOfdx + squareOfdy);
    return length;
  }
}

module.exports = Line;
