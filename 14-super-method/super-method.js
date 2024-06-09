/**
 * Super Method
 */
class Shape {
    paint() {
        console.info("Paint Shape");
    }
}

class Circle extends Shape {
    paint() {
        super.paint(); // memanggil method paint() ke parent class
        console.info("Paint Circle");
    }
}

const circle = new Circle();
circle.paint();

const shape = new Shape();
shape.paint();

console.info(shape);
console.info(circle);
