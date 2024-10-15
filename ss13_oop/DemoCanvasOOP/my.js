const circle = new Circle(100, 200, 30, "red");
circle.draw();

// setInterval(() => {
//     circle.x += 4;
//     circle.draw();
// }, 100)

function play() {
    circle.moveRight();
    requestAnimationFrame(play);
}
play();