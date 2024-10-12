class Rectangle {
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
        return this._width * this._height * 2;
    }
}