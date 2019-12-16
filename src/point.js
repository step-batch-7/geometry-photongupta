class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return this.x == other.x && this.y == other.y;
  }

  visit(action) {
    return action(this.x, this.y);
  }

  clone() {
    return new Point(this.x, this.y);
  }

  findDistanceTo(other) {
    if (!(other instanceof Point)) return NaN;
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.hypot(dx, dy);
  }

  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports = Point;
