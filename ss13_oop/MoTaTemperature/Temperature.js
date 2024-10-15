class Temperature {
    _Celsius;


    constructor(Celsius) {
        this._Celsius = Celsius;
    }

    getCelsius() {
        return this._Celsius;
    }

    getCelsiustoFahrenheit() {
        return (this._Celsius + 32) * 9 / 5;
    }

    getCelsiustoKenvin() {
        return this._Celsius - 273.15;
    }
}
    let Cel1 = new Temperature(23);
    console.log("Nhiệt độ ở độ C: " + Cel1.getCelsius() + "°C");
    console.log("Nhiệt độ ở độ F: " + Cel1.getCelsiustoFahrenheit() + "°F");
    console.log("Nhiệt độ ở Kelvin: " + Cel1.getCelsiustoKenvin() + "K");