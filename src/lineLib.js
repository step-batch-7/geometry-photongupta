class Line {
  constructor(x1, y1, x2, y2) {
    this.point1 = {};
    this.point2 = {};
    this.point1.x = x1;
    this.point1.y = y1;
    this.point2.x = x2;
    this.point2.y = y2;
  }
  toString() {
    return JSON.stringify(this);
  }
  isEqual(other) {
    return (
      this.point1.x == other.point1.x &&
      this.point1.y == other.point1.x &&
      this.point2.x == other.point2.x &&
      this.point2.y == other.point2.y
    );
  }
}
module.exports = Line;
