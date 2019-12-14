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

  visit(functionRef) {
    return functionRef(this.x, this.y);
  }

  clone() {
    return new Point(this.x, this.y);
  }
}

module.exports = Point;
