class Circle {
  constructor({ x, y }, radius) {
    this.cetralPoint = { x, y }
    this.radius = radius;
  }

  static getLengthFromRadius(radius) {
    return 2 * Math.PI * radius;
  }

  static createCircle(x, y, r) {
    return new Circle({ x, y }, r);
  }


  getLength() {
    return 2 * Math.PI * this.radius;
  }

  getCopy() {
    return Object.assign({}, this);
  }

  checkPointInside({ x, y }) {
    return Math.pow((x - this.cetralPoint.x), 2) + Math.pow((y - this.cetralPoint.y), 2) < Math.pow(this.radius, 2)
  }

  toString() {
    return `Circle object with Radius:${this.radius}`;
  }
}

let circle = new Circle({ x: 5, y: 2 }, 20);
let circleCopy = circle.getCopy();

circle.radius = 15;

circleCopy.radius = 20;
circleCopy.x = 1;
circleCopy.y = 2;

console.log(circle);
console.log(circleCopy);

console.log(circle.getLength());
console.log(Circle.getLengthFromRadius(5));
console.log(Circle.createCircle(1, 2, 3));
console.log(circle.toString());
console.log(circle.checkPointInside({ x: 1, y: 2 }));