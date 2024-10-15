class Circle {
    _radius;
    _color;
    x;
    y;
    _ctx;
    _canvas;


    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this._radius = radius;
        this._color = color;
        this._canvas = document.createElement("canvas");
        this._ctx = this._canvas.getContext("2d");
    }

    draw() {
        this._ctx.beginPath();
        this._ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this._ctx.stroke();
        this._ctx.closePath();
    }

    moveRight() {
        this.clearCanvas(); // xoa man hinh truoc khi di chuyen
        this.x += 5;
        this.draw();
    }

    clearCanvas() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}