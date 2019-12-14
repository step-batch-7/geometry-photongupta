class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  isEqual(other) {
    if (!(other instanceof Point)) return false;
    return this.x == other.x && this.y == other.y;
  }
}

module.exports = Point;
