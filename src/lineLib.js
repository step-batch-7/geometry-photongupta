class Line {
  constructor(x1, y1, x2, y2) {
    this.endA = { x: x1, y: y1 };
    this.endB = { x: x2, y: y2 };
  }

  toString() {
    return `Line : endA(${this.endA.x}, ${this.endA.y})--------endB(${this.endB.x}, ${this.endB.y}})`;
  }

  isEqual(other) {
    return (
      this.endA.x == other.endA.x &&
      this.endA.y == other.endA.x &&
      this.endB.x == other.endB.x &&
      this.endB.y == other.endB.y
    );
  }
}

module.exports = Line;
