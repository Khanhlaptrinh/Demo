class Rectangle2 {
    _width;
    _height;
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    getArea() {
        return this._height * this._width;
    }

    getPerimeter() {
        return this._width * this._width * 2;
    }

}

function drawCanvas() {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");

// Create gradient
        let grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
        grd.addColorStop(1, "white");

// Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(10, 10, 150, 80);
}
