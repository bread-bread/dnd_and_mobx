import { CIRCLE } from "../UI/ToolbarButton";

class Circle {
  constructor(center, radius = 16) {
    this.coord = center;
    this.radius = radius;
    this.type = CIRCLE;
  }

  get diameter() {
    return 2 * this.radius;
  }

  get bounds() {
    const coord = { x: this.center.x - this.radius, y: this.center.y - this.radius };
    const size = { width: this.diameter, height: this.diameter };

    return {
      coord,
      size
    };
  }

  clone() {
    return new Circle(this.center, this.radius);
  }
}

export default Circle;
